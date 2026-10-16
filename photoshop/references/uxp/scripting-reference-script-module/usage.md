# Usage

```js
const { script } = require("uxp");
```

### Properties

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| executionContext | ExecutionContext | readOnly | ExecutionContext supplied by the host during Script invocation |

### Usage

```jsx
const { script } = require("uxp");
const executionContext = script.executionContext;
console.log("isCancelled: ", executionContext.isCancelled);
```

### Properties

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| isCancelled | bool | readOnly | Used to determine whether the client or host has cancelled the execution context. |
| hostControl | Object | readOnly | Object with 4 properties, described [below](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/scripting/reference/index.md#hostcontrol). |
