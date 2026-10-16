# Adding a baseline grid

With the master spread in place, add a baseline grid. The diagram below maps the objects used in that setup:

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/document-changes/image4.png)

```js
let myGridPreferences = myDocument.gridPreferences;
myGridPreferences.baselineDivision = 14;
myGridPreferences.baselineStart = 70;
myGridPreferences.baselineGridShown = true;
```
