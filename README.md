# Jai Kumar Yadav — Portfolio

A personal portfolio website showcasing professional skills, projects, and contact information. Built with React, TypeScript, and Vite.

## Features

- Responsive portfolio layout
- Dark and light theme toggle
- Professional profile and skills sections
- Project showcase
- Contact information
- Fast development workflow powered by Vite

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/), which includes npm.

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

### Step 3: Build for Production

```bash
npm run build
```

This generates the production-ready files in the `dist` directory.

### Step 4: Preview the Production Build

```bash
npm run preview
```

## Project Structure

```text
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
├── vite.config.ts
└── README.md
```

*Note: The actual project structure may differ depending on the files in your repository.*

## Deployment on Netlify

1. Build the project using `npm run build`.
2. Verify that the build completes successfully.
3. Deploy the project through Netlify.
4. If deploying through a connected Git repository, configure the following settings:

   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## Before Publishing

- Verify that all project links and contact details are correct.
- Test the website on desktop and mobile devices.
- Test both dark and light themes.
- Ensure text, backgrounds, cards, and borders remain readable in both themes.
- Remove placeholder content and incorrect links.
- Run `npm run build` and resolve any build errors before deployment.

## License

Add a license if you intend to distribute or reuse this project under specific terms.
