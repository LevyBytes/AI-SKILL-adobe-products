# Extension Manifest XSD

Every HTML extension must use version 5.0 or later. Get the XSD here:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_7.x (No elements change from CEP 7)

To check whether an extension manifest matches the latest schema, use these steps:

1.  Download the latest schema (`ExtensionManifest_<version>.xsd`). The schema did not change in CEP 8, so for CEP 8 and 9 also use https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/ExtensionManifest_v_7_0.xsd.
2.  Open [this validator](http://tools.decisionsoft.com/schemaValidate/)
3.  Submit the schema plus the latest ExtensionManifest from a real build, so the versions are checked.
4.  Run validation.
