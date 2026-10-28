# Event Handling

React does not add event listeners to Web Component elements. That behavior is technically consistent, because React cannot infer that a particular attribute is meant to be an event handler, but it can look broken when handlers are not called.

The simplest workaround is to place a `ref` on the component and attach listeners yourself. Because repeating that pattern adds a lot of boilerplate, Adobe provides the [simple wrapper comonent (WC)](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/WC.jsx) to handle the repetitive work. The [plugin samples](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/ColorPicker.jsx#L40) show Spectrum UXP components wrapped with this helper.
