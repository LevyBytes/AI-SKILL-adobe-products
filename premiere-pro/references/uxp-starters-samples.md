# Starters Samples

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Use working examples to study established patterns, and start plugin projects faster with sample code or starter templates.

## Overview

Premiere UXP plugin projects can begin from existing material instead of an empty folder. Two resource categories are available:

- **Samples**: Full working examples that show particular features or use cases in practice
- **Starters**: Small templates with framework setup for beginning a new plugin project

## GitHub repository

The official repository gathers sample projects and starter templates:

[UXP Premiere Samples](https://github.com/AdobeDocs/uxp-premiere-pro-samples)

It includes:

- Working plugin examples for frequent tasks
- Architecture practices for plugin projects
- Examples that integrate with Premiere APIs
- Reusable code patterns that can be adapted in your own projects

## UDT templates

While creating a new plugin in the UXP Developer Tool (UDT), choose from the built-in templates:

[Figure: Templates in UDT](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/starters-samples/create-plugin-template.png)

The templates include a project layout that already has:

- Pre-configured `manifest.json` file
- Basic HTML and JavaScript scaffolding
- Example code showing key concepts
- Proper directory organization

During UDT's `create` command, select the template you want. For details about that workflow, see the [UDT Deep Dive tutorial](uxp-udt-deep-dive.md).

## Hybrid Plugin SDK

When a [Hybrid Plugin](uxp-plugins.md) needs both JavaScript and native C++ code, obtain the **UXP Hybrid Plugin SDK** through the [Adobe Developer Console](https://developer.adobe.com/console). The SDK provides:

- C++ header files plus API definitions used to build native addons (`.uxpaddon` files)
- `template-dev`, a starter project that includes source code
- `template-plugin`, pre-compiled and ready to load directly into UDT

For build steps and configuration information, see the [Hybrid Plugins guide](uxp-plugins.md).

## Tutorials

To build from an empty starting point, use the [Tutorials section](uxp-tutorials-2.md), which walks through full plugin-development jobs in ordered steps:

- [UDT Deep Dive](uxp-udt-deep-dive.md): Learn UDT workflows
- [Add Commands](uxp-tutorials.md): Define Premiere menu entries
- [Add Lifecycle Hooks](uxp-tutorials.md): Handle lifecycle timing for plugins and panels
- [Add Multiple Panels](uxp-tutorials-2.md): Configure several panel entrypoints
- [Add Modal Dialogs](uxp-add-modal-dialogs.md): Build modal dialogs for Commands or supplemental Panel UI
- [Inter Plugin Communication](uxp-tutorials-2.md): Allow plugins to communicate with each other

## Recipes

For small, focused code examples instead of a complete tutorial, use the [Recipes section](uxp-recipes-2.md). Recipes offer compact code snippets for common tasks:

- File system operations
- Network requests
- UI interactions
- Clipboard access
- And more

## Contributing

The collection can grow through additional real-world examples. To contribute useful work:

1. Create a fork of the [samples repository](https://github.com/AdobeDocs/uxp-premiere-pro-samples)
2. Document the sample clearly and add it to your fork
3. Submit a pull request and tag the maintainers for review

Contributions give the broader plugin developer community more examples to learn from.
