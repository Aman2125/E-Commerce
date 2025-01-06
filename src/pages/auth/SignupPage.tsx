import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/auth';
import { useStore } from '../../store/useStore';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useStore();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      await signup(data);
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text">Create Account</h2>
          <p className="mt-2 text-text/70">Join our community today</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-text">
                Full Name
              </label>
              <input
                {...register('name')}
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
              )}
            </div>

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
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-text">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword')}
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register('terms')}
              className="h-4 w-4 text-primary rounded border-gray-300"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-text">
              I agree to the{' '}
              <Link to="/terms" className="text-primary hover:text-primary/80">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:text-primary/80">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Create Account
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-text/70">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary/80">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};