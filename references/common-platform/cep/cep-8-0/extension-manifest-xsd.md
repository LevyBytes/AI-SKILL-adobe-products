# Extension Manifest XSD

HTML extensions must target version 5.0 or later. The XSD is in this GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_8.x

To verify that an extension manifest matches the latest schema, use these steps:

1.  Download the latest schema (`ExtensionManifest_<version>.xsd`). The schema did not change in CEP 8, so also use https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/ExtensionManifest_v_7_0.xsd for CEP 8.
2.  Open [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Upload the schema together with the latest ExtensionManifest from a real build, so version validity is checked.
4.  Select validate
