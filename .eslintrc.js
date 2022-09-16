module.exports = {
    extends: [
      "next",
      "airbnb",
      "plugin:@next/next/recommended",
      // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      "prettier",
      "prettier/@typescript-eslint",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      ecmaFeatures: {
        jsx: true // Allows for the parsing of JSX
      },
      project: "tsconfig.json",
      tsconfigRootDir: __dirname
    },
    settings: {
      react: {
        version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    rules: {
      "linebreak-style": [
        "error",
        process.platform === "win32" ? "windows" : "unix"
      ],
      "no-use-before-define": "off",
      "max-len": "warn",
      camelcase: "off",
      "no-console": "off",
      "import/extensions": "off",
  
      "prettier/prettier": "error",
  
      // REACT
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": "off",
      "react/require-default-props": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "off",
      "react/react-in-jsx-scope": "off",
  
      // NEXT
      "@next/next/link-passhref": "off",
  
      // TYPESCRIPT
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
      // '@typescript-eslint/no-empty-interface': 'off',
    },
    env: { jest: true, browser: true, node: true }
  };
s  