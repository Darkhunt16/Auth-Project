import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const navigateTo = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, [location]);
    if (location.pathname === '/login' || location.pathname === '/register') {
        return null;
    }
    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:4000/api/user/logout', { withCredentials: true });
            toast.success("Logged out successfully");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsAuthenticated(false);
            navigateTo('/');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Logout failed');
        }
    };
    return (
        <nav className="bg-gray-900 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                <Link to="/" className="text-xl font-bold hover:text-gray-300 transition">
                    Home
                </Link>
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="hover:text-gray-300 transition">
                                Dashboard
                            </Link>
                            <button 
                                onClick={handleLogout} 
                                className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-gray-300 transition">
                                Login
                            </Link>
                            <Link 
                                to="/register" 
                                className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
