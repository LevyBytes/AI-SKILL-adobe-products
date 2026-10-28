# Add a new component

Use supported components from the [SWC component reference](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc) with this sequence:

1. Install each component and its supported version with `yarn add`.

```bash
yarn add @swc-uxp-wrappers/link@1.0.0;
```

**Note:** UXP-SWC components ship as wrappers around particular SWC versions. For example, `@swc-uxp-wrappers/banner` is pinned to a wrapper for version **0.9.2** of `@spectrum-web-components/banner`. Install the newest `swc-uxp-wrappers`, and add the recommended SWC component version, such as 0.9.2, to the resolutions block too. Components such as `icons`, `icons-workflow`, `icons-ui`, `theme`, `shared`, `base`, `styles` have no wrappers, so install them with npm.

2. Import the component in `index.js` file. Choose one of two methods:

   a. Use `@swc-uxp-wrappers` as the import source

```javascript
import "@swc-uxp-wrappers/link/sp-link.js";
```

   b. Use `@spectrum-web-components` for the import, with aliasing configured in the webpack.conf.js file.

```javascript
import '@spectrum-web-components/link/sp-link.js';
```

   Deep Dive describes the webpack.conf.js alias that maps `@swc-uxp-wrappers` to `@spectrum-web-components`. With that approach, the plugin remains cross-platform compatible; i.e, remove the aliasing and the plugin can run on Web as well.

3. Put the component markup into the HTML document.

   ```html
   This is an <sp-link href="#">example link</sp-link>.
   ```

4. Use `yarn build` to create the distribution bundle.
   `yarn watch` can also rebuild the bundle whenever source files are saved. Pair it with Plugin -> Watch in UDT so the latest changes sync automatically.
