# 🏨 The Wild Oasis

> A modern hotel management dashboard built with React and Supabase

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Query](https://img.shields.io/badge/React_Query-5.90.12-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [How to test](#-how-to-test)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Application Flow](#-application-flow)
- [Pages & Routes](#-pages--routes)
- [Key Components](#-key-components)
- [State Management](#-state-management)
- [Database Schema](#-database-schema)
- [Authentication Flow](#-authentication-flow)
- [Performance Optimizations](#-performance-optimizations)
- [Author](#-author)

---

## 🎯 Overview

**The Wild Oasis** is a comprehensive hotel management application designed for hotel employees to manage cabins, bookings, and guests. The application provides a complete dashboard with data visualization, real-time updates, and robust authentication.

### 🎨 Key Highlights

- 📊 **Interactive Dashboard** - Real-time statistics and charts
- 🏠 **Cabin Management** - Full CRUD operations for hotel cabins
- 📅 **Booking System** - Complete booking lifecycle management
- 👥 **User Management** - Secure authentication and user profiles
- 🌓 **Dark Mode** - Built-in theme switching
- 📱 **Responsive Design** - Works seamlessly across devices

---

## How to test
- In email enter (eslam.O.elkhabery@gmail.com)
- In password enter (101020013689741568)

---

## ✨ Features

### 🏠 Cabin Management
- ✅ View all cabins with details (name, capacity, price, discount)
- ✅ Add new cabins with image upload
- ✅ Edit existing cabin information
- ✅ Duplicate cabins for quick setup
- ✅ Delete cabins with confirmation
- ✅ Filter cabins (All, With Discount, No Discount)
- ✅ Sort cabins by name, price, or capacity

### 📅 Booking Operations
- ✅ View all bookings with status indicators
- ✅ Filter bookings by status (All, Checked In, Checked Out, Unconfirmed)
- ✅ Sort bookings by date or amount
- ✅ Check-in guests with optional breakfast
- ✅ Check-out guests
- ✅ View detailed booking information
- ✅ Delete bookings
- ✅ Today's activity overview

### 📊 Dashboard Analytics
- ✅ Total bookings count
- ✅ Sales statistics
- ✅ Check-in metrics
- ✅ Occupancy rate calculation
- ✅ Sales chart (last 7/30/90 days)
- ✅ Duration chart (stay length distribution)
- ✅ Recent bookings overview

### 👤 User Features
- ✅ Secure authentication with Supabase
- ✅ User registration (admin only)
- ✅ Profile management
- ✅ Avatar upload
- ✅ Password update
- ✅ Account settings

### ⚙️ Settings
- ✅ Minimum/Maximum booking length
- ✅ Maximum guests per booking
- ✅ Breakfast price configuration

### 🎨 UI/UX Features
- ✅ Dark mode / Light mode toggle
- ✅ Responsive design
- ✅ Loading states and spinners
- ✅ Error boundaries
- ✅ Toast notifications
- ✅ Modal dialogs
- ✅ Context menus
- ✅ Pagination for large datasets

---

## 🛠 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Framework |
| **Vite** | 7.2.4 | Build Tool & Dev Server |
| **React Router DOM** | 7.9.6 | Client-side Routing |
| **Supabase** | 2.86.0 | Backend & Database |

### State Management & Data Fetching

| Library | Version | Purpose |
|---------|---------|---------|
| **React Query** | 5.90.12 | Server State Management |
| **React Hook Form** | 7.68.0 | Form State Management |
| **Context API** | - | Global State (Theme) |

### Styling & UI

| Library | Version | Purpose |
|---------|---------|---------|
| **Styled Components** | 6.1.19 | CSS-in-JS Styling |
| **React Icons** | 5.5.0 | Icon Library |
| **Recharts** | 3.7.0 | Data Visualization |

### Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| **date-fns** | 4.1.0 | Date Manipulation |
| **React Hot Toast** | 2.6.0 | Toast Notifications |
| **React Error Boundary** | 6.1.0 | Error Handling |
| **Zod** | 4.1.13 | Schema Validation |

---

## 🏗 Architecture

### Application Architecture

```mermaid
graph TB
    A[Main Entry Point] --> B[Error Boundary]
    B --> C[Dark Mode Provider]
    C --> D[React Query Provider]
    D --> E[Router Provider]
    E --> F{Route Type}
    F -->|Protected| G[Protected Route Wrapper]
    F -->|Public| H[Login Page]
    G --> I[Authentication Check]
    I -->|Authenticated| J[App Layout]
    I -->|Not Authenticated| H
    J --> K[Header]
    J --> L[Sidebar]
    J --> M[Main Content]
    M --> N[Dashboard]
    M --> O[Bookings]
    M --> P[Cabins]
    M --> Q[Settings]
    M --> R[Users]
    M --> S[Account]
    
    style A fill:#e1f5ff
    style B fill:#ffe1e1
    style C fill:#f0e1ff
    style D fill:#e1ffe1
    style G fill:#ffe1b3
    style J fill:#fff4e1
```

### Component Hierarchy

```mermaid
graph LR
    A[App.jsx] --> B[RouterProvider]
    B --> C[AppLayout]
    C --> D[Header]
    C --> E[Sidebar]
    C --> F[Main Content Area]
    
    D --> D1[UserAvatar]
    D --> D2[HeaderMenu]
    D2 --> D3[DarkModeToggle]
    D2 --> D4[Logout]
    
    E --> E1[Logo]
    E --> E2[MainNav]
    
    F --> F1[Dashboard]
    F --> F2[Bookings]
    F --> F3[Cabins]
    F --> F4[Settings]
    F --> F5[Users]
    
    F1 --> F1A[DashboardLayout]
    F1A --> F1B[Stats]
    F1A --> F1C[SalesChart]
    F1A --> F1D[DurationChart]
    F1A --> F1E[TodayActivity]
    
    style A fill:#61dafb
    style C fill:#646cff
    style F1A fill:#ff4154
```

---

## 📁 Project Structure

```
the-wild-oasis/
├── 📂 public/
│   ├── logo-light.png
│   └── logo-dark.png
├── 📂 src/
│   ├── 📂 assets/
│   │   └── imgs/
│   ├── 📂 context/
│   │   └── ThemeContext.jsx          # Dark mode context
│   ├── 📂 features/
│   │   ├── 📂 authentication/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   ├── UpdateUserDataForm.jsx
│   │   │   ├── UpdatePasswordForm.jsx
│   │   │   ├── UserAvatar.jsx
│   │   │   └── Logout.jsx
│   │   ├── 📂 bookings/
│   │   │   ├── BookingTable.jsx
│   │   │   ├── BookingRow.jsx
│   │   │   ├── BookingDetail.jsx
│   │   │   ├── BookingDataBox.jsx
│   │   │   └── BookingTableOperations.jsx
│   │   ├── 📂 cabins/
│   │   │   ├── CabinTable.jsx
│   │   │   ├── CabinRow.jsx
│   │   │   ├── CreateCabinForm.jsx
│   │   │   ├── AddCabin.jsx
│   │   │   └── CabinTableOperations.jsx
│   │   ├── 📂 check-in-out/
│   │   │   ├── CheckinBooking.jsx
│   │   │   ├── CheckoutButton.jsx
│   │   │   ├── TodayActivity.jsx
│   │   │   └── TodayItem.jsx
│   │   ├── 📂 dashboard/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── DashboardFilter.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Stat.jsx
│   │   │   ├── SalesChart.jsx
│   │   │   └── DurationChart.jsx
│   │   └── 📂 settings/
│   │       └── UpdateSettingsForm.jsx
│   ├── 📂 hooks/
│   │   ├── useBooking.js
│   │   ├── useBookings.js
│   │   ├── useCabins.js
│   │   ├── useCheckIn.js
│   │   ├── useCheckOut.js
│   │   ├── useLogin.js
│   │   ├── useLogout.js
│   │   ├── useSignup.js
│   │   ├── useUser.js
│   │   ├── useSettings.js
│   │   ├── useDarkMode.js
│   │   ├── useClicks.js
│   │   ├── useLocalStorageState.js
│   │   └── useMoveBack.js
│   ├── 📂 pages/
│   │   ├── Dashboard.jsx
│   │   ├── Bookings.jsx
│   │   ├── Booking.jsx
│   │   ├── CheckIn.jsx
│   │   ├── Cabins.jsx
│   │   ├── Users.jsx
│   │   ├── Settings.jsx
│   │   ├── Account.jsx
│   │   ├── Login.jsx
│   │   └── PageNotFound.jsx
│   ├── 📂 services/
│   │   ├── apiAuth.js                # Authentication API
│   │   ├── apiBookings.js            # Bookings API
│   │   ├── apiCabins.js              # Cabins API
│   │   ├── apiSettings.js            # Settings API
│   │   └── supabase.js               # Supabase client
│   ├── 📂 styles/
│   │   └── GlobalStyle.jsx           # Global styles
│   ├── 📂 ui/
│   │   ├── AppLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Table.jsx
│   │   ├── Form.jsx
│   │   ├── Spinner.jsx
│   │   ├── Filter.jsx
│   │   ├── SortBy.jsx
│   │   ├── Menus.jsx
│   │   ├── Pagination.jsx
│   │   └── ... (20+ UI components)
│   ├── 📂 utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm (v11.9.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-wild-oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Update `src/services/supabase.js` with your credentials:
     ```javascript
     export const supabaseUrl = "YOUR_SUPABASE_URL";
     const supabaseKey = "YOUR_SUPABASE_KEY";
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🔄 Application Flow

### User Journey Map

```mermaid
flowchart TD
    A[User Visits App] --> B{Authenticated?}
    B -->|No| C[Login Page]
    B -->|Yes| D[Dashboard]
    
    C --> E[Enter Credentials]
    E --> F{Valid?}
    F -->|No| G[Show Error]
    F -->|Yes| D
    G --> C
    
    D --> H{User Action}
    H -->|View Stats| I[Dashboard Analytics]
    H -->|Manage Bookings| J[Bookings Page]
    H -->|Manage Cabins| K[Cabins Page]
    H -->|Check Settings| L[Settings Page]
    H -->|Manage Users| M[Users Page]
    H -->|Update Profile| N[Account Page]
    
    J --> O{Booking Action}
    O -->|View Details| P[Booking Detail]
    O -->|Check In| Q[Check-In Form]
    O -->|Check Out| R[Confirm Check-Out]
    O -->|Delete| S[Confirm Delete]
    
    K --> T{Cabin Action}
    T -->|Add New| U[Create Cabin Form]
    T -->|Edit| V[Edit Cabin Form]
    T -->|Duplicate| W[Duplicate Cabin]
    T -->|Delete| X[Confirm Delete]
    
    style A fill:#e1f5ff
    style D fill:#d4f1d4
    style C fill:#ffe1e1
    style I fill:#fff4e1
    style J fill:#f0e1ff
    style K fill:#ffe1f0
```

### Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant C as Component
    participant H as Custom Hook
    participant RQ as React Query
    participant API as Supabase API
    participant DB as Database
    
    U->>C: Trigger Action (e.g., Create Cabin)
    C->>H: Call Hook (e.g., useCreateCabin)
    H->>RQ: Execute Mutation
    RQ->>API: API Call (createCabin)
    API->>DB: Insert Data
    DB-->>API: Return Result
    API-->>RQ: Return Data
    RQ-->>H: Update Cache
    H-->>C: Return Status
    C-->>U: Show Notification
    RQ->>RQ: Invalidate Related Queries
    RQ->>API: Refetch Data
    API->>DB: Query Fresh Data
    DB-->>API: Return Data
    API-->>RQ: Update Cache
    RQ-->>C: Re-render Component
    C-->>U: Display Updated UI
```

---

## 🗺 Pages & Routes

### Route Configuration

```mermaid
graph TB
    A[Root /] --> B{Protected Routes}
    A --> C[Login /login]
    A --> D[Not Found /*]
    
    B --> E[Dashboard /dashboard]
    B --> F[Bookings /bookings]
    B --> G[Booking Detail /booking/:id]
    B --> H[Check-In /checkin/:id]
    B --> I[Cabins /cabins]
    B --> J[Users /users]
    B --> K[Settings /settings]
    B --> L[Account /account]
    
    E --> E1[DashboardLayout]
    E1 --> E2[Stats]
    E1 --> E3[Charts]
    E1 --> E4[Today Activity]
    
    F --> F1[BookingTable]
    F1 --> F2[Filters]
    F1 --> F3[Sorting]
    F1 --> F4[Pagination]
    
    I --> I1[CabinTable]
    I1 --> I2[Add Cabin]
    I1 --> I3[Edit/Delete]
    
    style B fill:#d4f1d4
    style C fill:#ffe1e1
    style D fill:#ffe1e1
```

### Route Table

| Route | Component | Protection | Description |
|-------|-----------|------------|-------------|
| `/` | Dashboard (redirect) | ✅ Protected | Redirects to dashboard |
| `/dashboard` | Dashboard | ✅ Protected | Main dashboard with statistics |
| `/bookings` | Bookings | ✅ Protected | List of all bookings |
| `/booking/:id` | Booking | ✅ Protected | Single booking details |
| `/checkin/:id` | CheckIn | ✅ Protected | Check-in process |
| `/cabins` | Cabins | ✅ Protected | Cabin management |
| `/users` | Users | ✅ Protected | User creation (admin only) |
| `/settings` | Settings | ✅ Protected | Application settings |
| `/account` | Account | ✅ Protected | User profile |
| `/login` | Login | ❌ Public | Login page |
| `*` | PageNotFound | ❌ Public | 404 page |

---

## 🧩 Key Components

### Component Categories

```mermaid
mindmap
  root((Components))
    UI Components
      Button
      Modal
      Table
      Form
      Spinner
      Filter
      Pagination
    Feature Components
      Dashboard
        Stats
        Charts
      Bookings
        BookingTable
        BookingDetail
      Cabins
        CabinTable
        CabinForm
      Authentication
        LoginForm
        SignupForm
        UserAvatar
    Layout Components
      AppLayout
      Header
      Sidebar
      MainNav
    Utility Components
      ErrorBoundary
      ProtectedRoute
      DarkModeToggle
```

### Reusable UI Components

#### 🔘 Button Component

**Props:**
- `$size`: `small` | `medium` | `large`
- `$variation`: `primary` | `secondary` | `danger`

**Usage:**
```jsx
<Button $size="large" $variation="primary">
  Click Me
</Button>
```

#### 🪟 Modal Component (Compound Component Pattern)

**Usage:**
```jsx
<Modal>
  <Modal.Open opens="cabin-form">
    <Button>Add Cabin</Button>
  </Modal.Open>
  <Modal.Window name="cabin-form">
    <CreateCabinForm />
  </Modal.Window>
</Modal>
```

#### 📋 Table Component (Compound Component Pattern)

**Usage:**
```jsx
<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
  <Table.Header>
    <div>Cabin</div>
    <div>Capacity</div>
    <div>Price</div>
  </Table.Header>
  <Table.Body 
    data={cabins} 
    render={(cabin) => <CabinRow cabin={cabin} />} 
  />
  <Table.Footer>
    <Pagination count={totalCount} />
  </Table.Footer>
</Table>
```

#### 🔍 Filter Component

**Usage:**
```jsx
<Filter
  filterField="status"
  options={[
    { value: "all", label: "All" },
    { value: "checked-in", label: "Checked In" },
    { value: "checked-out", label: "Checked Out" },
  ]}
/>
```

---

## 🔐 State Management

### State Management Strategy

```mermaid
graph TB
    A[Application State] --> B[Server State]
    A --> C[UI State]
    A --> D[Global State]
    A --> E[Form State]
    
    B --> B1[React Query]
    B1 --> B2[Bookings Data]
    B1 --> B3[Cabins Data]
    B1 --> B4[Settings Data]
    B1 --> B5[User Data]
    
    C --> C1[Local State]
    C1 --> C2[useState]
    C1 --> C3[Component State]
    
    D --> D1[Context API]
    D1 --> D2[Dark Mode Theme]
    
    E --> E1[React Hook Form]
    E1 --> E2[Cabin Forms]
    E1 --> E3[User Forms]
    E1 --> E4[Settings Forms]
    
    style B1 fill:#ff4154
    style D1 fill:#61dafb
    style E1 fill:#ec5990
```

### React Query Configuration

```mermaid
graph LR
    A[QueryClient] --> B[Default Options]
    B --> C[staleTime: 0]
    B --> D[cacheTime: 5 mins]
    
    A --> E[Query Keys]
    E --> F[bookings]
    E --> G[cabin table]
    E --> H[user]
    E --> I[settings]
    
    A --> J[Mutations]
    J --> K[Create/Update/Delete]
    J --> L[Optimistic Updates]
    J --> M[Cache Invalidation]
    
    style A fill:#ff4154
    style J fill:#ffa94d
```

### Custom Hooks Architecture

| Hook | Purpose | Returns |
|------|---------|---------|
| `useBookings()` | Fetch bookings with filters/sorting | `[isLoading, bookings, error]` |
| `useBooking()` | Fetch single booking | `[isLoading, booking, error]` |
| `useCabins()` | Fetch cabins with pagination | `[isPending, cabins, isError, error]` |
| `useCreateCabin()` | Create new cabin | `[isCreating, createCabin]` |
| `useDeleteCabin()` | Delete cabin | `[isDeleting, deleteCabin]` |
| `useCheckIn()` | Check-in booking | `[isLoading, checkIn]` |
| `useCheckOut()` | Check-out booking | `[isLoading, checkOut]` |
| `useLogin()` | User login | `[isLoading, login]` |
| `useUser()` | Get current user | `{isLoading, user, isAuthenticated}` |
| `useSettings()` | Fetch settings | `[isLoading, settingsData, error]` |
| `useDarkMode()` | Dark mode toggle | `{isDarkMode, toggleDarkMode}` |

---

## 🗄 Database Schema

### Entity Relationship Diagram

```mermaid
erDiagram
    CABINS ||--o{ BOOKINGS : has
    GUESTS ||--o{ BOOKINGS : makes
    SETTINGS ||--|| APPLICATION : configures
    USERS ||--o{ BOOKINGS : manages
    
    CABINS {
        int id PK
        string name
        int maxCapacity
        decimal regularPrice
        decimal discount
        string description
        string image
        timestamp created_at
    }
    
    BOOKINGS {
        int id PK
        timestamp created_at
        date startDate
        date endDate
        int numberOfNights
        int numberGuests
        decimal cabinPrice
        decimal extrasPrice
        decimal totalPrice
        string status
        boolean hasBreakfast
        boolean isPaid
        string observations
        int cabinId FK
        int guestId FK
    }
    
    GUESTS {
        int id PK
        timestamp created_at
        string fullName
        string email
        string nationalID
        string nationality
        string countryFlag
    }
    
    SETTINGS {
        int id PK
        int minBookingLength
        int maxBookingLength
        int maxGuestsPerBooking
        decimal breakfastPrice
        timestamp created_at
    }
    
    USERS {
        uuid id PK
        string email
        string fullName
        string avatar
        timestamp created_at
    }
```

### Database Tables

#### 📋 Cabins Table
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY | Unique identifier |
| `name` | VARCHAR | NOT NULL | Cabin name |
| `maxCapacity` | INTEGER | NOT NULL | Maximum guests |
| `regularPrice` | DECIMAL | NOT NULL | Base price |
| `discount` | DECIMAL | DEFAULT 0 | Discount amount |
| `description` | TEXT | - | Cabin description |
| `image` | VARCHAR | - | Image URL |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Creation timestamp |

#### 📅 Bookings Table
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY | Unique identifier |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Creation timestamp |
| `startDate` | DATE | NOT NULL | Check-in date |
| `endDate` | DATE | NOT NULL | Check-out date |
| `numberOfNights` | INTEGER | NOT NULL | Stay duration |
| `numberGuests` | INTEGER | NOT NULL | Number of guests |
| `cabinPrice` | DECIMAL | NOT NULL | Cabin cost |
| `extrasPrice` | DECIMAL | DEFAULT 0 | Additional charges |
| `totalPrice` | DECIMAL | NOT NULL | Total amount |
| `status` | VARCHAR | NOT NULL | Booking status |
| `hasBreakfast` | BOOLEAN | DEFAULT FALSE | Breakfast included |
| `isPaid` | BOOLEAN | DEFAULT FALSE | Payment status |
| `observations` | TEXT | - | Special requests |
| `cabinId` | INTEGER | FOREIGN KEY | References cabins |
| `guestId` | INTEGER | FOREIGN KEY | References guests |

#### 👥 Guests Table
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY | Unique identifier |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Creation timestamp |
| `fullName` | VARCHAR | NOT NULL | Guest name |
| `email` | VARCHAR | NOT NULL | Email address |
| `nationalID` | VARCHAR | - | ID number |
| `nationality` | VARCHAR | - | Country |
| `countryFlag` | VARCHAR | - | Flag URL |

#### ⚙️ Settings Table
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY | Always 1 (singleton) |
| `minBookingLength` | INTEGER | NOT NULL | Minimum nights |
| `maxBookingLength` | INTEGER | NOT NULL | Maximum nights |
| `maxGuestsPerBooking` | INTEGER | NOT NULL | Max guests |
| `breakfastPrice` | DECIMAL | NOT NULL | Breakfast cost |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Creation timestamp |

---

## 🔐 Authentication Flow

### Authentication Process

```mermaid
sequenceDiagram
    participant U as User
    participant L as Login Page
    participant H as useLogin Hook
    participant S as Supabase Auth
    participant QC as Query Cache
    participant P as Protected Route
    participant D as Dashboard
    
    U->>L: Enter Credentials
    L->>H: login(email, password)
    H->>S: signInWithPassword()
    
    alt Valid Credentials
        S-->>H: Return User Data
        H->>QC: Set User in Cache
        QC-->>H: Cache Updated
        H-->>L: Success
        L->>D: Navigate to Dashboard
        D->>P: Check Authentication
        P->>QC: Get User from Cache
        QC-->>P: Return User
        P-->>D: Render Dashboard
    else Invalid Credentials
        S-->>H: Return Error
        H-->>L: Show Error Toast
        L-->>U: Display Error
    end
```

### User Session Management

```mermaid
stateDiagram-v2
    [*] --> Unauthenticated
    Unauthenticated --> Authenticating: Login
    Authenticating --> Authenticated: Success
    Authenticating --> Unauthenticated: Failure
    Authenticated --> Unauthenticated: Logout
    Authenticated --> Authenticated: Session Active
    
    Unauthenticated: No User Data
    Unauthenticated: Redirect to Login
    
    Authenticating: Verifying Credentials
    Authenticating: Loading State
    
    Authenticated: User in Query Cache
    Authenticated: Access Protected Routes
    Authenticated: Session Persisted
```

### Protected Route Logic

```mermaid
flowchart TD
    A[User Visits Protected Route] --> B{Check Authentication}
    B -->|Loading| C[Show Spinner]
    B -->|Not Authenticated| D[Redirect to Login]
    B -->|Authenticated| E[Render Protected Content]
    
    C --> F{Authentication Check Complete}
    F -->|Not Authenticated| D
    F -->|Authenticated| E
    
    E --> G[User Accesses Features]
    
    style A fill:#e1f5ff
    style E fill:#d4f1d4
    style D fill:#ffe1e1
```

---

## ⚡ Performance Optimizations

### Optimization Strategies

```mermaid
mindmap
  root((Performance))
    Data Fetching
      React Query Caching
      Prefetching
      Pagination
      Stale While Revalidate
    Code Splitting
      Route Based
      Lazy Loading
      Dynamic Imports
    State Management
      Optimistic Updates
      Cache Invalidation
      Selective Re-renders
    Asset Optimization
      Image Optimization
      Bundle Size
      Tree Shaking
    UX Improvements
      Loading States
      Skeleton Screens
      Error Boundaries
```

### React Query Optimizations

| Feature | Implementation | Benefit |
|---------|---------------|---------|
| **Caching** | Default 5-minute cache | Reduces API calls |
| **Prefetching** | Next/Previous page prefetch | Instant page transitions |
| **Stale Time** | 0 seconds (always fresh) | Real-time data updates |
| **Retry** | 3 retries with exponential backoff | Handles network failures |
| **Deduplication** | Automatic request deduplication | Prevents duplicate calls |
| **Background Updates** | Refetch on window focus | Keeps data synchronized |

### Pagination Strategy

```mermaid
graph LR
    A[User on Page 1] --> B[Load Page 1 Data]
    B --> C[Prefetch Page 2]
    A --> D[User Clicks Next]
    D --> E[Instant Load Page 2]
    E --> F[Prefetch Page 3]
    E --> G[Prefetch Page 1]
    
    style C fill:#d4f1d4
    style E fill:#d4f1d4
    style F fill:#d4f1d4
    style G fill:#d4f1d4
```

---

## 📊 Data Visualization

### Dashboard Charts

```mermaid
graph TB
    A[Dashboard] --> B[Sales Chart]
    A --> C[Duration Chart]
    A --> D[Stats Grid]
    
    B --> B1[Area Chart]
    B1 --> B2[Total Sales Line]
    B1 --> B3[Extras Sales Line]
    B1 --> B4[Time Period Filter]
    B4 --> B5[Last 7 Days]
    B4 --> B6[Last 30 Days]
    B4 --> B7[Last 90 Days]
    
    C --> C1[Pie Chart]
    C1 --> C2[1 Night Stays]
    C1 --> C3[2 Night Stays]
    C1 --> C4[3 Night Stays]
    C1 --> C5[4-5 Night Stays]
    C1 --> C6[6-7 Night Stays]
    C1 --> C7[8-14 Night Stays]
    C1 --> C8[15-21 Night Stays]
    C1 --> C9[21+ Night Stays]
    
    D --> D1[Total Bookings]
    D --> D2[Total Sales]
    D --> D3[Check-ins]
    D --> D4[Occupancy Rate]
    
    style A fill:#fff4e1
    style B fill:#e1f5ff
    style C fill:#ffe1f0
    style D fill:#d4f1d4
```

---

## 🎨 Theming System

### Dark Mode Implementation

```mermaid
graph TB
    A[User Toggles Theme] --> B[DarkModeContext]
    B --> C{Current Theme}
    C -->|Light| D[Switch to Dark]
    C -->|Dark| E[Switch to Light]
    
    D --> F[Update Context State]
    E --> F
    
    F --> G[Save to LocalStorage]
    F --> H[Update CSS Variables]
    
    H --> I[Document Root Class]
    I --> J[.dark-mode]
    I --> K[.light-mode]
    
    J --> L[Dark CSS Variables]
    K --> M[Light CSS Variables]
    
    L --> N[Re-render Components]
    M --> N
    
    style B fill:#f0e1ff
    style J fill:#1f2937
    style K fill:#f9fafb
```

### CSS Variable System

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--color-grey-0` | `#fff` | `#18212f` | Backgrounds |
| `--color-grey-50` | `#f9fafb` | `#111827` | Subtle backgrounds |
| `--color-grey-700` | `#374151` | `#e5e7eb` | Text color |
| `--color-brand-600` | `#4f46e5` | `#4f46e5` | Primary actions |
| `--shadow-md` | `rgba(0,0,0,0.06)` | `rgba(0,0,0,0.3)` | Shadows |

---

## 🔄 Booking Lifecycle

### Booking State Machine

```mermaid
stateDiagram-v2
    [*] --> Unconfirmed: Create Booking
    Unconfirmed --> CheckedIn: Check In
    Unconfirmed --> Deleted: Delete
    CheckedIn --> CheckedOut: Check Out
    CheckedOut --> [*]
    Deleted --> [*]
    
    Unconfirmed: Guest hasn't arrived
    Unconfirmed: Payment may not be complete
    
    CheckedIn: Guest is staying
    CheckedIn: Payment confirmed
    CheckedIn: Can add breakfast
    
    CheckedOut: Guest has left
    CheckedOut: Booking complete
```

### Check-In Process

```mermaid
flowchart TD
    A[Staff Opens Booking] --> B{Booking Status}
    B -->|Unconfirmed| C[Show Check-In Button]
    B -->|Other Status| D[No Check-In Available]
    
    C --> E[Navigate to Check-In Page]
    E --> F[Display Booking Details]
    F --> G{Has Breakfast?}
    
    G -->|No| H[Offer Breakfast Option]
    G -->|Yes| I[Show Included]
    
    H --> J{Add Breakfast?}
    J -->|Yes| K[Calculate New Total]
    J -->|No| L[Keep Original Total]
    
    K --> M[Confirm Payment]
    L --> M
    I --> M
    
    M --> N{Payment Confirmed?}
    N -->|No| O[Cannot Check In]
    N -->|Yes| P[Update Booking Status]
    
    P --> Q[Set status: checked-in]
    P --> R[Set isPaid: true]
    P --> S[Update breakfast details]
    
    Q --> T[Invalidate Queries]
    R --> T
    S --> T
    
    T --> U[Show Success Toast]
    U --> V[Navigate to Dashboard]
    
    style C fill:#d4f1d4
    style P fill:#e1f5ff
    style U fill:#d4f1d4
    style O fill:#ffe1e1
```

---

## 📱 Responsive Design

### Breakpoint Strategy

```mermaid
graph LR
    A[Viewport Sizes] --> B[Mobile]
    A --> C[Tablet]
    A --> D[Desktop]
    A --> E[Large Desktop]
    
    B --> B1[< 640px]
    C --> C1[640px - 1024px]
    D --> D1[1024px - 1440px]
    E --> E1[> 1440px]
    
    B1 --> F[Single Column]
    C1 --> G[Flexible Grid]
    D1 --> H[2-Column Layout]
    E1 --> I[Max Width Container]
    
    style A fill:#fff4e1
    style B fill:#e1f5ff
    style C fill:#ffe1f0
    style D fill:#d4f1d4
    style E fill:#f0e1ff
```

---

## 🛡 Error Handling

### Error Boundary Strategy

```mermaid
graph TB
    A[Application] --> B[Error Boundary]
    B --> C{Error Occurred?}
    
    C -->|No| D[Render Children]
    C -->|Yes| E[Catch Error]
    
    E --> F[Log Error]
    E --> G[Display Fallback UI]
    
    G --> H[Error Message]
    G --> I[Retry Option]
    G --> J[Go Back Button]
    
    F --> K[Console Error]
    F --> L[Error Reporting Service]
    
    style B fill:#ffe1e1
    style G fill:#fff4e1
    style D fill:#d4f1d4
```

### Error Types

| Error Type | Handling Strategy | User Experience |
|------------|------------------|-----------------|
| **Network Error** | Retry with exponential backoff | Toast notification + retry button |
| **Authentication Error** | Redirect to login | Clear message + login redirect |
| **Validation Error** | Show inline errors | Form field highlights |
| **Not Found Error** | 404 page | Friendly message + navigation |
| **Permission Error** | Show message | Explain required permissions |
| **Application Error** | Error boundary | Fallback UI + reload option |

---

## 🚀 Deployment

### Build Process

```mermaid
graph LR
    A[Source Code] --> B[Vite Build]
    B --> C[Tree Shaking]
    C --> D[Code Splitting]
    D --> E[Minification]
    E --> F[Asset Optimization]
    F --> G[dist/ Folder]
    
    G --> H[Static Files]
    H --> I[HTML]
    H --> J[JavaScript Bundles]
    H --> K[CSS]
    H --> L[Images]
    
    style B fill:#646cff
    style G fill:#d4f1d4
```

---

## 📚 Learning Resources

This project was inspired by **Jonas Schmedtmann's React course**, which covers:

- ⚛️ React fundamentals and advanced patterns
- 🎣 Custom hooks and composition
- 🔄 React Query for server state
- 🎨 Styled Components
- 🏗 Component architecture
- 📊 Data visualization with Recharts
- 🔐 Authentication flows
- 🗄 Supabase integration

---

## 👨‍💻 Author

**Created by: Eslam Omar**

Inspired by Jonas Schmedtmann's React course

---

## 📄 License

This project is for educational purposes.

---

## 🙏 Acknowledgments

- Special thanks to **Jonas Schmedtmann** for the excellent React course
- The React and Supabase communities for amazing tools and documentation
- All open-source contributors whose libraries made this project possible

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Built with ❤️ using React and Supabase**

</div>
