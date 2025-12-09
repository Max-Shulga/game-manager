'use client';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { createClient } from '@/utils/supabase/client';

const LogOutButton = () => {
  const supabase = createClient();
  const logout = async () => {
    await supabase.auth.signOut();
    redirect(ROUTES.GUEST.SIGN_IN);
  };
  return <button onClick={() => void logout()}>log out</button>;
};
export default LogOutButton;
