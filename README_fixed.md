# Jai Kumar Yadav --- Portfolio

A personal portfolio website showcasing professional skills, projects,
and contact information. Built with **React**, **TypeScript**, and
**Vite**.

## Features

-   Responsive portfolio layout
-   Dark and light theme toggle
-   Sections for profile, skills, projects, and contact details
-   Fast development workflow powered by Vite

> Update this list if any of these sections or features differ from the
> current implementation.

## Tech Stack

-   React
-   TypeScript
-   Vite
-   CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (which includes npm).

### 1. Install dependencies

``` bash
npm install
```

### 2. Start the development server

``` bash
npm run dev
```

Open the local URL printed in your terminal.

### 3. Create a production build

``` bash
npm run build
```

### 4. Preview the production build

``` bash
npm run preview
```

## Project Structure

Your exact structure may vary, but a typical Vite project looks like
this:

``` text
jai-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deployment on Netlify

1.  Run `npm run build` locally.
2.  Confirm that the build completes successfully and creates a `dist`
    folder.
3.  In Netlify, import the project repository or deploy the built `dist`
    folder.
4.  For a connected repository, use these build settings:
    -   **Build command:** `npm run build`
    -   **Publish directory:** `dist`

## Before Publishing

-   Check that all project links and contact details are correct.
-   Test the site on mobile and desktop.
-   Test both dark and light themes and confirm text, cards, borders,
    and backgrounds remain readable.
-   Remove any placeholder text or example links.
-   Run `npm run build` and fix any errors before deploying.

## License

Add a license here if you intend to distribute or reuse this project
under specific terms.
