# Uxp Migration Guide

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

This technical guide is for CEP (Common Extensibility Platform) developers who need practical migration details for moving extensions to UXP (Unified eXtensibility Platform). Moving an extension over can be difficult, but later plugin development work benefits from the newer platform.

- [CEP to UXP Technical Migration Guide](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#cep-to-uxp-technical-migration-guide)
  - [Why migrate to UXP?](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#why-migrate-to-uxp)
    - [Developer Tooling](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#developer-tooling)
    - [Plugin Types](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#plugin-types)
  - [UXP Plugin Development](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#uxp-plugin-development)
    - [Entrypoint Setup](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#entrypoint-setup)
    - [User Interface](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#user-interface)
  - [Migrating Native CEP Functions](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#migrating-native-cep-functions)
    - [Directory and File I/O Operations (File APIs)](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#directory-and-file-io-operations-file-apis)
    - [Encoding API](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#encoding-api)
    - [Opening Remote Resources](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#opening-remote-resources)
    - [Process APIs](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#process-apis)
  - [Migrating CEP JavaScript Libraries](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#migrating-cep-javascript-libraries)
    - [Vulcan Interface: Communicating across plugins within Photoshop](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#vulcan-interface-communicating-across-plugins-within-photoshop)
    - [CS APIs: Communicating with your plugin and with Photoshop](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#cs-apis-communicating-with-your-plugin-and-with-photoshop)
      - [Use Case: API Version](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-api-version)
      - [Use Case: Sending/Receiving Events](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-sendingreceiving-events)
      - [Use Case: Network Access](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-network-access)
      - [Use Case: Customizing Menus](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-customizing-menus)
      - [Use Case: Theme Support](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-theme-support)
      - [Use Case: Localization](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-localization)
      - [Use Case: Keyboard Events](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-keyboard-events)
      - [Use Case: Adjusting Plugin Size](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-adjusting-plugin-size)
  - [Migrating ExtendScript/EvalScript to the Photoshop DOM API](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#migrating-extendscriptevalscript-to-the-photoshop-dom-api)

M1 devices can run CEP natively for every application except Photoshop. CEP extensions still run natively on Windows, and they can run on M1 Macs when Photoshop is launched in Rosetta mode. Because native Photoshop on M1 does not support CEP, existing CEP extensions have a strong reason to consider a UXP plugin version.

Migration is not a direct one-for-one exercise because CEP and UXP have different foundations. CEP used CEF ([Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef)), so it behaved much like a browser. UXP is not a browser, so exact feature parity should not be expected. Treat the move as a chance to rebuild the CEP extension into a faster, better-designed plugin, potentially with new capabilities and modern workflow support. In practice, it is more accurate to view the effort as a reconstruction around UXP's strengths than as a straight migration.

Many end users who rely on the current CEP plugin may not need a replacement for several years. Users running Photoshop natively on M1 Mac machines are the audience that needs UXP support, and offering that plugin can also bring in new users.
