# Bertie: Multi-Tenant SaaS Knowledge Platform

## 📝 Overview
Bertie is a multi-tenant SaaS platform designed to empower experts (tenants) to create branded AI-powered knowledge hubs. Each tenant can offer personalized coaching, guided tools, learning resources, and direct user interactions through a seamless user interface.

The platform consists of two core dashboards:
- **Developer Dashboard**: Allows administrators to manage tenants, branding customization, coaches/tools (services), resources, membership tiers, subscriptions, and analytics.
- **User Dashboard**: Provides end users with access to expert-created content, personalized tools, and learning resources based on their subscription tier.

## 🎯 Key Business Goals
- Enable experts to quickly launch their branded AI knowledge platforms
- Provide flexible subscription tiers that gate access to premium content and tools
- Secure multi-tenant data isolation leveraging Supabase with PostgreSQL and RLS policies

## 🛠️ System Architecture & Tech Stack

### Frontend
- **Bolt.new**: For rapid static UI prototyping (Component & Page design)
- **Cursor**: Integrating dynamic logic (API calls, authentication flows) into imported Bolt.new components
- **React**: Core frontend framework with React Context for state management
- **Netlify**: CI/CD pipeline for deployments (DEV/TEST/PROD environments)

### Backend
- **Supabase**: Backend-as-a-service platform providing:
  - PostgreSQL Database
  - Authentication (Supabase Auth)
  - Storage (for managing tenant-specific assets such as images/videos/docs)
  - Row-Level Security (RLS) Policies

### External Integrations
- **MindPal**: Embedded AI coaching and tools via iframe
- **Stripe**: Subscription management & payments

## 📚 Database Schema Overview

| Table | Purpose |
|-------|---------|
| roles | Defines global roles (developer, tenant admin, user) |
| user_roles | Maps users to global roles |
| tenants | Stores tenant branding settings and configurations |
| user_tenants | Associates users with specific tenants |
| categories | Groups tenant-specific services/resources logically |
| membership_tiers | Defines tenant-specific subscription tiers |
| services | Unified table for coaches/tools with subscription gating logic |
| resources | Content resources (PDFs/videos/courses) gated by membership tiers |
| resource_courses | Manages course modules within resources |
| threads | User-created repository items |
| thread_contents | Saved content linked to repository threads |
| favorites | User bookmarks for services/resources (tenant-scoped) |
| subscriptions | Tracks user subscriptions & Stripe integration details |

### Important DB Design Principles:
- **Tenant Isolation**: All tenant-specific data is scoped with a tenant_id field and secured by Supabase RLS policies
- **Unified Service Model**: Coaches & tools share a table with a service_type discriminator field
- **Membership Tiers**: Service/resource access gated by defined subscription tiers

## 🚀 Implementation Roadmap

### ✅ Supabase Connectivity Verification
- Confirm frontend Supabase connectivity & RLS enforcement

### ✅ Authentication Setup
- Integrate Supabase Auth into frontend
- Implement global role assignments

### ✅ Developer Dashboard CRUD
- CRUD operations for tenants, branding settings, membership tiers, services, and resources

### ✅ Bolt.new UI Integration
- Import static UI components from Bolt.new into Cursor
- Dynamically integrate API calls & React context

### ✅ User Dashboard Development
- Build tier-based content filtering & MindPal iframe integration

### ✅ Stripe Subscription Management
- Implement Stripe webhook handling & Supabase integration

### ✅ End-to-End Testing
- Comprehensive manual testing followed by automated testing setup

## 💻 Development Workflow with Bolt.new & Cursor

### Bolt.new ➡️ Cursor Workflow:
1. Design static UI components/pages in Bolt.new
2. Export and import them into Cursor
3. Attach dynamic frontend logic (API calls, auth flows) in Cursor

### Cursor Best Practices:
- Provide targeted prompts specifying exactly what files/functions to modify
- Commit frequently and review diffs carefully to avoid unintended changes from Cursor Composer

### Version Control:
- GitHub feature branches & pull requests for each incremental change or feature set
- Thorough code reviews to ensure security and maintainability

## ⚠️ Known Pitfalls & Mitigation Strategies

| Pitfall | Mitigation Strategy |
|---------|-------------------|
| Cursor Composer Overreach | Targeted prompts, frequent reviews & incremental commits |
| Authentication Integration | Independent testing of auth flows & RLS policy validation |
| Schema Stability | Lock DB schema early; careful planned future enhancements |
| Frontend/Backend Sync Issues | Clear component boundaries, incremental testing |

## ✅ Code Quality & Simplicity Guidelines
- Keep SQL queries lean with clear documentation of schema & RLS policies
- Avoid unnecessary complexity; prefer React Context initially before introducing Redux/Zustand only if required later
- Clearly document component hierarchy and backend schema early in the development lifecycle

## 📖 Documentation & Testing Approach
- Document schema diagrams, API endpoints, RLS policies, and frontend component structure as we build incrementally
- Prioritize manual verification after each integration step initially; automate testing in later phases once core functionality is stable

## 🎨 Coding Pattern Preferences

### Core Principles
- Always prefer simple solutions over complex ones
- Avoid code duplication by checking existing codebase for similar functionality
- Write environment-aware code (dev, test, prod)
- Make only requested or well-understood changes
- Keep the codebase clean and organized

### Code Organization
- Avoid files exceeding 200-300 lines of code (refactor when approaching this limit)
- Avoid writing scripts in files unless necessary
- Never mock data for dev or prod environments (mocking only for tests)
- Never add stubbing or fake data patterns affecting dev/prod environments
- Never overwrite `.env` file without explicit confirmation

### Bug Fixing & Changes
- Exhaust existing implementation options before introducing new patterns/technologies
- Remove old implementations when introducing new patterns
- Focus on maintaining consistency with existing codebase

## 🔄 Coding Workflow Preferences

### Development Focus
- Concentrate only on code relevant to the current task
- Avoid modifying unrelated code
- Write thorough tests for all major functionality
- Consider impact on other methods and areas when making changes

### Architecture & Patterns
- Avoid major changes to working feature patterns/architecture without explicit instruction
- Maintain consistency with established patterns
- Document significant architectural decisions

## 📌 Next Steps
Immediate next step is integrating Supabase Authentication into your frontend using the Cursor prompt provided above.

For further assistance or to review generated code snippets or SQL queries—reach out proactively!

Let's build Bertie into a cleanly coded, robust SaaS platform 🚀 