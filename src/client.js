import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mokkswvboxkcnlytdkza.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1va2tzd3Zib3hrY25seXRka3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5ODExNzYsImV4cCI6MjAwMjU1NzE3Nn0.sRc2FFokNiOmAOvPbrkV2cPzse8EJc60kcTMZlA5uMs'
export const supabase = createClient(supabaseUrl, supabaseKey)

// import.meta.env.SUPABASE_KEY