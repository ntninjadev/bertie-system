export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  auth: {
    Tables: {
      users: {
        Row: {
          instance_id: string | null
          id: string
          aud: string | null
          role: string | null
          email: string | null
          encrypted_password: string | null
          email_confirmed_at: string | null
          invited_at: string | null
          confirmation_token: string | null
          confirmation_sent_at: string | null
          recovery_token: string | null
          recovery_sent_at: string | null
          email_change_token_new: string | null
          email_change: string | null
          email_change_sent_at: string | null
          last_sign_in_at: string | null
          raw_app_meta_data: Json | null
          raw_user_meta_data: Json | null
          is_super_admin: boolean | null
          created_at: string | null
          updated_at: string | null
          phone: string | null
          phone_confirmed_at: string | null
          phone_change: string | null
          phone_change_token: string | null
          phone_change_sent_at: string | null
          confirmed_at: string | null
          email_change_token_current: string | null
          email_change_confirm_status: number | null
          banned_until: string | null
          reauthentication_token: string | null
          reauthentication_sent_at: string | null
          is_sso_user: boolean
          deleted_at: string | null
          is_anonymous: boolean
        }
        Insert: {
          instance_id?: string | null
          id: string
          aud?: string | null
          role?: string | null
          email?: string | null
          encrypted_password?: string | null
          email_confirmed_at?: string | null
          invited_at?: string | null
          confirmation_token?: string | null
          confirmation_sent_at?: string | null
          recovery_token?: string | null
          recovery_sent_at?: string | null
          email_change_token_new?: string | null
          email_change?: string | null
          email_change_sent_at?: string | null
          last_sign_in_at?: string | null
          raw_app_meta_data?: Json | null
          raw_user_meta_data?: Json | null
          is_super_admin?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          phone?: string | null
          phone_confirmed_at?: string | null
          phone_change?: string | null
          phone_change_token?: string | null
          phone_change_sent_at?: string | null
          confirmed_at?: string | null
          email_change_token_current?: string | null
          email_change_confirm_status?: number | null
          banned_until?: string | null
          reauthentication_token?: string | null
          reauthentication_sent_at?: string | null
          is_sso_user?: boolean
          deleted_at?: string | null
          is_anonymous?: boolean
        }
        Update: {
          instance_id?: string | null
          id?: string
          aud?: string | null
          role?: string | null
          email?: string | null
          encrypted_password?: string | null
          email_confirmed_at?: string | null
          invited_at?: string | null
          confirmation_token?: string | null
          confirmation_sent_at?: string | null
          recovery_token?: string | null
          recovery_sent_at?: string | null
          email_change_token_new?: string | null
          email_change?: string | null
          email_change_sent_at?: string | null
          last_sign_in_at?: string | null
          raw_app_meta_data?: Json | null
          raw_user_meta_data?: Json | null
          is_super_admin?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          phone?: string | null
          phone_confirmed_at?: string | null
          phone_change?: string | null
          phone_change_token?: string | null
          phone_change_sent_at?: string | null
          confirmed_at?: string | null
          email_change_token_current?: string | null
          email_change_confirm_status?: number | null
          banned_until?: string | null
          reauthentication_token?: string | null
          reauthentication_sent_at?: string | null
          is_sso_user?: boolean
          deleted_at?: string | null
          is_anonymous?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          name: string
          domain: string | null
          logo_url: string | null
          favicon_url: string | null
          hero_image_url: string | null
          primary_color: string
          secondary_color: string
          accent_color: string
          background_color: string
          text_color: string
          heading_font: string
          body_font: string
          custom_css: string | null
          welcome_message: string | null
          welcome_video_url: string | null
          welcome_video_thumbnail_url: string | null
          stripe_account_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          domain?: string | null
          logo_url?: string | null
          favicon_url?: string | null
          hero_image_url?: string | null
          primary_color?: string
          secondary_color?: string
          accent_color?: string
          background_color?: string
          text_color?: string
          heading_font?: string
          body_font?: string
          custom_css?: string | null
          welcome_message?: string | null
          welcome_video_url?: string | null
          welcome_video_thumbnail_url?: string | null
          stripe_account_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          domain?: string | null
          logo_url?: string | null
          favicon_url?: string | null
          hero_image_url?: string | null
          primary_color?: string
          secondary_color?: string
          accent_color?: string
          background_color?: string
          text_color?: string
          heading_font?: string
          body_font?: string
          custom_css?: string | null
          welcome_message?: string | null
          welcome_video_url?: string | null
          welcome_video_thumbnail_url?: string | null
          stripe_account_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      resources: {
        Row: {
          id: string
          tenant_id: string
          name: string
          description: string | null
          type: string | null
          file_url: string | null
          thumbnail_url: string | null
          size_in_bytes: number | null
          duration_in_seconds: number | null
          is_featured: boolean
          visibility: string
          min_membership_tier_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          description?: string | null
          type?: string | null
          file_url?: string | null
          thumbnail_url?: string | null
          size_in_bytes?: number | null
          duration_in_seconds?: number | null
          is_featured?: boolean
          visibility?: string
          min_membership_tier_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          name?: string
          description?: string | null
          type?: string | null
          file_url?: string | null
          thumbnail_url?: string | null
          size_in_bytes?: number | null
          duration_in_seconds?: number | null
          is_featured?: boolean
          visibility?: string
          min_membership_tier_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          tenant_id: string
          category_id: string | null
          service_type: string
          name: string
          description: string | null
          avatar_url: string | null
          icon_color: string
          mindpal_id: string | null
          iframe_embed_code: string
          display_order: number
          is_featured: boolean
          min_membership_tier_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          category_id?: string | null
          service_type: string
          name: string
          description?: string | null
          avatar_url?: string | null
          icon_color?: string
          mindpal_id?: string | null
          iframe_embed_code: string
          display_order?: number
          is_featured?: boolean
          min_membership_tier_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          category_id?: string | null
          service_type?: string
          name?: string
          description?: string | null
          avatar_url?: string | null
          icon_color?: string
          mindpal_id?: string | null
          iframe_embed_code?: string
          display_order?: number
          is_featured?: boolean
          min_membership_tier_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          tenant_id: string
          name: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          name?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      membership_tiers: {
        Row: {
          id: string
          tenant_id: string
          name: string
          description: string | null
          tier_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          description?: string | null
          tier_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          name?: string
          description?: string | null
          tier_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          tenant_id: string
          stripe_subscription_id: string | null
          status: string | null
          current_period_end: string | null
          membership_tier_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          tenant_id: string
          stripe_subscription_id?: string | null
          status?: string | null
          current_period_end?: string | null
          membership_tier_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          tenant_id?: string
          stripe_subscription_id?: string | null
          status?: string | null
          current_period_end?: string | null
          membership_tier_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          tenant_id: string
          item_type: string | null
          item_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          tenant_id: string
          item_type?: string | null
          item_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          tenant_id?: string
          item_type?: string | null
          item_id?: string
          created_at?: string
        }
      }
      roles: {
        Row: {
          id: string
          name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      threads: {
        Row: {
          id: string
          user_id: string
          tenant_id: string
        }
        Insert: {
          id?: string
          user_id: string
          tenant_id: string
        }
        Update: {
          id?: string
          user_id?: string
          tenant_id?: string
        }
      }
      thread_contents: {
        Row: {
          id: string
          thread_id: string
          tenant_id: string
          content: string
          source: string | null
          source_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          thread_id: string
          tenant_id: string
          content: string
          source?: string | null
          source_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          thread_id?: string
          tenant_id?: string
          content?: string
          source?: string | null
          source_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 