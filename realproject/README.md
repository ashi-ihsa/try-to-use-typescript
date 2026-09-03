# TypeScript Real Project

A production-ready TypeScript project with proper configuration, build setup, and development workflow.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Configuration](#configuration)
- [TypeScript Configuration Details](#typescript-configuration-details)
- [Build & Compilation](#build--compilation)

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager
- TypeScript knowledge (basic understanding of types and interfaces)

### Quick Start

```bash
# Install dependencies
npm install

# Start development with file watch mode
npm run dev
```

---

## Project Structure

```
realproject/
├── src/
│   └── index.ts           # Main entry point
├── dist/                  # Compiled JavaScript output (generated)
├── index.html             # HTML template/entry file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript compiler configuration
└── README.md              # This file
```

---

## Setup Instructions

### 1. Initialize a New TypeScript Project

If starting from scratch, run these commands:

```bash
# Initialize npm project (generates package.json)
npm init -y

# Initialize TypeScript configuration (generates tsconfig.json)
tsc --init
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Verify Setup

```bash
# Check TypeScript version
npx tsc --version

# Check if configuration is valid
npx tsc --noEmit
```

---

## Available Scripts

Define these scripts in your `package.json`:

```json
{
  "scripts": {
    "dev": "tsc -w",
    "build": "tsc",
    "clean": "rm -rf dist"
  }
}
```

| Script | Description |
|--------|-------------|
| `npm run dev` | Watch mode - automatically recompiles on file changes |
| `npm run build` | One-time compilation of all TypeScript files |
| `npm run clean` | Remove compiled output directory |

---

## Development Workflow

### 1. Watch Mode (Recommended for Development)

```bash
tsc -w
```

This command:
- Watches all TypeScript files for changes
- Automatically recompiles when files are saved
- Outputs compiled JavaScript to `./dist/` directory
- Keeps running until you stop it (Ctrl+C)

### 2. Single Compilation

```bash
tsc
```

Compiles all files once and exits.

### 3. Type Checking Only

```bash
tsc --noEmit
```

Checks for type errors without generating output files.

---

## Configuration

### tsconfig.json Overview

The `tsconfig.json` file is the core configuration for TypeScript compilation. Key sections:

#### File Layout
```json
{
  "compilerOptions": {
    "rootDir": "./src",      // Source files location
    "outDir": "./dist"       // Compiled output location
  }
}
```

#### Module System
```json
{
  "compilerOptions": {
    "module": "ESNext",      // Modern ES modules
    "target": "ES6"          // Target JavaScript version
  }
}
```

---

## TypeScript Configuration Details

### Complete Recommended Configuration

```json
{
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Module & Target
    "module": "ESNext",         // Options: "commonjs", "ES2015", "ES2020", "ESNext"
    "target": "ES6",            // Options: "ES5", "ES6", "ES2015", "ES2020", "ESNext"
    "types": [],

    // Type Checking
    "strict": true,             // Enable all strict type checking options
    "esModuleInterop": true,    // Compatibility with CommonJS modules
    "skipLibCheck": true,       // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true,

    // Output Options
    "sourceMap": false,         // Set to true for debugging (larger files)
    "declaration": false,       // Set to true to generate .d.ts files
    "declarationMap": false,    // Only used with declaration: true
    "removeComments": true      // Remove comments from output
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### For Node.js Projects

If building for Node.js, uncomment these options in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "lib": ["esnext"],
    "types": ["node"],
    "module": "commonjs"
  }
}
```

Then install Node.js type definitions:

```bash
npm install -D @types/node
```

---

## Build & Compilation

### Understanding the Build Process

1. **Source Files** (`./src/`) - Write your TypeScript code here
2. **Compilation** - TypeScript compiler transforms `.ts` → `.js`
3. **Output** (`./dist/`) - Generated JavaScript files ready to run

### Key Compiler Options Explained

| Option | Purpose | Recommended |
|--------|---------|-------------|
| `rootDir` | Where TypeScript files are located | `"./src"` |
| `outDir` | Where compiled JS goes | `"./dist"` |
| `module` | Module system format | `"ESNext"` or `"commonjs"` |
| `target` | JavaScript version target | `"ES6"` or higher |
| `strict` | Enable strict type checking | `true` |
| `sourceMap` | Debug compiled code | `true` in development |

### Common Compilation Issues

**Issue**: "Cannot find module" error
- **Solution**: Ensure `rootDir` and `outDir` are correctly configured

**Issue**: Syntax differences between TypeScript and compiled JavaScript
- **Solution**: Check that `target` matches your runtime environment

---

## Tips for Future Maintenance

### When Adding New Files
1. Place TypeScript files in `src/` directory
2. Run `npm run dev` to watch for changes
3. Check `dist/` for compiled output

### Before Committing Code
1. Run `npm run build` to ensure no compilation errors
2. Review `.gitignore` to avoid committing `dist/` folder
3. Test your compiled code if using Node.js

### IDE Tips
- VS Code provides excellent TypeScript support
- Enable "Format on Save" in settings for consistent code style
- Use IntelliSense (Ctrl+Space) for type hints

---

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [tsconfig.json Reference](https://www.typescriptlang.org/tsconfig/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Node.js + TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)

---

**Last Updated**: 2026-09-02  
**TypeScript Version**: Check with `npx tsc --version`