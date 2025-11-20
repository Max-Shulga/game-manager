import { supabase } from '@/lib/supabaseClient';

const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return data.session;
};

export { getSession };
