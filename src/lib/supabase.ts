import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://calfmvbitvsgkrkmpwcw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhbGZtdmJpdHZzZ2tya21wd2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NjMwODQsImV4cCI6MjA5MjUzOTA4NH0.cP87ispqnxCdn4TZzWpXHsVZBzEX-Sg5BJySGqIX7bY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
