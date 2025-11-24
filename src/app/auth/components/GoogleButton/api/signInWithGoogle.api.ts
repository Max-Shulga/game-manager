import { createClient } from '@/utils/supabase/client';

const signInWithGoogle = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_CALLBACK_URL!;
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: supabaseUrl
    }
  });
  if (error) throw new Error(error.message);
  return data;
};

export default signInWithGoogle;
