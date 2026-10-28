# localize()

localize (localization_obj[, args])

localize (ZString)

### Description

The global localize function supplies localized text wherever a displayed string value is needed.

It accepts a specially formatted group of localized versions for a display string and returns the locale-appropriate version.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| localization_obj | Object | A JavaScript literal object: keys are locale names, and values are the localized text strings. The locale name follows the identifier form specified by the ISO 3166 standard, using two-letter language codes, for instance "en" for English and "de" for German. Example: btnText = { en: "Yes", de: "Ja", fr: "Oui" }; b1 = w.add ("button", undefined, localize (btnText)); Each property's string value can include variables in the forms %1, %2, and so on, which correspond to extra arguments. In the returned string, each variable is replaced by the evaluated result of its matching argument. |
| args | Any | Optional. Additional JavaScript expressions that match variables in the localization object's string values. The first expression maps to %1, the second maps to %2, and so forth. Each expression is evaluated, and the result is inserted at that variable's location in the returned string. |
| ZString | ZString | Internal use only. ZString is an internal Adobe format for localized strings that can appear in Adobe scripts. It begins with $$$ and includes a path to the localized string in a ZString dictionary installed with Adobe software. Example: w = new Window ("dialog", localize ("$$$/UI/title1=Sample")); |

Example:

```javascript
today = {
    en: "Today is %1/%2",
    de: "Heute ist der %2.%1."
};
d = new Date();
alert (localize (today, d.getMonth()+1, d.getDate()));
```
