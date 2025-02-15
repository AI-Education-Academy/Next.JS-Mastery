# Next.js Project Structure – A Comprehensive Guide

> **Just set up your NextJS project?** Next, let's decode its **powerful folder structure**. This structure is your key to building **scalable**, **lightning-fast** web apps.

---

## Table of Contents
1. [Introduction](#introduction)  
2. [Root Folder](#1-root-folder)  
3. [The `src` Folder](#2-the-src-folder)  
4. [The `app` Folder](#3-the-app-folder)  
5. [The `components` Folder](#4-the-components-folder)  
6. [The `hooks` Folder](#5-the-hooks-folder)  
7. [The `utils` Folder](#6-the-utils-folder)  
8. [The `context` Folder](#7-the-context-folder)  
9. [The `state` Folder](#8-the-state-folder)  
10. [Global Styles (`globals.css`)](#9-global-styles-globalscss)  
11. [Modular CSS (CSS Modules)](#10-modular-css-css-modules)  
12. [The `public` Folder](#11-the-public-folder)  
13. [API Routes (`src/app/api`)](#12-api-routes-srcappapi)  
14. [The `node_modules` Folder](#13-the-nodemodules-folder)  
15. [Config Files](#14-config-files)  
16. [Build Something Legendary](#15-build-something-legendary)  

---

## Introduction
When working with **Next.js**, understanding and adopting a **structured approach** to organizing folders and files is crucial. This guide explains **15 key sections** of a standard Next.js project structure, ensuring your codebase remains **maintainable** and **scalable**.

---

## 1. Root Folder

The **root** of your Next.js project generally contains:
- **`package.json`** – Manages project dependencies and scripts.
- **`next.config.js`** or **`next.config.ts`** – Configures Next.js build and behavior.
- **`.gitignore`** – Tells Git which files/folders to ignore.
- **`.eslintrc.json`** (or similar) – Defines linting rules for code quality.
- **`tsconfig.json`** (if using TypeScript) – Specifies TypeScript settings (strict mode, paths, etc.).

Additionally, you might keep project documentation, CI/CD configs, and other top-level files here.

---

## 2. The `src` Folder

This folder typically holds the **entire application logic**:
- **`app/`** – Primary focus with Next.js 13+ (App Router).
- **`components/`** – Reusable UI components.
- **`hooks/`** – Custom React hooks.
- **`utils/`** – Helper functions and utilities.
- **`context/`** – React context providers.
- **`state/`** – State management (e.g., Redux, Zustand).

Structuring your code under `src` keeps the root clean and organized.

---

## 3. The `app` Folder

The **`app`** folder (in Next.js 13+) is the core of your routing system:
- **Automatic Routing** – Every folder becomes a route, every `page.tsx` file represents a route entry point.
  - **`src/app/page.tsx`** → `/`  
  - **`src/app/about/page.tsx`** → `/about`  
  - **`src/app/blog/[slug]/page.tsx`** → `/blog/:slug` (dynamic routes)
- **Layouts** – Define layout components like `layout.tsx` for shared page structure (headers, footers).
- **Loading States** – Add `loading.tsx` for skeletons or spinners while fetching data.

No need for manual routing libraries—Next.js manages this automatically.

---

## 4. The `components` Folder

Here lie your **reusable UI elements**, such as:
- **Buttons**
- **Cards**
- **Modals**
- **Navigation bars**

Keep them small, focused, and **easy to reuse**. Organized components streamline development and promote consistent design.

---

## 5. The `hooks` Folder

All **custom React hooks** go here, such as:
- **useAuth** – Authentication logic
- **useFetch** – Data fetching wrappers
- **useTheme** – Theme toggling or styling

This approach ensures consistency, promotes code reuse, and clarifies where all custom hook logic resides.

---

## 6. The `utils` Folder

**Utility functions** and **helper methods** used across the app:
- **String or date formatters**
- **Calculation helpers**
- **API call wrappers** (if not placed in a specific state management library)

Keeping these in one folder reduces duplication and makes the codebase more maintainable.

---

## 7. The `context` Folder

If you're using **React Context** for global states, keep providers and related logic here:
- **AuthContext** – Handles user login state
- **ThemeContext** – Handles dark/light theme
- **UserPreferencesContext** – Stores user-specific settings

By centralizing context, you streamline how data is shared throughout your application.

---

## 8. The `state` Folder

For larger or more complex apps, a dedicated folder for **state management** can be helpful:
- **Redux** setup (if using Redux Toolkit or legacy Redux).
- **Zustand**, **Jotai**, or other state libraries.
- Action creators, reducers, or store initialization files.

Depending on your team’s preference, this may be combined with `context` in smaller projects.

---

## 9. Global Styles (`globals.css`)

**Global CSS** or base styles live here:
- **Resets or normalizations** to ensure consistent styling across browsers.
- **Font imports** or color definitions that apply site-wide.

In Next.js 13+, `src/app/globals.css` automatically applies globally. No need for an `_app.js` or `_app.tsx`.

---

## 10. Modular CSS (CSS Modules)

For **component-specific styles**, use **CSS Modules**:
- **`Button.module.css`** – Tied to the Button component in `components/Button.tsx`.
- Prevents style collisions via **unique class naming**.

Alternatives include:
- **Tailwind CSS**
- **Styled-Components**
- **Sass/SCSS**

Choose the method that best fits your team’s workflow.

---

## 11. The `public` Folder

Store **static assets** here:
- **Images** (e.g., logos, hero banners)
- **Favicons** and **manifest files**
- **robots.txt** or **sitemap.xml**

You can reference these files directly via URLs like `/logo.png`. This ensures **optimal performance** for static assets.

---

## 12. API Routes (`src/app/api`)

Next.js supports creating **serverless API routes** within the same project:
- **`src/app/api/hello/route.ts`** → Accessible at `/api/hello`.
- Organize business logic, data fetching, or integrations with third-party services.

A convenient way to handle backend logic without setting up a separate server.

---

## 13. The `node_modules` Folder

This folder houses **all installed dependencies**:
- Managed by **npm**, **yarn**, or **pnpm**.
- Typically **excluded** from version control via `.gitignore`.
- Regenerated with `npm install` or equivalent.

Rely on **`package.json`** and **`package-lock.json`** (or **`yarn.lock`**) for reproducible builds.

---

## 14. Config Files

Key **configuration** files to be aware of:
- **`next.config.js` or `next.config.ts`** – Extend or override default Next.js config.
- **`.eslintrc.json`** – Establish linting rules (coding standards, error/warning checks).
- **`.prettierrc`** (optional) – Automate consistent code formatting.
- **`tsconfig.json`** – Configure TypeScript settings (paths, strict mode, etc.).

These files help maintain code **consistency** and **quality** throughout the project.

---

## 15. Build Something Legendary

With a **well-structured** Next.js project, you can build **highly scalable** applications that are easy to maintain. Here’s the quick roadmap:

1. **Create pages** in `src/app/`.  
2. **Modularize** UI in `components/`.  
3. Keep code **DRY** with `utils` and `hooks`.  
4. Manage **global state** with `context` or dedicated `state` libraries.  
5. **Style** using global CSS and modular approaches.  
6. Use **API routes** for serverless functionality.  

**Next.js** is not just a framework – it’s the **future of modern web development**. Master this structure, and you’ll be creating **legendary** projects in no time!

---

**Happy Coding!**
