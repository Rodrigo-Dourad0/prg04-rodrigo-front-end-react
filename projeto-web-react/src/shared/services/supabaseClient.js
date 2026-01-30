import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://gpubupouzursxipqijwm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdWJ1cG91enVyc3hpcHFpandtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMTkxMTMsImV4cCI6MjA4MTY5NTExM30.pGoXcMkFvA8wXKhxmfOpiUxmkD8-Sr317--ttluYoas';

export const supabase = createClient(supabaseUrl, supabaseKey);