# webpack.config.js

Webpack bundles the project dependencies, so the project includes webpack.config.js for the basic configuration.

The package.json file includes `@swc-uxp-wrappers/utils`; the project uses it for [aliasing](https://webpack.js.org/configuration/resolve/#resolvealias) through a mapping. Removing this aliasing lets the same plugin run on the web too.

Webpack configuration excerpt using ESM syntax. Retain the rest of your build configuration when merging the resolve property.

```javascript
import { aliases } from "@swc-uxp-wrappers/utils";

export default {
resolve: {
            extensions: ['.js', '.json'],
            alias: aliases,
        }
};
```

Pro tip: To debug more easily, add `eval-cheap-source-map` in the webpack.config file so the UDT debug window receives the source map.

```javascript
devtool: "eval-cheap-source-map";
```
