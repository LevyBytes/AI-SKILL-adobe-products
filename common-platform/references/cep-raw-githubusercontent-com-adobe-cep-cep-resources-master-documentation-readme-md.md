# Documentation, Extendscript Toolkit, Readme, Readme Archivedversions

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master_Documentation_README_md; Known issues; raw_githubusercontent_com_Adobe*`CEP_CEP_R`esources*master_README_md; raw_githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`README_A`rchivedVersions_md.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources_master_Documentation_README_md

# Quick Links for CEP

This page points to [get started](https://github.com/Adobe-CEP/Getting-Started-guides) material for Common Extensibility Platform (CEP). Developers use CEP to build Adobe Creative Cloud application extensions.

**HTML Extension Cookbook**

- [CEP 12.0](cep-12-html-extension-cookbook.md)
- [CEP 11.0](cep-11-1-html-extension-cookbook.md)
- [CEP 10.0](cep-10-0-html-extension-cookbook.md)
- [CEP 9.0](cep-9-0-html-extension-cookbook.md)
- [CEP 8.0](cep-8-0-html-extension-cookbook.md)

**Miscellaneous**

- [Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides)
- [CEP Releases](https://github.com/Adobe-CEP/CEP-Resources/releases)

For older CEP releases from 4.x through 7.x, follow [link](cep-raw-githubusercontent-com-adobe-cep-cep-resources-master-documentation-readme-md.md)

## Known issues

The repo's attached license does not cover Adobe ExtendScript Toolkit usage. Governing documents are Adobe Terms of Use and Adobe Developer Additional Terms: http://www.adobe.com/go/developer-terms.

### 32-bit application

This is a 32-bit application. The installers are available for situations where they are required, but use them only when there is no alternative. ExtendScript Toolkit will not run on macOS 10.15 Catalina or later.

### Workaround for ExtendScript Toolkit Debugger Error #1116

Before using ExtendScript Toolkit to run scripts, apply the documented workaround for debugger error #1116: https://medium.com/adobetech/workaround-for-extendscript-toolkit-debugger-error-1116-f067f81f96c6

### Another option

Adobe has offered the VSCode ExtendScript Debugger plugin since early 2019: https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug. Because it does not include every ExtendScript Toolkit capability, verify that it meets your needs before moving to a 64-bit-only OS.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources_master_README_md

# Getting Started with Common Extensibility Platform (CEP)

Use the materials on this page, including [get started](https://github.com/Adobe-CEP/Getting-Started-guides), when building extensions for Adobe Creative Cloud applications with the HTML5/JavaScript interface model. Creative Cloud releases deprecated the Flash/ActionScript extension interface, and CC2014 and later releases no longer include support for it.

- CEP 12 supports extension and add-on development for current Creative Cloud Applications. For Creative Cloud products that integrate with CEP 12, see the [table](cep-12-html-extension-cookbook.md).

- CEP 11 supports extension and add-on development for current Creative Cloud Applications. For Creative Cloud products that integrate with CEP 11, see the [table](cep-11-1-html-extension-cookbook.md).

- CEP 10 supports extension and add-on development for current Creative Cloud Applications. For Creative Cloud products that integrate with CEP 10, see the [table](cep-10-0-html-extension-cookbook.md).

- Creative Cloud 2019 products ship with CEP 9 for extension and add-on work. For 2019 product integration with CEP 9, see the [table](cep-9-0-html-extension-cookbook.md).

The SDK supplies the lower-level utilities used to build extensions. Extension Manager can discover and load those extensions only after they are packaged as ZXP files. Free or paid distribution can go through Adobe Exchange, the Add-ins website, or the Creative Cloud desktop app; for that route, submit the extension to Adobe as one ZXP file.

Needed resources include:

- CEP JavaScript libraries that communicate with the operating system, Extension Manager, the host application, and other extensions.
- Sample code showing library usage
- The ZXP packager, a command-line utility

---

Use this section for CEP 12.0 HTML/JavaScript extension development targeting Creative Cloud host applications.

**Documentation**

- **[HTML Extension Cookbook](cep-raw-githubusercontent-com-adobe-cep-cep-resources-master-documentation-readme-md.md)**

- **APIs**
  For CEP 12 APIs:

  - Add these files to the extension project when those APIs are required.
    - CSInterface.js
    - Vulcan.js
  - Leave this file out of the extension project because CEP already includes it.
    - CEPEngine_extensions.js

- **[Sample extensions](https://github.com/Adobe-CEP/Samples)**

- **Packaging and Signing Tool (ZXPSignCMD)**

  - Tool: [ZXPSignCMD](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD)

- **Extension Installation Tools**

  - Extension Manager Command Line Tool
    - [Announcement: Extension Manager End of Life](https://www.adobeexchange.com/resources/27)
    - [ExMan Command Line Tool](https://www.adobeexchange.com/resources/28)
    - [ExMan Command Line Tool's Error Codes](http://www.adobeexchange.com/resources/19#errors)
  - [A Python script to install & manage extensions](https://github.com/adobe-photoshop/generator-panels/blob/master/installPanels.py) (by John Peterson)
  - Other Tools
    - http://zxpinstaller.com/
    - http://install.anastasiy.com/

- **Tooling**

  - [Extension Builder 3 Preview](http://adobe.ly/1pho2QU)
  - [Extension Builder 3 forums - get help from the developer community](http://adobe.ly/1mgZ2xe)
    (NOTE: EB3 works only with CEP 4.x. You can [tweak it](http://adobe.ly/1v3wgiq) for limited CC 2014 support.)
  - [BOLT CEP Extension framework](https://github.com/hyperbrew/bolt-cep)
    (NOTE: BOLT provides a CEP extension boilerplate for React, Vue or Svelte, built on TypeScript + Sass.)

- **[Older CEP versions 4.x to 7.x](cep-raw-githubusercontent-com-adobe-cep-cep-resources-master-documentation-readme-md.md)**

---

**Miscellaneous help**

- [Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides)
- [CS SDK Blog](https://blogs.adobe.com/cssdk/)
- [Andy Hall's Super Mega Guide (English)] (http://bit.ly/XQn9IV) [ (Japanese)] (http://bit.ly/XQnB9P)
- [Davide Barranca's blog](http://www.davidebarranca.com/) and [HTML Panels Development Course](http://htmlpanelsbook.com/)
- [David Deraedt's plugin for Adobe Brackets](http://bit.ly/QKWWYL)
- [Olav Martin Kvern's article on extensibility and InDesign](http://bit.ly/1zEa9Ef)
- [The other API (Article on Medium)](http://bit.ly/1hIFZay)
- [Adobe Exchange](http://bit.ly/1mHVksI)
- [Photoshop CC 2014 CEP samples by John Peterson](http://bit.ly/1nGAWYN)

---

**License**

- [English](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/License/Gen`SDK_IHC`-en_US-20120323_1224.pdf)
- [French](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/License/Gen`SDK_IHC`-fr_FR-20120323_1224.pdf)

---

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`README_A`rchivedVersions_md

# Archived versions CEP 4.x to CEP 7.x

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

- [CEP 7.0 HTML Extension Cookbook for 2015.x in June 2016](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/`CEP_7`.0_`HTML_E`xtension_Cookbook.pdf)
- [CEP 7 Feature List](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/`CEP_7_F`eature_List.pdf)

**APIs** (https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_7`.x)

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

Use this section for CEP 6.1 HTML/JavaScript extension development targeting CC2015.1 host applications.

**Documentation**

- [CEP 6.1 HTML Extension Cookbook for CC 2015.1](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_6`.x/`CEP_6`.1_`HTML_E`xtension_Cookbook.pdf)
- [CEP 6 Feature List](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_6`.x/`CEP_6_F`eature_List.pdf)

**APIs** (https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_6`.x)

- Add these files to the extension project when those APIs are required.
  - AgoraLib.js
  - CSInterface.js
  - Vulcan.js
- Leave this file out of the extension project because CEP already includes it.
  - CEPEngine_extensions.js
- Extension Manifest
  - ExtensionManifest_v_6_0.xsd

**Samples**

- [Sample extensions](https://github.com/Adobe-CEP/Samples)

**Packaging and Signing Tool (ZXPSignCMD)**

- [Packaging and Signing Adobe Extensions](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf) (NOTE: Applies to CEP 4.0 and remains valid for CEP 6.x.)

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

Use this section for CEP 6.0 HTML/JavaScript extension development targeting CC2015 host applications.

**Documentation**

- [CEP 6.0 HTML Extension Cookbook for CC 2015](https://github.com/Adobe-CEP/CEP-Resources/wiki/CEP-6-HTML-Extension-Cookbook-for-CC-2015)

**APIs** (https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_6`.x)

- Add these files to the extension project when those APIs are required.
  - AgoraLib.js
  - CSInterface.js
  - Vulcan.js
- Leave this file out of the extension project because CEP already includes it.
  - CEPEngine_extensions.js
- Extension Manifest (unchanged in CEP 6.0)
  - ExtensionManifest_v_5_0.xsd

**Samples**

- [Sample extensions](https://github.com/Adobe-CEP/Samples)

**Packaging and Signing Tool (ZXPSignCMD)**

- [Packaging and Signing Adobe Extensions](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf) (NOTE: Applies to CEP 4.0 and remains valid for CEP 6.)

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

Use this section for CEP 5.x HTML/JavaScript extension development targeting CC2014 host applications.

**Documentation**

- [Offical Adobe Extension SDK Documentation for CC 2014](http://adobe.ly/1rin38t)
- [CEP 5 HTML Extension Cookbook for CC 2014](https://github.com/Adobe-CEP/CEP-Resources/wiki/CEP-5-HTML-Extension-Cookbook-for-CC-2014)
- [CEP 5 Flash Extension Cookbook for CC 2014](https://github.com/Adobe-CEP/CEP-Resources/wiki/CEP-5-Flash-Extension-Cookbook-for-CC-2014)

**APIs** (https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_5`.x)

- Add these files to the extension project when those APIs are required.
  - AgoraLib.js
  - CSInterface.js
  - Vulcan.js
- Leave this file out of the extension project because CEP already includes it.
  - CEPEngine_extensions.js
- Extension Manifest
  - ExtensionManifest_v_5_0.xsd
- PlugPlugExternalObject
  - [PlugPlugExternalObject for InDesign CC 2014](http://bit.ly/1qlnKOb)

**Samples**

- [Sample extensions](https://github.com/Adobe-CEP/Samples)

**Other Documents**

- [CEP for the InDesign Developer](http://adobe.ly/1xXkviH)
- [Extending Adobe CC 2014 apps using Node.js](http://bit.ly/1yAR0T9)
- [A short guide to HTML5 extensions](http://adobe.ly/Nk1EK7)
  (NOTE: Applies to CEP 4.0 and is still mostly relevant.)
- [Guide to signing extensions](http://adobe.ly/1oiS4FE)
  (NOTE: Applies to CEP 4.0 and remains valid for CEP 5.)

---

Use this section for CEP 4.x and CS6/CC host application extension development.

**Documentation**

- [Documentation for CEP 4.2](http://adobe.ly/1cWBggl)
- [Tutorial](http://bit.ly/1nNLqH4)
  (NOTE: Somewhat old.)

**APIs** (https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_4`.x)

- Add these files to the extension project when those APIs are required.
  - CSInterface.js
  - Vulcan.js
- Leave this file out of the extension project because CEP already includes it.
  - CEPEngine_extensions.js
- Extension Manifest
  - ExtensionManifest_v_4_0.xsd

**Tooling**

- [Extension Builder 3 Preview](http://adobe.ly/1pho2QU)
- [Extension Builder 3 forums - get help from the developer community](http://adobe.ly/1mgZ2xe)
  (NOTE: EB3 works only with CEP 4.x. You can [tweak it](http://adobe.ly/1v3wgiq) for limited CC 2014 support.)

---

Miscellaneous help

- [Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides)
- [CS SDK Blog](https://blogs.adobe.com/cssdk/)
- [Andy Hall's Super Mega Guide (English)] (http://bit.ly/XQn9IV) [ (Japanese)] (http://bit.ly/XQnB9P)
- [Davide Barranca's blog](http://www.davidebarranca.com/) and [HTML Panels Development Course](http://htmlpanelsbook.com/)
- [David Deraedt's plugin for Adobe Brackets](http://bit.ly/QKWWYL)
- [Olav Martin Kvern's article on extensibility and InDesign](http://bit.ly/1zEa9Ef)
- [The other API (Article on Medium)](http://bit.ly/1hIFZay)
- [Adobe Exchange](http://bit.ly/1mHVksI)
- [Photoshop CC 2014 CEP samples by John Peterson](http://bit.ly/1nGAWYN)

---
