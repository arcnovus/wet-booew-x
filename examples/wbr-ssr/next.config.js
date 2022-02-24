/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@arcnovus/wet-boew-react"]); // pass the modules you would like to see transpiled
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = withTM(nextConfig);
