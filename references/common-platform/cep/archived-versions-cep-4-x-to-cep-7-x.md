# Archived CEP development resources

This archive page gathers the starter materials for creating Adobe Creative Cloud application extensions with the HTML5/JavaScript interface model. Creative Cloud releases deprecated the Flash/ActionScript extension interface, and CC2014 and later releases no longer include support for it.

- In the Creative Cloud 2015.x release from June 2016, Photoshop and Illustrator moved to CEP 7, while the other applications remained on CEP 6.1. Build extensions and add-ons on CEP 6 infrastructure or newer.

- For the Creative Cloud 2015 release, extensions and add-ons require CEP 6 infrastructure.

- Creative Cloud 2014 extensions and add-ons depend on CEP 5 infrastructure and must load through Extension Manager. Current releases either already lack CEP 4 and Flash/ActionScript extension support or are moving away from it.

- Adobe desktop applications from Creative Suite 6 and Creative Cloud 2013 support CEP 4, so extensions can use the older Flash/ActionScript interface model. The HTML5/JavaScript model is preferred, so existing Flash/ActionScript extensions should be ported.

The SDK supplies the lower-level utilities used to build extensions. Extension Manager can discover and load those extensions only after they are packaged as ZXP files. Free or paid distribution can go through Adobe Exchange, the Add-ins website, or the Creative Cloud desktop app; for that route, submit the extension to Adobe as one ZXP file.

Needed resources include:

- CEP JavaScript libraries that communicate with the operating system, Extension Manager, the host application, and other extensions.
- Sample code showing library usage
- The ZXP packager, a command-line utility

---

Use this section for CEP 7.0 HTML/JavaScript extension development targeting CC 2015.x host applications.

**Documentation**

- [CEP 7.0 HTML Extension Cookbook for 2015.x in June 2016](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/CEP_7.0_HTML_Extension_Cookbook.pdf)
- [CEP 7 Feature List](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/CEP_7_Feature_List.pdf)

**APIs** (https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_7.x)

- Add these files to the extension project when those APIs are required.
  - AgoraLib.js
  - CSInterface.js
  - Vulcan.js
- Leave this file out of the extension project because CEP already includes it.
  - CEPEngine_extensions.js
- Extension Manifest
  - ExtensionManifest_v_7_0.xsd

**Samples**

- [Sample extensions](https://github.com/Adobe-CEP/Samples)

**Packaging and Signing Tool (ZXPSignCMD)**

- Tool: [ZXPSignCMD](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD)
- Document: [Packaging and Signing Adobe Extensions](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf) (NOTE: Applies to CEP 4.0 and remains valid for CEP 7.x.)

**Extension Installation Tools**

- Extension Manager Command Line Tool
  - [Announcement: Extension Manager End of Life](https://www.adobeexchange.com/resources/27)
  - [ExMan Command Line Tool](https://www.adobeexchange.com/resources/28)
  - [ExMan Command Line Tool's Error Codes](http://www.adobeexchange.com/resources/19#errors)
- [A Python script to install & manage extensions](https://github.com/adobe-photoshop/generator-panels/blob/master/installPanels.py) (by John Peterson)
- Other Tools
  - http://zxpinstaller.com/
  - http://install.anastasiy.com/

---

Related references:

- [CEP 6.1 development resources](cep-6-1-development-resources.md)
- [CEP 6 development resources](cep-6-development-resources.md)
- [CEP 5 development resources](cep-5-development-resources.md)
- [CEP 4 development resources](cep-4-development-resources.md)
