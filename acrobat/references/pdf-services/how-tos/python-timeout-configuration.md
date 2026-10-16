# Python timeout configuration

Available properties:

- **connectTimeout**: Default: 4000. How many milliseconds Requests holds out for the client to open a connection to the Server.
- **readTimeout**: Default: 10000. How many milliseconds the client holds out for the server to return a response.

Tune these properties using a custom `ClientConfig` class:

###

```javascript
client_config = ClientConfig((connect_timeout = 4000), (read_timeout = 10000));
```

### Python timeout configuration

Available properties:

- **connectTimeout**: Default: 4000. How many milliseconds Requests holds out for the client to open a connection to the Server.
- **readTimeout**: Default: 10000. How many milliseconds the client holds out for the server to return a response.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```javascript
client_config = ClientConfig((connect_timeout = 4000), (read_timeout = 10000));
```
