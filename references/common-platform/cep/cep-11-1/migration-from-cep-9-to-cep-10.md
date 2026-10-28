# Migration from CEP 9 to CEP 10

    CEP 9 extensions do not require migration work. Extensions that already run under CEP 9 should start in CEP 10 without additional changes.

Keep the following CEP 10 details in mind.

1. NWJS version 0.38 issues also apply to CEP 10.

Example: errors have been observed when the node module "winston" is used together with another node module that uses duplex.
Workaround: when the extension uses the node module "winston", insert the script below.

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

2. Update your node modules.

CEP 10 uses NodeJS 12.3.1 and Node-WebKit 0.38. Extensions built against older NodeJS releases may fail to load in CEP 10 when their node modules are incompatible. In that situation, update the node modules with NodeJS version 12.3.1 or later.

3. Chromium CSS property deprecations can surface in CEP 10.

When this occurs, extension developers must revise the extension CSS so rendering works as expected in CEP 10. Related Chromium issue:
https://bugs.chromium.org/p/chromium/issues/detail?id=927066

4. Disable nodejs option details: https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#using-nodejs-apis-since-cep-100.
