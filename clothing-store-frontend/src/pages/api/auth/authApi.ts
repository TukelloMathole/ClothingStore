// src/api/authApi.ts

export interface RegisterDto {
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
  
  export interface LoginDto {
    Email: string;
    Password: string;
  }
  
  export interface LoginResponse {
    isLoggedIn: boolean;
    accessToken: string;
    refreshToken: string;
    id: string;
    userName: string;
    email: string;
    role: string;
  }
  
  const API_URL = 'http://localhost:5000/Users';
  
  export const registerUser = async (data: RegisterDto) => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const err = await response.text();
      throw new Error(err || 'Registration failed');
    }
  
    return response.json();
  };
  
  export const loginUser = async (data: LoginDto): Promise<LoginResponse> => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const err = await response.text();
      throw new Error(err || 'Login failed');
    }
  
    return response.json();
  };
  