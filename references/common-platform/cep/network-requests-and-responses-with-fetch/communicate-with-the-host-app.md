# Communicate with the host app

Communication with the host app scripting engine goes through `csInterface.evalScript()`. For a refresher on `.evalScript()`, see the [Getting Started guide](../getting-started-with-common-extensibility-platform-cep.md).

In the sample app, the `.evalScript()` call is placed inside an `applyWeatherToAsset()` helper method, which the previous step registered as the button click handler. See comments **#1-3** in this code:

```javascript
function applyWeatherToAsset(e) {
  /* 1) Get the dataset from the click event */
  const dataset = e.target.dataset;

  /* 2) Pass an ExtendScript function call to the host app with .evalScript() */
  csInterface.evalScript(
    `applyWeatherToAsset("${dataset.currentWeatherSlug}", "${dataset.currentWeatherString}")`,
  );
}
```

The final line's `.evalScript()` call can be read as this request:

> Host app, run the `applyWeatherToAsset()` function from my ExtendScript file.

The following section creates that ExtendScript function.
