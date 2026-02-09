# PrivyID - Privacy-First KYC Infrastructure

> A comprehensive, API-first identity verification platform for businesses

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Application Modules](#application-modules)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Deployment](#deployment)

---

## 🎯 Overview

PrivyID is a modern, privacy-focused KYC (Know Your Customer) and KYB (Know Your Business) verification platform. Built with React and Vite, it provides a seamless experience for merchants to verify customer identities and businesses while maintaining the highest standards of data privacy and security.

### Key Highlights

- **Multi-Tenant Architecture**: Separate flows for KYC, KYB, and Combined verification
- **Super Admin Dashboard**: Comprehensive platform management and analytics
- **Real-time Analytics**: Track verifications, revenue, and merchant performance
- **API-First Design**: RESTful APIs with comprehensive documentation
- **Secure & Compliant**: Built with security and regulatory compliance in mind

---

## ✨ Features

### For Merchants

- **Single & Batch Verification**: Process individual or bulk verification requests
- **Real-time Dashboard**: Monitor verification status and analytics
- **API Integration**: Easy-to-use REST APIs with SDKs
- **Token Management**: Secure API token generation and management
- **Webhook Support**: Real-time event notifications
- **Comprehensive History**: Track all verification activities

### For Super Admins

- **Merchant Management**: Onboard and manage merchant accounts
- **Verification Oversight**: Review and approve verification requests
- **Advanced Analytics**: Revenue trends, merchant growth, API usage
- **Audit Logs**: Complete activity trail with filtering and export
- **API Management**: Rate limiting, webhook configuration, key management
- **Support System**: Ticket management with assignment and tracking
- **Platform Settings**: Configure security, billing, email, and notifications

---

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization
- **CSS3** - Styling with custom design tokens

### Development Tools

- **ESLint** - Code linting
- **Vite HMR** - Hot module replacement
- **Git** - Version control

### APIs & Services

- **RESTful APIs** - Backend communication
- **Webhook System** - Event-driven notifications
- **OAuth 2.0** - Authentication (planned)

---

## 📁 Project Structure

```
app-privyid/
├── src/
│   ├── app/                          # Application core
│   │   ├── routes/                   # Routing configuration
│   │   └── App.jsx                   # Root component
│   │
│   ├── features/                     # Feature modules
│   │   ├── onboarding/              # User onboarding flow
│   │   │   ├── steps/               # Onboarding steps
│   │   │   ├── OnboardingFlow.jsx
│   │   │   └── onboarding.css
│   │   │
│   │   ├── merchant-kyc/            # KYC verification module
│   │   │   ├── pages/               # KYC pages
│   │   │   ├── components/          # KYC components
│   │   │   ├── layouts/             # KYC layout
│   │   │   └── merchant-kyc.css
│   │   │
│   │   ├── merchant-kyb/            # KYB verification module
│   │   │   ├── pages/               # KYB pages
│   │   │   ├── components/          # KYB components
│   │   │   ├── layouts/             # KYB layout
│   │   │   └── merchant-kyb.css
│   │   │
│   │   ├── merchant-combined/       # Combined KYC+KYB module
│   │   │   ├── pages/               # Combined pages
│   │   │   ├── components/          # Combined components
│   │   │   ├── layouts/             # Combined layout
│   │   │   └── merchant-combined.css
│   │   │
│   │   └── super-admin/             # Super Admin module
│   │       ├── pages/               # Admin pages (9 pages)
│   │       ├── components/          # Admin components
│   │       │   ├── api/             # API management components
│   │       │   ├── settings/        # Settings components
│   │       │   └── support/         # Support components
│   │       ├── layouts/             # Admin layout
│   │       └── super-admin.css
│   │
│   ├── shared/                      # Shared resources
│   │   ├── components/              # Reusable components
│   │   │   ├── Profile/             # Profile components
│   │   │   ├── Tabs.jsx
│   │   │   ├── StatusModal.jsx
│   │   │   └── NotFound.jsx
│   │   └── styles/                  # Global styles
│   │
│   ├── components/                  # App-level components
│   │   ├── PageHeader/              # Page header component
│   │   └── Sidebar/                 # Navigation sidebar
│   │
│   ├── context/                     # React Context
│   │   └── AppContext.jsx           # Global state management
│   │
│   ├── assets/                      # Static assets
│   │   └── images/                  # Image files
│   │
│   └── main.jsx                     # Application entry point
│
├── legacy/                          # Legacy HTML/CSS files
│   ├── super-admin.html
│   ├── merchant-kyc.html
│   ├── merchant-kyb.html
│   └── merchant-combined.html
│
├── public/                          # Public assets
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/app-privyid/app-privyid.git
   cd app-privyid
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Application Modules

### 1. Onboarding Flow

**Route**: `/`

Multi-step onboarding process for new merchants:

- Login/Signup
- Email Verification
- Welcome Screen
- Account Type Selection
- Service Type Selection (KYC/KYB/Both)
- Business Verification
- Integration Setup

### 2. Merchant KYC

**Route**: `/merchant-kyc`

Individual identity verification module:

- **Dashboard**: Overview of verification metrics
- **Single Verification**: Verify one customer at a time
- **Batch Verification**: Upload CSV for bulk processing
- **History**: View all verification records
- **API**: API documentation and testing
- **Tokens**: Manage API tokens
- **Settings**: Configure account preferences
- **Support**: Contact support and view tickets
- **User Profile**: Manage account details
- **Notifications**: View system notifications

### 3. Merchant KYB

**Route**: `/merchant-kyb`

Business verification module with similar features to KYC but tailored for business entities.

### 4. Merchant Combined

**Route**: `/merchant-combined`

Unified module for merchants handling both KYC and KYB verifications:

- All KYC features
- All KYB features
- Unified dashboard and analytics

### 5. Super Admin

**Route**: `/super-admin`

Comprehensive platform management:

#### Pages (9 Total)

1. **Dashboard** (`/super-admin`)
   - Platform overview
   - Key metrics and statistics

2. **Verifications** (`/super-admin/verifications`)
   - 10 sample verification records
   - Overview cards (Total Merchants, Verifications, Revenue, Response Time)
   - Filtering and pagination

3. **Merchants** (`/super-admin/merchants`)
   - 10 sample merchant records
   - Merchant management (Active, Inactive, Suspended)
   - Filter and export functionality

4. **Analytics** (`/super-admin/analytics`)
   - Revenue trends chart
   - Verification volume chart (KYC vs KYB)
   - Merchant growth chart
   - Top performing merchants table

5. **API & Developers** (`/super-admin/api`)
   - Environment toggle (Production/Sandbox)
   - API Keys management (5 sample keys)
   - API Analytics (request volume, top endpoints)
   - Rate Limit configuration
   - Webhook management (3 sample webhooks)
   - Documentation links

6. **Audit Logs** (`/super-admin/audit-logs`)
   - 10 comprehensive audit records
   - Advanced filtering (action type, status, date range)
   - Search functionality
   - Export (CSV, JSON)

7. **Settings** (`/super-admin/settings`)
   - Platform settings (maintenance mode, rate limits)
   - Security settings (2FA, IP whitelist, password policy)
   - Billing settings (payment gateway, currency)
   - Email settings (SMTP configuration)
   - Notification preferences
   - Audit configuration

8. **Support** (`/super-admin/support`)
   - 10 sample support tickets
   - Ticket filtering (Open, In Progress, Resolved, Closed)
   - Ticket assignment system
   - Response composer
   - Priority management (Critical, High, Medium, Low)

9. **User Profile** (`/super-admin/user-profile`)
   - Account details
   - Security settings
   - Activity log (5 recent actions)

10. **Notifications** (`/super-admin/notifications`)
    - 7 categorized notifications
    - Filtering (Merchant Activity, Security Events, System Alerts, Support)
    - Read/unread status

---

## 🔌 API Documentation

### Base URL

```
Production: https://api.privyid.com/v1
Sandbox: https://sandbox-api.privyid.com/v1
```

### Authentication

All API requests require an API key in the header:

```
Authorization: Bearer YOUR_API_KEY
```

### Key Endpoints

#### Verification

- `POST /verify/kyc` - Submit KYC verification
- `POST /verify/kyb` - Submit KYB verification
- `GET /verify/{id}` - Get verification status
- `POST /verify/batch` - Batch verification upload

#### Merchants

- `GET /merchants` - List all merchants
- `POST /merchants` - Create new merchant
- `GET /merchants/{id}` - Get merchant details
- `PATCH /merchants/{id}` - Update merchant

#### Webhooks

- `POST /webhooks` - Create webhook
- `GET /webhooks` - List webhooks
- `DELETE /webhooks/{id}` - Delete webhook

### Webhook Events

- `verification.completed`
- `verification.failed`
- `merchant.created`
- `merchant.updated`
- `payment.received`
- `api.key.generated`

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use CSS modules or scoped styles
- Maintain consistent naming conventions
- Write descriptive comments for complex logic

### Component Guidelines

1. **Keep components small and focused**
2. **Use shared components for reusability**
3. **Implement proper error boundaries**
4. **Add PropTypes or TypeScript for type safety**
5. **Follow accessibility best practices**

---

## 🌐 Deployment

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://api.privyid.com/v1
VITE_SANDBOX_API_URL=https://sandbox-api.privyid.com/v1
VITE_APP_ENV=production
```

### Build & Deploy

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - GitHub Pages

### Recommended Hosting

- **Vercel**: Zero-config deployment for Vite apps
- **Netlify**: Continuous deployment from Git
- **AWS**: S3 + CloudFront for scalable hosting

---

## 📊 Key Statistics

- **9 Super Admin Pages** with full functionality
- **14 Reusable Components** for Super Admin
- **10 Sample Records** in each data table
- **4 Feature Modules** (Onboarding, KYC, KYB, Combined)
- **3 Chart Types** (Line, Bar, Area)
- **6 Settings Tabs** for platform configuration
- **5 API Management Tabs** for developers

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary and confidential.

---

## 📧 Contact

For support or inquiries:

- **Email**: support@privyid.com
- **Website**: https://privyid.com
- **Documentation**: https://docs.privyid.com

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Recharts for beautiful data visualizations
- All contributors and testers

---

**Built with ❤️ by the PrivyID Team**
