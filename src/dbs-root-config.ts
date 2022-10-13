import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ) as any,
  activeWhen: ["/"],
});

registerApplication({
  name: "@dbs/navigation",
  app: () => System.import("@dbs/navigation") as any,
  activeWhen: ["/navigation/dbs"],
});

// registerApplication({
//   name: "@dbs/navbar",
//   app: () => System.import("@dbs/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
