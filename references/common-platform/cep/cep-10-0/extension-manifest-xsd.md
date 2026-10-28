# Extension Manifest XSD

All HTML extensions must use version 5.0 or above. The XSD is available from the GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_7.x (No elements change from CEP 7)

To check whether an extension manifest matches the latest schema, use this sequence:

1.  Download the latest schema (`ExtensionManifest_<version>.xsd`). Note that the schema did not change in CEP 8, so use https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/ExtensionManifest_v_7_0.xsd for CEP 8 and 9 too.
2.  Go [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Submit the schema and your latest ExtensionManifest from a real build, so the version values are checked.
4.  Run validation
