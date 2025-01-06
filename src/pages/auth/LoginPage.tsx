import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/auth';
import { useStore } from '../../store/useStore';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useStore();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      await login(data);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text">Welcome Back</h2>
          <p className="mt-2 text-text/70">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-text">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-text">
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message as string}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary rounded border-gray-300"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-text">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-text/70">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-primary hover:text-primary/80">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};