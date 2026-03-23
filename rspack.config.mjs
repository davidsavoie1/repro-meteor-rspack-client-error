export default {
  // devServer: {
  //   client: {
  //     logging: "warn",
  //   },
  // },
  // resolve: {
  //   conditionNames: ["svelte", "..."],
  //   extensions: ["...", ".svelte"],
  //   mainFields: ["svelte", "browser", "module", "main"],
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.svelte$/,
  //       use: {
  //         loader: "svelte-loader",
  //         options: {
  //           compilerOptions: {
  //             dev: process.env.NODE_ENV !== "production",
  //           },
  //           // Svelte 5 currently has no supported HMR path in svelte-loader.
  //           // Turning it off here lets Rspack/Meteor fall back to automatic
  //           // live reload instead of leaving stale component CSS in the page.
  //           hotReload: false,
  //         },
  //       },
  //     },
  //   ],
  // },
  // ignoreWarnings: [
  //   (warning) => {
  //     const file = warning?.module?.resource || "";
  //     const msg = warning?.message || "";
  //     return (
  //       file.includes("node_modules") &&
  //       file.endsWith(".svelte") &&
  //       msg.includes("element_invalid_self_closing_tag")
  //     );
  //   },
  // ],
  // experiments: { cache: false },
};
