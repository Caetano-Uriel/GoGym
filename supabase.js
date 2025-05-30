// supabase.js
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdfzwuidujshxyhtgqju.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZnp3dWlkdWpzaHh5aHRncWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTg4OTQsImV4cCI6MjA2NDEzNDg5NH0.ophLbd-O1uIgZ0eA5KoBlHNXTDrJRUTA1l8w3msAfmM'; // coloque sua chave aqui

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // importante para mobile
  },
});
