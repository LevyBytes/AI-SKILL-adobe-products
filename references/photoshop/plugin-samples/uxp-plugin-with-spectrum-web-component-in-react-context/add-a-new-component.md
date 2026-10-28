# Add a new component

Use supported components from the [SWC component reference](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc) with this sequence:

1. Install each component and its supported version with `yarn add`.

```bash
yarn add @swc-uxp-wrappers/link;
yarn add @swc-react/link@0.14.1-react.3029;
```

**Note:** UXP-SWC components ship as wrappers around particular SWC versions. For example, `@swc-uxp-wrappers/menu` is pinned to a wrapper for version **0.16.9** of `@spectrum-web-components/menu`. For React, include `@swc-react/menu:0.16.9-react.3029` too, because that React wrapper is the nearest match to SWC component version (0.16.9) in the dependency block. Components such as `icons`,`icons-workflow`, `icons-ui`, `theme`, `shared` , `base`,`styles` have no wrappers, so install those packages straight from npm under `@spectrum-web-components`.

2. In the `App.js` file, register the component.

```javascript
import { Link } from "@swc-react/link";
```

3. Place the component in that same file.

```html
   This is a <Link href="#">example link</Link>.
```

4. Add alias configuration to the webpack config file. This project already includes that configuration. In package.json, notice the `@swc-uxp-wrappers/utils` entry. That package provides the `alias.js` file for all supported components, and `webpack.config.js` imports it like this.

```javascript
import { aliases } from '@swc-uxp-wrappers/utils';
```

5. Run `yarn build` to create the distribution bundle.
   `yarn watch` can also rebuild the bundle whenever source files are saved. Pair it with Plugin -> Watch in UDT so the latest changes sync automatically.
