import { supabase } from '../lib/supabase'
import { describe, it, expect } from 'vitest'
import './setup.non-react'

describe('Supabase Connection', () => {
  it('should have environment variables set', () => {
    expect(import.meta.env.VITE_SUPABASE_URL).toBeDefined()
    expect(import.meta.env.VITE_SUPABASE_ANON_KEY).toBeDefined()
  })

  it('should be able to connect to Supabase', async () => {
    const { data, error } = await supabase.from('tenants').select('count').limit(1)
    expect(error).toBeNull()
    expect(data).toBeDefined()
  })

  it('should have correct database schema', async () => {
    const { data: tenants, error: tenantsError } = await supabase
      .from('tenants')
      .select('*')
      .limit(1)

    expect(tenantsError).toBeNull()
    if (tenants && tenants.length > 0) {
      const tenant = tenants[0]
      expect(tenant).toHaveProperty('id')
      expect(tenant).toHaveProperty('name')
      expect(tenant).toHaveProperty('created_at')
    }
  })
}) 