'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      await supabase.auth.getSession();
      router.replace('/');
    };
    void handleCallback();
  }, [router]);

  return <div>Redirecting...</div>;
};

export default CallbackPage;
