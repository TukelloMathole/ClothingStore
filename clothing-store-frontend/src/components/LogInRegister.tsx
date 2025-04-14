import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { registerUser, loginUser } from '../pages/api/auth/authApi';


type AuthModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    toggleForm: () => void;
    isRegister: boolean; // Added this property
  };

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, closeModal }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        phone: '',
        gender: '',
        dob: '',
        address: '',
        style: '',
        subscribe: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    interface FormData {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
        fullName: string;
        phone: string;
        gender: string;
        dob: string;
        address: string;
        style: string;
        subscribe: boolean;
    }

    interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = async (e: SubmitEvent): Promise<void> => {
        e.preventDefault();
      
        try {
          if (isRegister) {
            await registerUser(formData); // Just register
            console.log('Registration successful!');
            setIsRegister(false); // Switch to login
          } else {
            const result = await loginUser({
              Email: formData.email,
              Password: formData.password,
            });
      
            console.log('Login successful:', result);
      
            // Save to localStorage or context (simplified here)
            localStorage.setItem('token', result.accessToken);
            localStorage.setItem('user', JSON.stringify(result));
      
            // Optionally: update parent/global auth state
            // e.g. dispatch({ type: 'LOGIN', payload: result })
      
            closeModal(); // Close modal
          }
        } catch (error: any) {
          console.error('Auth error:', error.message || error);
          alert(error.message || 'Something went wrong');
        }
      };
      
    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    const handleGoogleLogin = () => {
        console.log('Redirect to Google OAuth');
        // window.location.href = "YOUR_GOOGLE_AUTH_URL"
    };

    const handleAppleLogin = () => {
        console.log('Redirect to Apple Sign-In');
        // Apple auth logic
    };

    const handleFacebookLogin = () => {
        console.log('Redirect to Facebook OAuth');
        // Facebook auth logic
    };

    return (
        <div
            className={`fixed inset-0 z-40 ${isOpen ? 'flex' : 'hidden'} items-center justify-center bg-white/30 backdrop-blur-sm`}
            onClick={closeModal}
        >
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-96 px-8 py-6 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg z-50 w-full max-w-md overflow-y-auto max-h-[95vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-full select-none">
                    <div className="flex flex-col items-center justify-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                        <p className="m-0 text-[16px] font-semibold dark:text-white">
                            {isRegister ? 'Create Your Account' : 'Login to your Account'}
                        </p>
                        <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                            {isRegister
                                ? 'Sign up and enjoy a personalized experience with our store.'
                                : 'Get started with our store, sign in and start shopping!'}
                        </span>
                    </div>

                    {/* Social Logins */}
                    {!isRegister && (
                        <div className="w-full space-y-3 mb-6">
                            <SocialButton icon={<FcGoogle size={20} />} text="Continue with Google" onClick={handleGoogleLogin} />
                            <SocialButton icon={<FaApple size={20} />} text="Continue with Apple" onClick={handleAppleLogin} />
                            <SocialButton icon={<FaFacebook size={20} color="#1877F2" />} text="Continue with Facebook" onClick={handleFacebookLogin} />
                            <div className="flex items-center justify-between w-full">
                                <hr className="w-2/5 border-t dark:border-gray-700" />
                                <span className="text-xs text-gray-400">or</span>
                                <hr className="w-2/5 border-t dark:border-gray-700" />
                            </div>
                        </div>
                    )}

                    {/* Registration Specific Fields */}
                    {isRegister && (
                        <>
                            <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                            <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                            <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={['Male', 'Female', 'Prefer not to say']} />
                            <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                            <Textarea label="Shipping Address" name="address" value={formData.address} onChange={handleChange} />
                            <Select label="Preferred Style" name="style" value={formData.style} onChange={handleChange} options={['Casual', 'Formal', 'Streetwear', 'Sporty']} />
                        </>
                    )}

                    {/* Shared Fields */}
                    <Input label="Username" name="username" value={formData.username} onChange={handleChange} />
                    <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                    <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />

                    {isRegister && (
                        <Input label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
                    )}

                    {isRegister && (
                        <div className="w-full flex items-center gap-2 mb-5">
                            <input
                                type="checkbox"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}
                                className="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-900 dark:border-gray-500"
                            />
                            <label className="text-sm text-gray-600 dark:text-gray-400">Subscribe to our fashion newsletter</label>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                    >
                        {isRegister ? 'Register' : 'Login'}
                    </button>

                    {/* Toggle & Close */}
                    <div className="mt-4 text-center">
                        <button
                            type="button"
                            onClick={toggleForm}
                            className="text-xs text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
                        </button>
                    </div>
                    <div className="mt-2 text-center">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="text-xs text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// 🔁 Reusable Components
const Input: React.FC<{ label: string; name: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, name, type = 'text', value, onChange }) => (
    <div className="w-full flex flex-col gap-2">
        <label className="font-semibold text-xs text-gray-400">{label}</label>
        <input
            name={name}
            type={type}
            placeholder={label}
            value={value}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        />
    </div>
);

const Select: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[] }> = ({ label, name, value, onChange, options }) => (
    <div className="w-full flex flex-col gap-2">
        <label className="font-semibold text-xs text-gray-400">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        >
            <option value="">Select {label}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const Textarea: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }> = ({ label, name, value, onChange }) => (
    <div className="w-full flex flex-col gap-2">
        <label className="font-semibold text-xs text-gray-400">{label}</label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={label}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none resize-none dark:border-gray-500 dark:bg-gray-900"
            rows={3}
        />
    </div>
);

interface SocialButtonProps {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center gap-3 justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
        <span>{icon}</span>
        <span className="text-sm font-medium">{text}</span>
    </button>
);

export default AuthModal;
