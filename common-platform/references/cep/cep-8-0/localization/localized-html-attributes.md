# Localized HTML attributes

CEP 8.0 extension example. Load the matching `CSInterface.js` library first and provide `locale/messages.properties` resources; see [locale selection](locale-selection.md) and [fallback resources](shared-locale-resources.md).

`data-locale` is a custom HTML element attribute that can be added to any HTML element you want localized.

In this example, the property file contains `key3.value=value3`. In the HTML file, the input widget has the `data-locale` attribute set to `key3`, so its value becomes `value3`.

For the text area, the property file entry is `key4.innerHTML=value4`; the HTML sets `data-locale` to `key4`, and CEP writes `value4` into `innerHTML`.

The elements must exist before `initResourceBundle()` scans them. Run the inline script after these elements during document parsing.

```html
<input type="submit" value="" data-locale="key3" />
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
