const typescriptIsTransformer = require("typescript-is/lib/transform-inline/transformer").default;

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: "ts-loader",
      options: {
        getCustomTransformers: (program) => ({
          before: [typescriptIsTransformer(program)],
        }),
      },
    });
    return config;
  },
};
