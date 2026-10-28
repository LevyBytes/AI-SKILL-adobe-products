# Migration from CEP 9 to CEP 10

    Existing CEP 9 extensions do not need a migration step. In general, extensions that run on CEP 9 should also run on CEP 10 without changes.

With CEP 10, keep these points in mind:

1. Problems observed in NWJS version 0.38 also apply to CEP 10

Example: errors have been seen when the node module "winston" is used together with another node module that uses duplex.
Workaround: when your extension uses the node module "winston", include this script in the extension.

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

CEP 10 uses NodeJS 12.3.1 and Node-WebKit 0.38. Extensions built against older NodeJS versions may fail to load in CEP 10 when their node modules are incompatible. In those situations, rebuild or update the modules on NodeJS 12.3.1 or a newer release.

3.CSS property issues caused by Chromium deprecations also apply in CEP 10

When Chromium deprecations affect CSS, extension developers must adjust the extension stylesheet so CEP 10 renders the extension correctly. Example issue: https://bugs.chromium.org/p/chromium/issues/detail?id=927066

4. For details about the disable nodejs option, see [here](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#using-nodejs-apis-since-cep-100).
