# iqauditservices

This project is a web application built with **React**, **TypeScript**, and **Vite**.

## Overview

iqauditservices provides a modern, fast, and scalable foundation for building React applications with TypeScript. The project leverages Vite for lightning-fast development and build tooling.

## Features

- ⚡️ Fast development with [Vite](https://vitejs.dev/)
- ⚛️ Component-based UI with [React](https://react.dev/)
- 🛡️ Type safety with [TypeScript](https://www.typescriptlang.org/)
- 🔍 Linting and code quality with [ESLint](https://eslint.org/)
- ♻️ Hot Module Replacement (HMR) for instant feedback

## Getting Started

1. **Install dependencies:**
  ```bash
  npm install
  ```
2. **Start the development server:**
  ```bash
  npm run dev
  ```
3. **Build for production:**
  ```bash
  npm run build
  ```

## Project Structure

```
├── src/            # Application source code
├── public/         # Static assets
├── index.html      # Main HTML file
├── package.json    # Project metadata and scripts
├── tsconfig.json   # TypeScript configuration
└── vite.config.ts  # Vite configuration
```

## ESLint Configuration

The project uses ESLint for code quality and consistency. You can expand the configuration for type-aware lint rules as needed. Example:

```js
export default tseslint.config({
  extends: [
   ...tseslint.configs.recommendedTypeChecked,
   // ...tseslint.configs.strictTypeChecked, // Uncomment for stricter rules
   // ...tseslint.configs.stylisticTypeChecked, // Uncomment for stylistic rules
  ],
  languageOptions: {
   parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
   },
  },
})
```

For React-specific lint rules, consider installing:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

## Useful Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## License

This project is licensed under the MIT License.
