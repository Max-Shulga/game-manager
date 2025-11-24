import { createClient } from '@/utils/supabase/client';
import type { TAuth } from '@/app/auth/types/auth.types';

const signIn = async ({ email, password }: TAuth) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error };
};
export { signIn };
