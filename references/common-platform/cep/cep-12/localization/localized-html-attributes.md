# Localized HTML attributes

CEP 12 extension example. Load the matching `CSInterface.js` library first and provide `locale/messages.properties` resources; see [locale selection](locale-selection.md) and [fallback resources](shared-locale-resources.md).

`data-locale` is a custom HTML element attribute; attach it to each HTML element that should be localized.

In this example, the property file contains `key3.value=value3`. In the HTML file, the input widget has `data-locale` set to `key3`, so its value becomes `value3`.

In this example, the property file contains `key4.innerHTML=value4`. In the HTML file, the text area widget has `data-locale` set to `key4`, so its `innerHTML` becomes `value4`.

The elements must exist before `initResourceBundle()` scans them. Run the inline script after these elements during document parsing.

```html
<input type="submit" value="" data-locale="key3"/>
<textarea rows="10" cols="80" data-locale="key4"></textarea>

<script type="text/javascript">
  var cs = new CSInterface();

  // Get properties according to current locale of host application.
  var resourceBundle = cs.initResourceBundle();

  // Use the localized strings.
  document.write(resourceBundle.key1);
  document.write(resourceBundle.key2);
</script>
```
