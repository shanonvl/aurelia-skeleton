export function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // sample plugin: http://aurelia.io/docs.html#plugins
    .plugin("./plugins/helloWorld",{
      foo:'bar',
      bar:'BAZ!'
    });

  aurelia.start().then(a => a.setRoot());
}
