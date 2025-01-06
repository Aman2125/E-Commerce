export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  dateOfBirth?: string;
  preferences?: {
    sizePreference?: string;
    colorPreferences?: string[];
    stylePreferences?: string[];
  };
  notifications?: {
    email: boolean;
    sms: boolean;
    promotions: boolean;
  };
}

export interface User extends UserProfile {
  isAdmin: boolean;
}