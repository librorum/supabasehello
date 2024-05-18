import { createClient } from '@supabase/supabase-js';

console.log(process.env);
const supabaseUrl = 'https://mueljcyiqjbctfxeqixb.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const supabase_helper = {
  test: () => {
    console.log('Hello');
  },
};
export default supabase_helper;
