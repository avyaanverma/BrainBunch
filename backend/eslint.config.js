export default [
    {
      ignores: ["node_modules", "dist"], // Ignore common folders
    },
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
        "indent": ["error", 2],
      },
    },
  ];
  