# Project Horizon – System Architecture

## Overview

Project Horizon is a frontend web application built using **React**, **TypeScript**, and **Vite**. The project follows a modular architecture that separates presentation, business logic, state management, and API communication into dedicated modules.

The application uses:

- React for UI development
- React Router for client-side routing
- Redux Toolkit for global state management
- Axios for HTTP communication
- Mock Service Worker (MSW) for API mocking during development
- Tailwind CSS for styling

The architecture is designed to be scalable, maintainable, and easy to extend with additional features.

---

# System Overview

```text
                    User
                      │
                      ▼
               React Router
                      │
                      ▼
               Page Components
                      │
      ┌───────────────┼───────────────┐
      ▼                               ▼
Feature Components             Redux Store
      │                               │
      └───────────────┬───────────────┘
                      ▼
                 Axios Service
                      │
                      ▼
            Mock API (MSW) / Backend
                      │
                      ▼
                Updated UI State
```

---

# Component Tree

```text
App
│
├── BrowserRouter
│
├── Provider (Redux Store)
│
├── AppLayout
│   ├── Sidebar
│   └── Page Content
│
├── ToastListener
│
└── Routes
    ├── Dashboard
    ├── Reports
    ├── Settings
    │   ├── ProfileSection
    │   ├── PreferenceSection
    │   └── NotificationSection
    ├── Profiles
    ├── Unauthorized
    └── Forbidden
```

---

# State Management Architecture

Redux Toolkit manages global application state.

## Store Structure

```text
store
│
├── settings
└── toast
```

## Settings Slice

Stores application preferences including:

- Theme
- Language
- Notification settings

The slice provides centralized updates for settings shared across the application.

---

## Toast Slice

Handles global notification messages.

Data flow:

```text
Component
      │
dispatch(showToast())
      │
      ▼
Redux Store
      │
      ▼
ToastListener
      │
      ▼
React Toastify
      │
      ▼
Toast Notification
```

---

# Routing Architecture

Client-side routing is managed using React Router.

| Route | Component |
|--------|-----------|
| / | Dashboard |
| /reports | Reports |
| /settings | Settings |
| /profile | Profiles |
| /unauthorized | Unauthorized |
| /forbidden | Forbidden |

Error responses received from the API automatically redirect users to dedicated fallback pages.

---

# API Architecture

All HTTP communication is centralized inside a single Axios instance.

Responsibilities include:

- Base API configuration
- Request interception
- Response interception
- Centralized error handling
- Consistent API access throughout the application

During development, API responses are simulated using Mock Service Worker (MSW), allowing frontend development without depending on a live backend.

---

# Custom Hooks

Reusable hooks are placed inside the `hooks` directory.

## reduxHooks

Provides typed Redux hooks.

- useAppDispatch()
- useAppSelector()

---

## useDebounce

Reusable hook that delays rapidly changing values to reduce unnecessary calculations or API requests.

Typical use cases include:

- Search inputs
- Auto-complete
- Live filtering

---

## useTimer

Reusable timing utility built on browser timers.

Possible use cases include:

- Countdown timers
- Polling
- Delayed actions
- Session timers

---

# Folder Structure

```text
src
│
├── app
│   └── store.ts
│
├── components
│   ├── Button
│   ├── InputField
│   ├── Loader
│   ├── Sidebar
│   ├── ToastListener
│   └── WhitespaceCard
│
├── features
│   └── Settings
│       ├── NotificationSection
│       ├── PreferenceSection
│       ├── ProfileSection
│       ├── settingSlice.ts
│       └── toastSlice.ts
│
├── hooks
│   ├── reduxHooks.ts
│   ├── useDebounce.ts
│   └── useTimer.ts
│
├── layouts
│
├── mocks
│
├── pages
│
├── services
│   └── api.ts
│
├── App.tsx
└── main.tsx
```

---

# Module Boundaries

## Components

Reusable UI building blocks that are independent of business logic.

Examples:

- Button
- Loader
- Sidebar
- InputField

---

## Features

Feature-specific modules that contain business logic, UI sections, and Redux slices.

Current feature:

- Settings

---

## Pages

Top-level route components responsible for rendering complete application screens.

---

## Services

Contains shared application services.

Current service:

- Axios API instance

---

## Hooks

Contains reusable React hooks shared throughout the application.

---

## Layouts

Provides common page layouts shared between routes.

---

# Data Flow

```text
User Interaction
        │
        ▼
React Component
        │
        ▼
Dispatch Redux Action / API Request
        │
        ▼
Redux Store / Axios
        │
        ▼
State Update / API Response
        │
        ▼
React Re-render
        │
        ▼
Updated User Interface
```

---

# Key Technical Choices

| Technology | Reason |
|------------|--------|
| React | Component-based UI development |
| TypeScript | Static typing and improved maintainability |
| Vite | Fast development and optimized production builds |
| Redux Toolkit | Centralized state management with reduced boilerplate |
| React Router | Declarative client-side routing |
| Axios | Centralized HTTP communication with interceptors |
| MSW | API mocking during development |
| Tailwind CSS | Utility-first styling for rapid UI development |

---

# Trade-offs

## Redux Toolkit

### Advantages

- Centralized application state
- Predictable state updates
- Easy debugging

### Trade-offs

- Additional setup compared to local component state

---

## Axios

### Advantages

- Shared interceptors
- Reusable API configuration
- Consistent error handling

### Trade-offs

- Additional abstraction compared to the native Fetch API

---

## Mock Service Worker (MSW)

### Advantages

- Frontend development without backend dependency
- Realistic API simulation
- Easier testing

### Trade-offs

- Mock handlers must be maintained alongside API contracts

---

# Build Process

The production build is generated using Vite.

```bash
npm run build
```

Build steps include:

1. TypeScript compilation
2. Asset optimization
3. Tree shaking
4. JavaScript bundling
5. Production asset generation

The final optimized output is generated inside the `dist/` directory.

---

# Conclusion

Project Horizon follows a modular frontend architecture with clear separation between UI components, business logic, global state, routing, and API communication. This structure promotes maintainability, scalability, and ease of future feature development while supporting efficient collaboration and code organization.