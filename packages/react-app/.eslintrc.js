module.exports = {
  env: {
    browser: true,
  },
  plugins: ["babel"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: 'never',
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "prefer-template": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "no-console": "off",
    "react/react-in-jsx-scope": ["off"],
    "jsx-a11y/accessible-emoji": ["off"],
  },
};
