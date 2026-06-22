# Community, Design

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw_githubusercontent_com_AdobeDocs_uxp_photoshop_main_src_pages_community_index_md — Join the community; Designing a plugin experience; User Interface; Branding; Designing for Photoshop; UX patterns; Messaging; Onboarding.

## raw_githubusercontent_com_AdobeDocs_uxp_photoshop_main_src_pages_community_index_md — Join the community

Connect with the global Creative Cloud Developers community building plugins and integrations that support creative work.

Ways to participate include:

- Visit the [Creative Cloud Developer Forums](https://forums.creativeclouddeveloper.com/) for developer discussion, questions, and peer help.
- Send issues and pull requests in repositories such as:
  - [UXP for Photoshop documentation repo on GitHub](https://github.com/AdobeDocs/uxp-photoshop)
  - [UXP for Photoshop sample code repo on GitHub](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples)
- Track developer-focused ecosystem events on [Eventbrite](https://www.eventbrite.com/o/adobe-creative-cloud-platform-amp-ecosystem-team-32572092711).
- Sign up for the [Adobe Creative Cloud Developer Newsletter](https://www.adobe.com/subscription/ccdevnewsletter.html).
- Join the [Adobe Creative Cloud Platform and Ecosystem LinkedIn group](https://www.linkedin.com/groups/12425244/).

## Designing a plugin experience

Use these guidelines to shape a strong user experience for a plugin. While building, choose UX patterns and UI components around the user's workflow and the action the plugin performs.

Plugins may affect the user's experience at several depths; for example, some use cases render no interface, while others include actions that require one.

### Designing a plugin

**Learn about the interface types available to plugins.**

| **Plugins panel** | **Plugins dialog** |
| --- | --- |
| **non-blocking UI:** Choose this interface when plugin use should still leave the canvas available. | **blocking UI:** Choose this interface when a plugin action should prevent canvas-object edits or selection changes. |

[Figure: Examples showing the plugins panel interface and the plugins dialog interface](https://raw.githubusercontent.com/ux-images/panel-dialog-examples.png)

### UX patterns

UX patterns identify requirements, recommended practices, and communication approaches for Adobe plugin contexts.

[View UX patterns](https://raw.githubusercontent.com/design/ux-patterns/index.md)

[Designing for photoshop](https://raw.githubusercontent.com/design/ux-patterns/designingforphotoshop.md)

### User interface

For building plugin interfaces, the user interface section covers available UXP Spectrum components.

[View user interface components](https://raw.githubusercontent.com/design/user-interface/index.md)

## User Interface

For plugin UI construction, the user interface section explains the available UXP Spectrum components. For plugin UX and recommended practices, see [UX patterns](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md).

Use the [Adobe Spectrum website](https://spectrum.adobe.com) as a reference for:

- Styling
- Behaviors
- Usage guidelines
- Download UI files and more

### UXP Spectrum Components

With Spectrum UXP, plugin UI can keep a consistent component set across XD and Photoshop while adapting to themes. The available UXP components and Spectrum design guidelines are listed below.

**[Action button](https://spectrum.adobe.com/page/action-button/)** -
Use action buttons for low-emphasis workflow controls that perform an action or mark a selection. They fit related task options where the button should stay visually quiet.

**[Button](https://spectrum.adobe.com/page/button/)** -
Use buttons for actions or page navigation. Spectrum provides several styles for different needs, including moments where the interface should draw attention to the next step in a flow.

**[Checkbox](https://spectrum.adobe.com/page/checkbox/)** -
Use checkboxes when several entries in a list can be chosen, or when one standalone item needs to be marked as selected.

**[Divider](https://spectrum.adobe.com/page/divider/)** -
Dividers make nearby content easier to scan by separating related groups. They also help set rhythm and hierarchy in a layout.

**[Link](https://spectrum.adobe.com/page/link/)** -
Links move users to another location; they can sit inside paragraph text or appear on their own.

**[Picker](https://spectrum.adobe.com/page/picker/)** -
Sometimes called "dropdowns" or "selects", pickers present a compact choice list when space is limited. Their options may change with the surrounding context.

**[Radio Button](https://spectrum.adobe.com/page/radio-button/)** -
Radio buttons present one choice from mutually exclusive options, with every possible choice visible up front for comparison.

**[Slider](https://spectrum.adobe.com/page/slider/)** -
Sliders are for quickly choosing a value inside a range whose upper and lower bounds do not change.

**[Text Field](https://spectrum.adobe.com/page/text-field/)** -
Text fields are keyboard-entry boxes for custom text. Extra field options can communicate the input requirements.

**[Tooltip](https://spectrum.adobe.com/page/tooltip/)** -
Tooltips provide contextual help or information for a component while it is hovered or focused.

**[Typography](https://spectrum.adobe.com/page/heading/)** -
Heading, Body, and Detail are the Typography components.

## Branding

Use branding throughout the plugin experience so users can recognize that they are working inside your plugin. Examples include:

- Onboarding and branding
- Customized plugin UI

### Onboarding and branding

### Best practices

For first-run moments such as onboarding or login, show the plugin logo so the user can recognize the plugin later.

[Figure: Panel branding example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/branding-1.png)

[Figure: modal branding example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/branding-2.png)

### Customized plugin UI

### Best practices

Brand colors in the UI help make the plugin interface distinct from the surrounding Photoshop experience.

[Figure: Panel customization example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/branding-3.png)

[Figure: Modal customization example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/branding-4.png)

## Designing for Photoshop

This area describes plugin-facing Photoshop interfaces, including specs, usage guidance for choosing each interface, and the high-level UX patterns Photoshop provides.

- Overview
- Plugins Panel (non-blocking UI)
- Plugins Dialog (blocking UI)
- Themes and Icons
- UX Best Practices

### Overview

Photoshop plugins can use two UI surfaces: blocking UI (Dialog UI) and non-blocking UI (Panel UI). In Photoshop, the Plugin Launch Pad displays installed plugins and lets users open one directly from their workspace.

[Figure: Photoshop Plugin interfaces](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pluginsinphotoshop.png)

### Plugins Panel (non-blocking UI)

Use this guidance for a Plugins Panel - Non-Blocking UI in Photoshop. When canvas access remains necessary, a plugin panel is usually the right surface because it stays tied to the user's selection and still permits canvas edits while the plugin is open.

[Figure: Photoshop Plugin interfaces](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/photoshop-panel.png)

**Panel UI - Specs**

MacOS example

[Figure: Photoshop Plugin Panel Specs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/photoshoppanelspecs.png)

Example

[Figure: Photoshop Plugin Panel Example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pspluginexample.png)

**Plugin Launch Pad**

In the Plugin Launch Pad, Photoshop shows the plugin icon and name alongside the user's other installed plugins. When a plugin exposes a submenu of commands, write submenu labels that explain what each command does.

[Figure: Photoshop Plugin Lauch Pad](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pspluginlaunchpad.png)

### Plugins Dialog (blocking UI)

Use this guidance for a Plugins Dialog - Blocking UI in Photoshop. Choose this surface when a plugin runs an action and the user does not need to edit or change object selections on the canvas.

For additional “Dialog” best-practice guidance, see [Spectrum guidelines](https://spectrum.adobe.com/page/dialog)

[Figure: Plugin Dialog Specs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/plugindialogspecs.png)

**Panel UI - Specs**

Example

[Figure: Plugin Dialog example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/plugindialogexample.png)

### Themes and Icons

Photoshop offers multiple interface themes. While designing plugin UI, support those theme choices; the [UXP User Interface Spectrum Components](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md) also handle themes.

**Panel UI - Specs**

Lightest and Light Themes

[Figure: Photoshop light and lightest themes](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/light-themes.png)

Dark and Darkest Themes

[Figure: Photoshop Dark and Darkest themes](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/dark-themes.png)

**Photoshop Icon Guidelines**

Within the Photoshop application frame, this icon appears when a plugin is docked or undocked. For a Photoshop panel-plugin icon, account for theme compatibility, color treatment, background, padding, and size.

[Figure: Photoshop Plugin icon example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psiconexample.png)
[Figure: Photoshop Plugin icon specs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psiconspecs.png)

Because Photoshop is themeable, verify adequate contrast across the Photoshop themes, or provide at least light and dark icon versions. These examples show monochromatic icons for light and dark theme support. Button states include unselected, hover, and selected.

[Figure: Photoshop Plugin icon guidelines](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psiconguidelines.png)
[Figure: Photoshop Plugin icon Do's and Don'ts](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psicondosdonts.png)

### UX Best Practices

**Avoid using minimum fixed widths larger than 240px**

Because Photoshop plugin panels can dock inside other panels, minimum fixed widths above 240 px may disrupt a user's workspace. Let users resize both width and height to improve the experience of working with the plugin in Photoshop.

[Figure: Photoshop large fixed widths Do](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pslargewidtdo.png)
[Figure: Photoshop large fixed widths Don't](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pslargewidthdont.png)

**Placing image object into document**

Whenever possible, steer users toward non-destructive workflows. If a plugin adds a new image layer, the recommended approach is to place that layer as an embedded Smart Object, keeping original pixels protected and available after edits.

[Figure: Photoshop placing an object Do](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psplaceobjectdo.png)
[Figure: Photoshop placing an object Don't](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psplaceobjectdont.png)

**Contextual Actions and Photoshop Tools**

If a plugin workflow requires the user to select a tool before continuing, show contextual feedback in the plugin UI or provide a way to open the Photoshop tool from that UI. For a color-change workflow, for example, include an action that opens Photoshop Color Picker from inside the plugin.

[Figure: Photoshop contextual tool Do](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pscontextualtools-do.png)
[Figure: Photoshop contextual tool Don't](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/pscontextualtools-dont.png)

## UX patterns

Use UX patterns to capture requirements and best practices that keep a plugin aligned with Adobe UX conventions.

- [Designing for Photoshop](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md)
- [Branding](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md)
- [Messaging](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md)
- [Onboarding](uxp-raw-githubusercontent-com-adobedocs-uxp-photoshop-main-src-pages-community-index-md-join-the-community.md)

### UX requirements

UX requirements identify the core patterns every plugin must follow for Adobe approval.

[Figure: An example showing the UX requirements for a plugin dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/plugindialogspecs.png)

### UX best practices

Best practices cover plugin usability, behavior, user feedback, privacy, and interface guidance.
Recommendations are illustrated with “do” and “don’t” examples.

[Figure: An example showing the UX best practices for icons in Photoshop](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/psicondosdonts.png)

## Messaging

These guidelines explain when and how plugin UI should give users feedback during interaction.

- Alerts
- Success
- Output
- Permission dialogs
- Loaders and Progress Indicators
- Examples

Feedback can appear as alert and success messaging, permission dialogs, loaders, or progress bars that show background work is underway.

Use this guide when deciding where plugin messages should render:

[Figure: This shows the different ways you can provide feedback to the user through messaging](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/messaging-1.png)

To zoom in, open this image in a new browser tab.

### Alerts

**Use case**  
Show alert messaging when the plugin cannot complete its intended task; keep dialogs persistent until the user dismisses them.

[Figure: This shows the alert dialog requirements](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/alert-requirements.png)

### UX requirements

**Header**  
Use a clear header that names the error.

**Message**  
State the error and give a clear action the user can take. Avoid language that blames either the user or the application.

**Dialog buttons**  
Provide at least one modal dismissal button so the user can exit the modal.

[Figure: This shows the alert dialog best practices](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/alert-recommendations.png)

### Best practices

**Warning icon**  
A warning icon beside the header can help signal critical error information.

**Help**  
When the plugin has a help page, consider linking it from the error modal dialog.

**Visual/tutorials**  
Add an image/GIF example to the dialog when it can make the actionable solution easier to understand.

**Messaging**  
Write alert-message language in terms the user can readily understand.

### Success

**Use case**  
Show success messaging when a plugin finishes a task successfully without producing a visible canvas result.

[Figure: This shows the alert success dialog example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/success-requirements.png)

### UX requirements

**Header**  
Use a clear dialog header.

**Message**  
Describe the completed plugin action when the result is not obvious to the user.

**Dialog buttons**  
Provide at least one modal dismissal button so the user can close or dismiss the modal.

### Output

**Use case**  
Whenever plugin-generated output is required for the user to finish a workflow, present that information in UI the user can see.

[Figure: This shows the plugin output example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/plugin-output.png)

### UX requirements

**Plugin output**  
For these cases, plugin output may appear in the interface, be copied onto the clipboard, be placed on the document, or be generated as a file.

**Example:**  
Copied onto the clipboard - the plugin can place copy on the clipboard and show instructions in the interface.

**Don’t**  
Do not make users open the developer console to complete an action.

### Permission dialogs

**Use case**  
Show permission dialogs before destructive behavior or modification.

[Figure: This shows a permission dialog example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/permission-dialog-example.png)

### UX requirements

**Header**  
Use a clear dialog header.

**Message**  
Describe the destructive action or modification, then request the user’s permission.

**Dialog buttons**  
Provide a modal dismissal button so the user can cancel or close the modal, and include a negative button (red) to emphasize that action.

**Key Commands**  
With “Cancel” in focus, Esc key or Enter key closes the dialog.

### Loaders and Progress Indicators

Use the plugin interface to signal that background work is in progress.

[Figure: This shows a progress bar example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/progress-bar-example.png)

### Best practices

**Progress bar**  
Progress bars visualize system-operation progress, such as downloading, uploading, or processing. The indicator may be determinate or indeterminate.

[Spectrum Progress bar guidelines](https://spectrum.adobe.com/page/progress-bar/)

**Progress circle**  
Progress circles visualize progress for operations such as downloading, uploading, or processing. The indicator may be determinate or indeterminate.

[Spectrum Progress circle guidelines](https://spectrum.adobe.com/page/progress-bar/)

### Examples

[Figure: This shows an alert example for an operation that failed to complete](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/error-alert-example.png)

**Operation failed to complete**  
Error dialog - when a plugin cannot finish an operation, show an error dialog that tells the user the operation did not complete and explains why.

[Figure: This shows an alert example for a network connectivity issue](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/alert-information-example-2.png)

**Network connectivity issue**  
Information dialog - when internet access is unavailable for a required action, use an information modal dialog to communicate that condition.

[Figure: This shows a message example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/messaging-example.png)

**Unable to share**  
“An error occurred while sharing your project. Please verify the email. address and try again”.

**Network connectivity**  
“Please connect to WiFi to sync your tasks to your product management tool”.

### Panel UI messaging

[Figure: This shows a panel messaging example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/panel-messaging-example.png)

## Onboarding

Use these recommendations when shaping the first-run guidance that helps people learn your plugin. Showing concrete examples of plugin use gives users a better path to the plugin's value, especially during their initial interaction.

[Figure: Onboarding modal example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/design/ux-images/onboarding-bp.png)

### Best practices

### **Content**

Include examples or tutorials for using your plugin; visuals or gifs can provide that walkthrough.

**A. Plugin interaction**  
Call attention to the important interactions so users can successfully operate the plugin.

**B. Login experience**  
When plugin use depends on logging in or creating an account for a service, walk users through the sign-up flow.

**C. Authentication**  
For plugins that require an API key or other account details, explain plainly how users can obtain that information, or give them a link.

**D. Help**  
Put an external help link or help documentation in the plugin's main navigation, or inside error modal dialogs, so users have a troubleshooting path.
