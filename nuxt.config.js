export default {
  // ssr: true,
  // target: "server",
  // loading: {
  //   color: "blue",
  //   height: "50px",
  // },
  // loading: "~/components/LoadingBar.vue",
  // loadingIndicator: {
  //   name: "circle",
  //   color: "#3B8070",
  //   background: "white",
  // },
  // build: {
  //   // ここでwebpack設定を拡張できます
  //   transpile: ["npm-package-name"],
  // },
  components: true,
};

module.exports = {
  modules: ["@nuxtjs/axios"],
  plugins: ["~/plugins/axios.js"],
};
