# Stroke declaration

Community declaration reference: Animate/22.0.

Stroke carries the stroke configuration, including custom stroke options. It mirrors the information shown in the Property inspector. Use Stroke with document.setCustomStroke() to update stroke settings for the Tools panel, Property inspector, and current selection. Use document.getCustomStroke() to read stroke settings from the Tools panel and Property inspector, or from the active selection.
The required members are always style, thickness, color, and breakAtCorners. In Flash CS3, stroke.joinType replaced the deprecated breakAtCorners property. Additional members are available according to the value of stroke.style.

Declaration: `declare class Stroke`.

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
