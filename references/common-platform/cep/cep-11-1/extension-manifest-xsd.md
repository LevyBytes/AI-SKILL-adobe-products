# Extension Manifest XSD

HTML extensions must use version 5.0 or later. The XSD is in this GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_7.x (same elements as CEP 7)

Use this procedure to verify that the extension manifest matches the latest schema:

1.  Download the latest schema (`ExtensionManifest_<version>.xsd`). Note that the schema did not change in CEP 8, so use https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/ExtensionManifest_v_7_0.xsd for CEP 8 and 9 too.
2.  Open [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Upload the schema along with the latest ExtensionManifest from a real build, so the versions can be validated.
4.  Select validate
