import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywirzvsfnutdryllbqqh.supabase.co'
const supabaseKey = 'sb_publishable_lgmiiZ-ZnrYDlFVFv_GkOA_vNlXuhqv'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Review = {
  id: string
  name: string
  location: string
  rating: number
  text: string
  approved: boolean
  created_at: string
}
