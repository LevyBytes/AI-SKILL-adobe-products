# Setting up measurement units and master spread margins

Run this fragment after [creating the document](../document-changes.md). It uses that `myDocument`; master spread 0 must contain two pages.

```js
//Set the measurement units and ruler origin.
const { MeasurementUnits, RulerOrigin } = require("indesign");
myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
myDocument.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;

//Get a reference to the first master spread.
let myMasterSpread = myDocument.masterSpreads.item(0);

//Get a reference to the margin preferences of the first page in the master spread.
let myMarginPreferences = myMasterSpread.pages.item(0).marginPreferences;

//Now set up the page margins and columns.
myMarginPreferences.left = 84;
myMarginPreferences.top = 70;
myMarginPreferences.right = 70;
myMarginPreferences.bottom = 78;
myMarginPreferences.columnCount = 3;
myMarginPreferences.columnGutter = 14;

//Page margins and columns for the right-hand page.
myMarginPreferences = myMasterSpread.pages.item(1).marginPreferences;
myMarginPreferences.left = 84;
myMarginPreferences.top = 70;
myMarginPreferences.right = 70;
myMarginPreferences.bottom = 78;
myMarginPreferences.columnCount = 3;
myMarginPreferences.columnGutter = 14;
```
