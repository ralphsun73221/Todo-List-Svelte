import js from "@eslint/js";
import svelteParser from "svelte-eslint-parser";
export default [
  js.configs.recommended,
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
    },
  },
];