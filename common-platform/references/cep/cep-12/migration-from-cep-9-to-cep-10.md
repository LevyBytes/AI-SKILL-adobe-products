# Migration from CEP 9 to CEP 10

    Extensions that already work in CEP 9 do not need migration work; CEP 10 should run them directly.

Keep these CEP 10 points in mind:

1. Problems found in NWJS version 0.38 also apply to CEP 10.

Example: errors have been observed when the node module "winston" is combined with another node module that uses duplex.
Workaround: when the extension uses the node module "winston", place this script in the extension package.

```javascript
var {Duplex} = require('stream')
var {Writable} = require('stream')
{
  // Allow the keys array to be GC'ed.
  const keys = Object.keys(Writable.prototype);
  for (var v = 0; v < keys.length; v++)
  {
	const method = keys[v];
	if (!Duplex.prototype[method])
	Duplex.prototype[method] = Writable.prototype[method];
  }
}
```

2. Update your node modules

CEP 10 uses NodeJS 12.3.1 and Node-WebKit 0.38. Extensions compiled or assembled with an older NodeJS version can fail to load in CEP 10 because their node modules are incompatible. Refresh those modules with NodeJS version 12.3.1 or later.

3. CSS-property issues caused by Chromium deprecations also apply in CEP 10.

When this occurs, extension developers must revise the extension CSS so the extension renders properly in CEP 10. For example: https://bugs.chromium.org/p/chromium/issues/detail?id=927066

4. Also see the [disable nodejs option details](https://git.corp.adobe.com/cepos/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#using-nodejs-apis-since-cep-100).
