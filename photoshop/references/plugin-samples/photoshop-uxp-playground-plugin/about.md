# About

The UI is rendered with React, and React Portals are used to coordinate multiple panels. For implementation cues, study how the app uses `PanelController` with UXP events so each panel mounts in the correct place.

Portals are not required for managing several panels, but this approach can make the structure easier to reason about.

UXP v4.0 is covered by the current manifest in this version; the earlier manifest is kept as `manifest.v3.json` for comparison.

Handling `onChange` events on web components is another behavior shown here. Because React does not forward that event for web components, Spectrum UXP components can seem unresponsive unless you attach the listener directly. This is a known React issue that has not yet been fixed. See the `WC` component for a wrapper that might fit your project.
