# Getting Started with Common Extensibility Platform (CEP)

Use the materials on this page, including [get started](https://github.com/Adobe-CEP/Getting-Started-guides), when building extensions for Adobe Creative Cloud applications with the HTML5/JavaScript interface model. Creative Cloud releases deprecated the Flash/ActionScript extension interface, and CC2014 and later releases no longer include support for it.

- CEP 12 supports extension and add-on development for current Creative Cloud Applications. For Creative Cloud products that integrate with CEP 12, see the [table](cep-12/cep-12-html-extension-cookbook.md).

- CEP 11 supports extension and add-on development for current Creative Cloud Applications. For Creative Cloud products that integrate with CEP 11, see the [table](cep-11-1/cep-11-html-extension-cookbook.md).

- CEP 10 supports extension and add-on development for current Creative Cloud Applications. For Creative Cloud products that integrate with CEP 10, see the [table](cep-10-0/cep-10-html-extension-cookbook.md).

- Creative Cloud 2019 products ship with CEP 9 for extension and add-on work. For 2019 product integration with CEP 9, see the [table](cep-9-0/cep-9-html-extension-cookbook.md).

The SDK supplies the lower-level utilities used to build extensions. Extension Manager can discover and load those extensions only after they are packaged as ZXP files. Free or paid distribution can go through Adobe Exchange, the Add-ins website, or the Creative Cloud desktop app; for that route, submit the extension to Adobe as one ZXP file.

Needed resources include:

- CEP JavaScript libraries that communicate with the operating system, Extension Manager, the host application, and other extensions.
- Sample code showing library usage
- The ZXP packager, a command-line utility

---

Use this section for CEP 12.0 HTML/JavaScript extension development targeting Creative Cloud host applications.

**Documentation**

- **[HTML Extension Cookbook](quick-links-for-cep.md)**

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

- **[Older CEP versions 4.x to 7.x](archived-versions-cep-4-x-to-cep-7-x.md)**

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

- [English](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/License/GenSDK_IHC-en_US-20120323_1224.pdf)
- [French](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/License/GenSDK_IHC-fr_FR-20120323_1224.pdf)

---
