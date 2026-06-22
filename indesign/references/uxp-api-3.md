# Reference Spectrum, Versions3 P

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FAQs; Spectrum UXP Reference; Spectrum UXP Widgets; UXP Spectrum widgets to SWC mapping; Spectrum Web Component; UXP General Information.

## FAQs

### Q: Why use SWC?

A: SWC are Web Components, so the same UI can move into ordinary web browsers. Compared with Spectrum UXP Widgets, SWC can also be inspected and debugged like standard Web Components.

### Q: Can Spectrum UXP Widgets and SWC be used with React or other frameworks?

A: Yes. These components are framework agnostic, and they can be paired with any framework that works in UXP. Some frameworks use their own patterns for web components, so review the framework documentation as well. For React-specific notes, see [Use with React](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-spectrum/spectrum-uxp-widgets/using-with-react.md).

Separate work continues on a React wrapper for SWC. A sample plugin is planned.

### Q: Is the Spectrum UXP widget being removed?

A: No, but new capabilities are no longer being added to these widgets.

### Q: Spectrum UXP widget tags and SWC tags look the same. How can I tell them apart?

A: Some components, including `<sp-button>` and `<sp-link>`, exist in both forms: Spectrum UXP Widget and SWC. The important difference is the `import` step required by SWC. After the import, UXP treats the tag as the SWC variant.

### Q: Can Spectrum UXP widgets and SWC be combined?

A: Yes. Both sets can appear together in one UI. For example,

```
<sp-banner> \

- ECMAScript Version in UXP v6.4 : ECMA-262
- React Version Supported in UXP v6.4: React 16 or lower

### Applications Integrated with UXP

| Application  | UXP v8.0 | UXP v7.4 | UXP v7.3 | UXP v7.2 | UXP v7.1 | UXP v7.0 | UXP v6.5| UXP v6.4| UXP v6.3| UXP v6.2 | UXP v6.1 | UXP v6.0 | UXP v5.6 | UXP v5.5 |
| ------------ | -------- | -------- | -------- | -------- | -------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
|Photoshop     | 26.0     | 25.5     | 25.2     | 25.0     | 24.6     | 24.4    | 24.1    | 24.1    | 24.0     | 23.5     | 23.4     | 23.3     | 23.2     | 23.0     |
|InDesign      | 20.0     | 19.4     | 19.0     | -        | 18.5     | -       | 18.1    | -       | 18.0     | 17.4	  | -        | -        | 17.1     | 17.0     |
|InDesign Server | -      | -        | -        | -        | -        | -       | -       | -       | 18.0     | 17.4	  | -        | -        | 17.1     | 17.0     |
|XD            | -        | -        | -        | -        | -        | -       | -       | -       | 55       | 54	      | -        | -        | 53       | 45       |

### UXP Features Supported in Applications

| Application   | UXP Plugins    | UXP Scripting |
| ------------- | -------------- | ------------- |
| Photoshop     | ✅	            | ✅ from 24.1  |
| InDesign      | -	             | ✅ from 18.0  |
```
