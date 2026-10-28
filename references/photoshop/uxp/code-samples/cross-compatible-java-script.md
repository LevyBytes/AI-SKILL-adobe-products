# Cross Compatible JavaScript

As a unified platform, UXP supports plugins that target more than one Adobe product. With `require("uxp").host`, your code can read the current host application's name and branch its behavior for that host. This lets a single plugin run across multiple applications.

The [cross-compatible-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/cross-compatible-js-sample) demonstrates this approach.
