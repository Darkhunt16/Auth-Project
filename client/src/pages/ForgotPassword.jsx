import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/api/user/forgot-password", { email }, { withCredentials: true });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h1>
        <p className="text-sm text-center text-gray-600">Enter your email to request a password reset.</p>

        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mt-4 text-sm text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Remember your password?</Link>
        </div>

        <button
          type="button"
          onClick={handleForgotPassword}
          disabled={loading}
          className="w-full mt-4 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition disabled:bg-gray-400"
        >
          {loading ? "Requesting..." : "Request Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;


