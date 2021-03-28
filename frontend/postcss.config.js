const plugins = [
  require("tailwindcss"),
  require("postcss-preset-env")({
    stage: 1,
    features: {
      "focus-within-pseudo-class": false,
    },
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.{ts,tsx}", "index.html"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        deep: [/figure/, /table/, /prose/],
      },
    })
  );
}

module.exports = {
  plugins,
};
