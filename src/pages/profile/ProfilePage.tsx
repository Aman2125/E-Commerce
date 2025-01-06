import React from 'react';
import { useStore } from '../../store/useStore';
import { ProfileTabs } from './components/ProfileTabs';
import { Navigate } from 'react-router-dom';

export const ProfilePage = () => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-text mb-8">My Account</h1>
      <ProfileTabs />
    </div>
  );
};