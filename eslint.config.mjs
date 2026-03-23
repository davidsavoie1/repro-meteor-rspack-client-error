import globals from "globals";
import pluginJs from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";
/* Link to 2.46 version of documentation : https://github.com/sveltejs/eslint-plugin-svelte/blob/eslint-plugin-svelte%402.46.0/README.md */
// import eslintPluginSvelte from "eslint-plugin-svelte";
// import svelteESLintParser from "svelte-eslint-parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        $: "readonly",
        Meteor: "readonly",
      },
      parser: babelParser,
    },
  },

  pluginJs.configs.recommended,
  // ...eslintPluginSvelte.configs["flat/recommended"],
  // ...eslintPluginSvelte.configs["flat/prettier"],
  eslintConfigPrettier,

  {
    ignores: ["dist", "node_modules", ".meteor"],
  },

  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },

  // Svelte override.
  // {
  //   files: ["**/*.svelte"],
  //   languageOptions: {
  //     parser: svelteESLintParser,
  //   },
  //   rules: {
  //     "no-unused-labels": "off",
  //   },
  // },
];
