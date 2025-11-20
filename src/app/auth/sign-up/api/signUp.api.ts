import { supabase } from '@/lib/supabaseClient';
import type { TAuth } from '@/app/auth/types/auth.types';

const signUp = async ({ email, password }: TAuth) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

export { signUp };
