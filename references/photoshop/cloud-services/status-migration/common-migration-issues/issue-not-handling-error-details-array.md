# Issue: Not handling error details array

**Problem:** The code expects one error message

**Solution:** Iterate through the error array

```javascript
if (status.errorDetails) {
  status.errorDetails.forEach((error) => {
    console.error(`${error.errorCode}: ${error.message}`);
  });
}
```
