# Extension Manifest XSD

HTML extensions must target version 5.0 or newer. The XSD is in this GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_7.x (No elements change from CEP 7)

Use these steps to verify that an extension manifest matches the latest schema:

1.  Download the latest schema (`ExtensionManifest_<version>.xsd`). The schema is unchanged in CEP 8, so use https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/ExtensionManifest_v_7_0.xsd for CEP 8 and 9 too.
2.  Navigate [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Upload both the schema and the current ExtensionManifest from an actual build so the versions are validated.
4.  Hit validate
