import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:4000/api/user/reset-password/${token}`, 
        { password, confirmPassword }, 
        { withCredentials: true }
      );
      toast.success(res.data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Reset Password</h1>
        <p className="text-sm text-center text-gray-600">Set a new password.</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full mt-6 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition disabled:bg-gray-400"
        >
          {loading ? "Resetting Password..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
