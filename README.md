# aurelia-skeleton

Skeleton for Aurelia development

## Annotated Directory Structure

```
.
├── LICENSE
├── aurelia.protractor.js
├── build
│   ├── args.js
│   ├── babel-options.js
│   ├── paths.js           # build paths
│   └── tasks              # gulp tasks 
│       ├── build.js
│       ├── clean.js
│       ├── dev.js
│       ├── doc.js
│       ├── e2e.js
│       ├── lint.js
│       ├── prepare-release.js
│       ├── serve.js
│       ├── test.js
│       └── watch.js
├── config.js              # SystemJS config
├── gulpfile.js      
├── index.html             # Root HTML view
├── karma.conf.js         
├── package.json
├── protractor.conf.js     
└── src
    ├── app.html           # Root application view
    ├── app.js             # Application bootstrap
    ├── appConfig.js       # Application config
    ├── plugins            # Plugins
    │   └── helloWorld.js  # Sample plugin
    └── welcome            # Welcome Component
        ├── welcome.html  
        └── welcome.js
```
