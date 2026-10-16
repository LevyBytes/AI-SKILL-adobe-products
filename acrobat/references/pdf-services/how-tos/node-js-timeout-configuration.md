# Node.js timeout configuration

Available properties:

- **timeout**: Default: 10000. The longest the request may run, in milliseconds, before it is cut off. Should it run past `timeout`, the request is aborted.

Adjust these properties by passing a custom `ClientConfig` class:

###

```javascript
const clientConfig = new ClientConfig({
  timeout: 15000,
});
```

### Node.js timeout configuration

Available properties:

- **timeout**: Default: 10000. The longest time, in milliseconds, the request may run before it times out. Should it run past `timeout`, the request gets aborted.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```javascript
const clientConfig = new ClientConfig({
  timeout: 15000,
});
```
