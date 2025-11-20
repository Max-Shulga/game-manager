import { supabase } from '@/lib/supabaseClient';
import type { TAuth } from '@/app/auth/types/auth.types';

const signIn = async ({ email, password }: TAuth) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { error, data };
};
export { signIn };
