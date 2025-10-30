import globals from "globals";
import google from "eslint-config-google";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    ...google,
    rules: {
      "no-console": "off",
    },
  },
];