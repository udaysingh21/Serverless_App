// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module",
      // Merge Node + Jest globals
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    // Ignore the coverage folder so it won't be linted
    ignores: ["coverage/"],
  },
  // Apply ESLint's recommended config from @eslint/js
  pluginJs.configs.recommended,
];
