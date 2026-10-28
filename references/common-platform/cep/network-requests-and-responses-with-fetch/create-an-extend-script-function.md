# Create an ExtendScript function

Inside the extension `index.jsx`, add this function declaration:

```javascript
function applyWeatherToAsset(currentWeatherSlug, currentWeatherString) {
  // Code will go here
}
```

The function receives the `currentWeatherSlug` and `currentWeatherString` string arguments passed from the client-side `.evalScript()` call.
