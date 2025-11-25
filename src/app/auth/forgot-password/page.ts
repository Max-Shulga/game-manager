'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { TNullable } from '@/core/types/utility.types';

const ForgotPasswordPage = () => {
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<TNullable<string>>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Password reset link has been sent to your email.');
    }

    setLoading(false);
  };
};
