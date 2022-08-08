//genesys global function begin
(function (g, e, n, es, ys) {
  g["_genesysJs"] = e;
  g[e] =
    g[e] ||
    function () {
      (g[e].q = g[e].q || []).push(arguments);
    };
  g[e].t = 1 * new Date();
  g[e].c = es;
  ys = document.createElement("script");
  ys.async = 1;
  ys.src = n;
  ys.charset = "utf-8";
  document.head.appendChild(ys);
})(
  window,
  "Genesys",
  "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js",
  {
    environment: "use1",
    deploymentId: "16c252a6-a8e4-4824-8d86-7508f9d7252d",
  }
);
//genesys global function end

function toggleMessenger() {
  Genesys(
    "command",
    "Messenger.open",
    {},
    function (o) {}, // if resolved
    function (o) {
      // if rejected
      Genesys("command", "Messenger.close");
    }
  );
}
