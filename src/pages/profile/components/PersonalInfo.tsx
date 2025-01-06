import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from '../../../schemas/profile';
import { Loader } from '../../../components/ui/Loader';

export const PersonalInfo = () => {
  const { user, updateProfile } = useStore();
  const [isUpdating, setIsUpdating] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      dateOfBirth: user?.dateOfBirth || '',
      notifications: {
        email: user?.notifications?.email ?? true,
        sms: user?.notifications?.sms ?? false,
        promotions: user?.notifications?.promotions ?? true,
      },
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setIsUpdating(true);
      await updateProfile(data);
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      {successMessage && (
        <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Date of Birth
          </label>
          <input
            {...register('dateOfBirth')}
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium text-text mb-4">Notification Preferences</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              {...register('notifications.email')}
              type="checkbox"
              className="rounded text-primary"
            />
            <span className="ml-2 text-sm text-text">Email notifications</span>
          </label>

          <label className="flex items-center">
            <input
              {...register('notifications.sms')}
              type="checkbox"
              className="rounded text-primary"
            />
            <span className="ml-2 text-sm text-text">SMS notifications</span>
          </label>

          <label className="flex items-center">
            <input
              {...register('notifications.promotions')}
              type="checkbox"
              className="rounded text-primary"
            />
            <span className="ml-2 text-sm text-text">Promotional emails</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isUpdating}
        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isUpdating ? <Loader /> : 'Save Changes'}
      </button>
    </form>
  );
};