# Instantiate `CSInterface`

Every CEP panel needs a `CSInterface` instance. Among its other responsibilities, that object provides communication with the host app scripting engine:

```javascript
const csInterface = new CSInterface();
```

Later code uses the `csInterface` constant.
