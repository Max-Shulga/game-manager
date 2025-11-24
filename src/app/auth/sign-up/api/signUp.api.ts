import { createClient } from '@/utils/supabase/client';
import type { TAuth } from '@/app/auth/types/auth.types';

const signUp = async ({ email, password }: TAuth) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

export { signUp };
