# Jethro Solutions Website

This is the official website for Jethro Solutions, a leading provider of technology solutions for forward-facing companies in the financial sector.

## Project Overview

This website showcases Jethro Solutions' capabilities, services, and expertise in financial technology solutions. Built with modern web technologies, it features sophisticated design elements, interactive 3D visualizations, and a responsive user interface.

## Technology Stack

- **Framework**: Next.js with TypeScript and App Router
- **Styling**: Tailwind CSS with ShadCN UI components
- **3D Visualizations**: Three.js with React Three Fiber
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jethro-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Jethro Solutions
   NEXT_PUBLIC_CONTACT_EMAIL=contact@jethrosolutions.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/src
  /app            # Next.js App Router pages
    /components   # React components
    /lib          # Utility functions and APIs
    /styles       # Global styles
  /public         # Static assets
```

## Design System

The website follows a sophisticated design system with:
- **Typography**: Season Serif, Aeonik, and IBM Plex Mono
- **Colors**: Soft Black (#121212), Soft White (#F8F8F8), Soft Tan (#E8E0D5)
- **Design Principles**: Modern minimalism, sophisticated interaction, clear hierarchy

## Contributing

Please read the PLANNING.md document for detailed information about the project architecture, goals, and development guidelines.

## License

All rights reserved. This project and its contents are proprietary to Jethro Solutions.
