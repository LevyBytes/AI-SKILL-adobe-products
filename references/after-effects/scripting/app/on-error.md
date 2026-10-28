# app.onError

app.onError

### Description

Names a callback function to fire whenever an error happens. Write such a function, assign it here, and you gain a uniform way to handle errors; for instance, you might shut down and relaunch the program, logging the error to a file if it struck mid-render. See RenderQueue.render(). After Effects passes the callback both an error string and a severity string, and the callback should return nothing.

### Type

A function name string, or null if no function is assigned; read/write.

### Example

```javascript
function err(errString) {
    alert(errString) ;
}
app.onError = err;
```
