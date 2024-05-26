module.exports = {
    module: {
      rules: [
        {
          test: /\.style.js$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  parser: "postcss-js",
                },
                execute: true,
              },
            },
          ],
        },
      ],
    },
  };