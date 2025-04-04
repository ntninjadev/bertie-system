export interface User {
  id: string
  email: string
  role: 'developer' | 'tenant_admin' | 'user'
  tenant_id?: string
}

export interface Tenant {
  id: string
  name: string
  branding: {
    primary_color: string
    logo_url?: string
  }
  settings: {
    allow_coaches: boolean
    allow_tools: boolean
    allow_resources: boolean
  }
}

export interface Coach {
  id: string
  name: string
  description: string
  initials: string
  tenant_id: string
}

export interface Tool {
  id: string
  name: string
  description: string
  tenant_id: string
  iframe_url: string
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'pdf' | 'video' | 'course'
  tenant_id: string
  membership_tier: string
  url: string
} 