# FAQ

- **See the migration Guidelines for [CEP 9 to CEP 10](../cep-10-0/migration-from-cep-9-to-cep-10.md)**

- **If the debug console shows a similar error, confirm\verfiy these items**

  [Figure: require not function](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/CEP_10.x/Documentation/images/issues/requireNotFunction.png)

  - Verify that your extension does NOT integrate CEPEngine_extensions.js

  - Node may be crashing. Update node_modules to a [node version](../cep-10-0/node-js.md) supported by CEP 10.
