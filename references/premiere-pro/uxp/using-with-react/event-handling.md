# Event Handling

React does not wire event listeners onto Web Component elements. This follows React's assumptions, because it cannot infer that an arbitrary attribute names an event handler, yet the result can look broken when handler callbacks are never invoked.

The direct workaround is to place a `ref` on the component and register listeners yourself. Because that adds repetitive boilerplate, Adobe provides a [WC wrapper component](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/WC.jsx) to handle that work. Sample code at [ColorPicker](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/ColorPicker.jsx#L40) shows this approach, wrapping Spectrum UXP components through the helper component.
