# Localized HTML attributes

CEP 9.0 extension example. Load the matching `CSInterface.js` library first and provide `locale/messages.properties` resources; see [locale selection](locale-selection.md) and [fallback resources](shared-locale-resources.md).

`data-locale` is the custom HTML element attribute that can be added to any HTML element you want localized.

In the property file for this example, `key3.value=value3` appears. In the HTML, the input widget carries the `data-locale` attribute with `key3`, causing its value to become `value3`.

The same property file also contains `key4.innerHTML=value4`. The HTML text area uses `data-locale` with `key4`, so its `innerHTML` becomes `value4`.

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
