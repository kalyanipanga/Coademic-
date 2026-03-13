import { createClient } from '@supabase/supabase-js';

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://antodjwbpqrhyhzziqnk.supabase.co';
let supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_v7ks4o_q-hkexhqisgbk6q_cwq7g1mc';

supabaseUrl = supabaseUrl.trim();
supabaseAnonKey = supabaseAnonKey.trim();

// Check if the user accidentally swapped the URL and the Anon Key
if (supabaseUrl.includes('eyJ') && supabaseAnonKey.includes('supabase.co')) {
  console.warn('It looks like VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are swapped. Swapping them back automatically.');
  const temp = supabaseUrl;
  supabaseUrl = supabaseAnonKey;
  supabaseAnonKey = temp;
} else if (supabaseUrl.includes('eyJ')) {
  console.error('VITE_SUPABASE_URL looks like a JWT token (Anon Key). Please check your environment variables.');
  supabaseUrl = 'https://placeholder.supabase.co';
}

if (supabaseUrl && !supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
  supabaseUrl = `https://${supabaseUrl}`;
}

try {
  new URL(supabaseUrl);
} catch (e) {
  console.error('Invalid Supabase URL provided:', supabaseUrl);
  supabaseUrl = 'https://placeholder.supabase.co';
}

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase URL or Anon Key is missing. Check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
