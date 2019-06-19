const isTest = process.env.NODE_ENV === "test";

module.exports = {
  presets: ["@babel/env", "@babel/react"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    isTest ? undefined : `styled-jsx/babel${isTest ? "-test" : ""}`
  ].filter(x => x)
};
