# Issue: Not handling error details array

**Problem:** The code expects one error message.

```javascript
console.error(status.error); // Wrong
```

**Solution:** Iterate through the error details array.

```javascript
status.errorDetails.forEach((error) => {
  console.error(`${error.errorCode}: ${error.message}`);
});
```
