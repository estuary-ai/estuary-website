# Estuary - Private AI Agents

## Overview

Estuary is a full-stack web application for building, downloading, and running private AI agents with user-definable skills and personas. The project is structured as a modern web application with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM. The application emphasizes privacy-first, offline-capable AI companions with a nature-inspired design theme.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Custom component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Design**: RESTful API structure with `/api` prefix
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom request/response logging system

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless connection in production
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
1. **Layout System**: Navigation component with responsive design
2. **UI Library**: Comprehensive set of reusable components (Button, Card, Dialog, etc.)
3. **Custom Components**: 
   - Animated background with water ripple effects
   - Estuary logo with SVG animations
   - Nature-themed design elements

### Backend Components
1. **Storage Interface**: Abstracted storage layer with memory and database implementations
2. **Route Registration**: Modular route registration system
3. **Development Server**: Vite integration for hot reloading in development

### Shared Components
1. **Schema Definitions**: Centralized database schema with Zod validation
2. **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

### Client-Server Communication
1. Frontend makes HTTP requests to `/api` endpoints
2. Backend processes requests through Express middleware chain
3. Storage layer handles data persistence (memory in dev, PostgreSQL in production)
4. Responses are logged and returned to client
5. TanStack Query manages caching and state synchronization

### Development vs Production
- **Development**: Uses in-memory storage, Vite dev server, hot reloading
- **Production**: PostgreSQL database, optimized builds, static file serving

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **Backend**: Express.js, Node.js runtime
- **Database**: Drizzle ORM, Neon Database connector

### UI/UX Dependencies
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React icon library
- **Animations**: CSS-based animations with custom keyframes

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Development Experience**: Replit-specific plugins for enhanced development

### Third-Party Services
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Development Platform**: Replit for cloud-based development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Local development with in-memory storage
- **Production**: Environment variables for database connection
- **Database URL**: Required `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Static file serving capability
- Environment variable support

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```