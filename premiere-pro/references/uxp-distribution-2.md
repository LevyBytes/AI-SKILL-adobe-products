# Overview, Package, Review Guidelines

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Distribution Overview; Package a UXP plugin; Review & Guidelines.

## Distribution Overview

Your UXP plugin is built; at this point, it can be released publicly or shared with your team.

The UXP ecosystem offers several distribution choices. The most common are:

1. **Creative Cloud Marketplace** (recommended for broad reach)

   - Requires Adobe **review and approval** before publication.
   - After publication, the plugin is **discoverable** directly in the Creative Cloud Desktop application.
   - Marketplace plugins can be **free or paid**.

2. **Direct Distribution** (best for Enterprise use or independent marketplaces)
   - Sharing independently does not require **review or approval**.
   - You can **host your plugin** on your own website, GitHub, a third-party store, or similar platforms.

Every plugin needs packaging regardless of channel. UXP uses `.ccx` as its package format, giving supported host applications a smooth installation path through the Creative Cloud desktop.

The packaging and distribution flow is simple; the sections below explain the details.

## Package a UXP plugin

UXP plugin packages use `.ccx` files, which can be shared privately or sent to the Creative Cloud Marketplace for publication.

### The CCX file format

A `.ccx` file is a regular ZIP file internally. Unless special requirements apply, avoid creating it by hand; use the UXP Developer Tool instead, as covered later in this guide.

### Differences with CEP Extensions

CEP extensions relied on `.zxp` files; UXP changes packaging and distribution in several ways. The key difference is that adding a **Digital Signature and Timestamp** to the package is no longer needed.

The Creative Cloud Desktop application installs the new `.ccx` format directly. This has been more reliable than the `ExManCmd` utility, makes installation easier for end users, and reduces errors.

UXP also no longer supports `MXI` files for advanced packaging configuration.

### Mind your Plugin's ID

Confirm the plugin ID before creating a distribution package. In `manifest.json`, include a valid string property named `id`; installers use that value to tell this plugin apart from every other plugin.

For a plugin you intend to **publish to the Adobe Creative Cloud Marketplace**, create the UXP plugin listing in the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin-id#starting-from-adobe-developer-distribution) and copy the portal-provided ID into `manifest.json`. Validation compares the portal record with the manifest, so mismatched IDs prevent the plugin from passing review.

For additional detail on retrieving the ID string from the Developer Distribution portal, see [this guide](uxp-distribution.md).

[[Figure: Developer Distribution - plugin ID](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-new-listing-created.png)](../listing/index.md#2-create-a-new-listing)

### Multi-channel distribution

When any distribution plan combines other marketplaces or direct delivery with the Creative Cloud Marketplace, assign **two different IDs**: reserve one ID for the Creative Cloud Marketplace and use another for all non-Marketplace channels.

Paid plugins are especially affected. If someone installs a third-party purchase, Creative Cloud Desktop checks the plugin's ID against that person's Adobe ID. An ID that belongs only to the Marketplace listing causes the install to fail because Adobe cannot confirm the third-party purchase entitlement.

- ❌ **Reusing one ID across all channels** (including the Creative Cloud Marketplace):

  1. A user buys a UXP plugin from a third-party marketplace.
  2. Creative Cloud Desktop (CCD) manages installation and looks for the plugin in the Creative Cloud Marketplace.
  3. When Adobe's Marketplace includes the plugin, CCD checks whether the current user, identified by Adobe ID, bought it there.
  4. Because the transaction did not occur in Adobe's Marketplace, the user has no Marketplace entitlement and CCD refuses the install.

- ✅ **Separate ID reserved for the Creative Cloud Marketplace**:
  1.  A user buys a UXP plugin from a third-party marketplace.
  2.  Creative Cloud Desktop (CCD) manages installation and checks Marketplace availability for that plugin.
  3.  Because the plugin is not listed in the Creative Cloud Marketplace under that ID, no user entitlement check runs and installation can complete.

### Package with the UXP Developer Tool

Launch the UXP Developer Tool and verify that the plugin to be packaged appears in the workspace. It can remain unloaded in the host application.

Use the **•••** icon to open the flyout menu, then choose **Package**.

[Figure: Package with the UXP Developer Tool](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-package-menu.png)

The tool then displays a dialog for choosing the destination folder for the package.

[Figure: Destination folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-destination-folder.png)

When packaging succeeds, the created file uses the plugin ID as its name, for example `Test-xjluvc_premierepro.ccx`.

[Figure: Package created](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-success.png)

A green toast confirms a successful operation. If packaging fails, select Details on the red toast, open the Logs, and review the error message.

[Figure: Package error](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-error.png)

Run an installation test before distributing the package so you know the installer behaves correctly.

### Packaging Hybrid Plugins

[Hybrid plugins](uxp-plugins.md) add native C++ libraries (`.uxpaddon` files) alongside the usual JavaScript, HTML, and CSS assets. Check these items when packaging a Hybrid plugin:

1. **Directory structure**: put the `.uxpaddon` binaries into the required platform and architecture folders inside the plugin bundle:

```txt
my-hybrid-plugin/
├── manifest.json
├── index.html
├── index.js
└── addons/
    ├── mac/
    │   ├── arm64/
    │   │   └── sample-uxp-addon.uxpaddon
    │   └── x64/
    │       └── sample-uxp-addon.uxpaddon
    └── win/
        └── x64/
            └── sample-uxp-addon.uxpaddon
```

2. **All architectures**: ship binaries for macOS arm64 (Apple Silicon), macOS x64 (Intel), and Windows x64. A Hybrid plugin can be packaged and installed with fewer architectures, but unsupported platforms simply cannot load it. The **Creative Cloud Marketplace requires all three**, and the Developer Distribution portal rejects a `.ccx` that omits any required architecture.
3. **Code signing (macOS)**: for macOS, use a valid Apple Developer ID certificate to sign and notarize each `.uxpaddon` executable. Test or self-signed certificates are rejected, and the certificate needs at least one year of remaining validity.
4. **Admin credentials**: because Hybrid plugins contain native code, installation and update flows ask users for OS administrator credentials.

With an incorrect directory layout, UDT reports _"Plugin Manifest Validation Failed"_ and the plugin does not load.

### Host Applications

A UXP plugin `.ccx` installer may target only a single host application. In `manifest.json`, the [`host`](uxp-manifest.md) property therefore has to be one [`HostDefinition`](uxp-manifest.md) object.

**Only during development**, you may make `host` an array of `HostDefinition` objects so the same plugin can load into more than one application at once.

```json
// host as one HostDefinition object
// ✅ can be used in production
"host": {
  "app": "premierepro", "minVersion": "25.6.0"
}

// host as an array of HostDefinition objects
// ⚠️ only for development! ⚠️
"host": [
  { "app": "premierepro", "minVersion": "25.6.0" },
  { "app": "ps", "minVersion": "25.0.0" }
]
```

When `host` contains an array, the **UXP Developer Tool automatically packages the plugin for the first host application** by converting that array to a single `HostDefinition` object internally.

## Review & Guidelines

To offer a plugin through the Adobe Creative Cloud Marketplace, submit it for review and follow the required guidelines.

### Overview

Creative Cloud Marketplace submissions are always reviewed so Adobe can confirm that each product, free or paid, satisfies its quality requirements.

Adobe's extensibility review team audits listings before approval. To avoid slowing the queue or triggering avoidable follow-up, make sure the plugin meets every stated requirement before submission.

Review is targeted for completion within **10 business days** after submission, after which Adobe tells you whether the plugin was accepted or needs changes.

### Review Criteria

The review team evaluates a submission across several areas, including:

- **Branding and Trademark Compliance**: correct handling of Adobe trademarks, brand assets, and naming rules
- **Listing Quality**: clear copy, working links, an appropriate subtitle, and an available support channel
- **Functional Testing**: UI behavior, buttons, inputs, error feedback, and keyboard shortcuts
- **Platform Compatibility**: architecture coverage, code signing, and installation behavior
- **External Services Integration**: sign-in and sign-out flows, reviewer credentials, and service connectivity
- **User Experience**: responsive layouts, loading states, scrolling, and accessibility
- **Performance**: CPU/RAM use and compatibility with host applications
- **Localization**: multi-locale behavior and keyboard compatibility
- **Content Safety**: compliance with policies for harmful or unacceptable content
- **Transparency**: privacy policies, terms of service, and third-party dependencies
- **Code Quality**: bugs, harmful code, and exposed developer tooling

### Submission Checklist

Complete this checklist before submission. For questions, contact [ccintrev@adobe.com](mailto:ccintrev@adobe.com).

### 1. Assets

Include every required asset in the plugin submission and use the correct names from the [Create Listing guide](uxp-distribution.md), including:

- **Files**: required plugin files plus dependencies
- **Icons**: custom icons for each theme, resolution, and display scale, without placeholders or defaults
- **Screenshots**: high-quality images that accurately show what the plugin does
- **Release notes**: clear notes describing changes and new features
- **Testing information**: complete reviewer instructions and scenarios for validation
- **Test credentials**: provide login credentials, license keys, or test accounts so the review team can exercise all functionality, including paid or premium features

Visual assets also need to:

- Exclude unauthorized Adobe logos or trademarks
- Render properly in both light and dark themes
- Match the required dimensions listed in Adobe documentation
- Use a distinct icon for each panel when the plugin includes multiple panels

### 2. Metadata

Supply accurate current information, including:

- **Plugin name**: a unique name, with ASCII-only characters in the manifest
- **Subtitle**: a relevant subtitle that plainly states what the plugin does
- **Description**: accurate, clear text localized where needed, without vague or misleading claims
- **Version**: current version number
- **Author**: developer name or company name
- **Contact information**: a working email address or support route, such as email, GitHub, or a website contact form
- **Website and support links**: successful-opening links that include valid contact information
- **Privacy policy and terms of service**: accessible, valid URLs
- **Third-party dependencies**: disclose any outside application or service needed by the plugin
- **Pricing information**: state clearly whether the plugin is paid, trial-based, or offers a free tier
- **Trader information**: add this to the publisher profile when distributing plugins in the EU region. More information is available in the [EU Digital Services Act Trader Requirements](https://developer.adobe.com/compliance/).

Do not include competitor names, for example Figma or Canva, in the listing or related plugin materials.

### 3. Legal

Meet every applicable legal and licensing requirement, including:

- Attribution
- Copyright
- Intellectual property rights

### 4. Branding Guidelines

Read the [Adobe Branding Guidelines](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/branding-guidelines) carefully and confirm that the plugin plus associated advertising, websites, and other materials follow Adobe's branding standards.

Among other topics, those guidelines cover proper use of:

- Adobe logos plus other trademarks
- Adobe product names (avoid names such as "Photoshop Enhancer" unless written permission has been granted)
- Approved badges and icons
- Social media presence
- Public profile and website content

Treat branding compliance as a required part of the submission.

A branding violation can immediately reject the submission. To request use of Adobe brand assets, complete the Trademark Request Form and submit it by email to [permissions2@adobe.com](mailto:permissions2@adobe.com) and [brand@adobe.com](mailto:brand@adobe.com). Processing can take up to 2 weeks. Questions about the branding guidelines should go to [CCDeveloperMarketing@adobe.com](mailto:CCDeveloperMarketing@adobe.com).

### 5. Platform Compatibility

Verify that the plugin works on every supported platform and architecture:

- **Multi-architecture support**: [UXP Hybrid plugins](uxp-plugins.md) sent to the Marketplace need binaries for macOS arm64, macOS x64, and Windows x64; submissions that omit an architecture are rejected
- **Code signing**: macOS `.uxpaddon` executables in Hybrid plugins need code signing and notarization with a valid Apple Developer ID certificate with minimum 1 year validity. For details, see the [Hybrid Plugins packaging guide](uxp-distribution-2.md).
- **Installation**: avoid OS-level warning prompts during install, and verify that installation and runtime use do not crash
- **Host application compatibility**: confirm that the plugin neither crashes nor negatively affects host applications

### 6. Functional Requirements

The plugin has to satisfy these functional standards:

- **Launch behavior**: the plugin opens successfully from the Plugins menu, Plugins panel, or any other supported entry point
- **User interface**: every screen shows meaningful content; empty screens, blank panels, and clipped modal dialogs are not acceptable
- **Loading indicators**: operations or content loads that take time show progress feedback
- **Buttons and controls**: interactive elements are visible, do not overlap, and perform their intended actions
- **Input handling**: text fields accept English characters, special characters, numbers, and localized keyboard input
- **Error handling and feedback**: failed actions, unsupported selections, or lost internet connections produce clear guidance, and the plugin recovers gracefully after reconnection
- **Keyboard shortcuts**: shortcuts should function normally; exceptions apply where an app does not support them, including InDesign v18.5 or Premiere Pro v25.6
- **Scrolling behavior**: scrollbars appear when required, and users can access content without resizing the panel
- **Responsive layout**: using the plugin should not depend on manually resizing the panel
- **No developer tools**: production builds must not expose debug consoles or developer tools

### 7. External Services Integration

For plugins that connect to external services, confirm the following:

- **Test credentials**: in the "Notes to Reviewer" section, include valid test login credentials or license keys
- **Login and signup flow**: users can sign up or log in; browser-based login handles abandonment cleanly and provides a link back to your website
- **Logout functionality**: the plugin provides a way for users to log out from inside the plugin
- **Service connectivity**: network failures are handled gracefully with appropriate user feedback

### 8. Companion Apps

When a companion application is part of the workflow:

- The companion app installs successfully on every supported operating system
- The plugin communicates successfully with that companion app
- CPU or RAM usage is monitored for abnormal levels
- The plugin does not launch external applications; browser links are the only allowed exception

### 9. Localization

For plugins with multiple language support:

- Test plugin functionality in all supported locales, using Mac only for review purposes
- Check each supported language for string truncation
- Provide support for localized keyboard layouts and input methods

### 10. Performance and Resource Usage

The plugin needs responsible resource behavior:

- Monitor and optimize CPU and RAM consumption
- Prevent performance degradation in host applications
- Avoid memory leaks and excessive background processing

### Common Rejections Causes

This table summarizes common causes of plugin submission rejection and the actions typically used to address them.

| Cause | Resolution |
| --- | --- |
| **Violation of Adobe Branding Guidelines**: plugin assets, docs, or marketing use Adobe marks or design elements outside the official branding rules. | Bring every asset into alignment with the Adobe Branding Guidelines. Remove or revise unapproved logos, icons, and references before submitting again. |
| **Blank User Interface on Launch**: the plugin starts without usable visible elements because initialization fails or required assets are absent. | Confirm that UI components, scripts, and dependencies load as intended. Re-test in a clean install of the host application. |
| **Use of default/placeholder Icons**: default icons are present, or variants are missing for required themes and sizes. | Supply custom icons for every required theme, resolution, and display scale. |
| **Non-functional buttons or silent failures**: buttons, menus, or similar interactive controls do not run actions or provide feedback, leaving flows broken or unclear. | Make each interactive component run the expected action, show feedback, and display progress indicators. Add proper error handling for failed operations. |
| **AI-generated content contains inappropriate material**: plugin AI features produce or show explicit, offensive, or otherwise policy-violating output. | Use strong content filtering or moderation so output complies with Adobe content safety policies. |
| **Missing test data or credentials**: reviewers cannot reach features because required datasets, demo accounts, or credentials were not supplied. | Add valid test data and credentials to the submission package, plus any access or setup instructions the review needs. |
| **Clipped or invisible modal dialogs**: modal dialogs appear partly off-screen or otherwise block interaction. | Check modal dialogs across panel sizes and keep them fully visible and properly centered. |
| **Missing loading indicators**: long operations make the plugin appear stuck because users receive no feedback. | Add spinners, progress bars, or status messages for operations lasting more than 1-2 seconds. |
| **Poor input field handling**: text fields fail for special characters, numbers, or localized keyboard input. | Exercise fields with varied character sets, including special characters and non-English keyboards. Add appropriate validation and error messages. |
| **Inadequate error messaging**: failures are silent or produce generic errors that do not explain how to resolve the issue. | Provide specific actionable messages that direct users toward recovery. Handle cases such as network failures gracefully. |
| **Code signing issues**: macOS plugins lack proper code signing or notarization, causing security warnings. | Use a valid Developer ID certificate to sign the plugins, then notarize them through Apple. The certificate must have at least 1 year of validity remaining. |
| **Multi-architecture failures**: [UXP Hybrid plugins](uxp-plugins.md) crash or do not run on specific architectures (macOS arm64, macOS x64, Windows x64). | Marketplace submission requires all three architectures. Build individual binaries for each architecture after testing each platform. |
| **Exposed developer tools**: debug consoles, developer menus, or test-only features remain reachable in production. | Strip development and debugging interfaces before submission. Confirm production builds exclude dev dependencies. |
| **Poor responsive design**: controls or content require manual resizing, or scrollbars fail to appear when needed. | Build responsive layouts that adjust to panel sizes. Ensure scrollbars appear automatically whenever content extends beyond the panel viewport. |
| **Companion app integration issues**: communication with the companion application fails, or the companion app consumes excessive resources. | Validate the companion app path end to end. Reduce resource use and keep plugin-to-companion communication reliable. |
| **Localization problems**: non-English strings truncate, or localized keyboards cause plugin failures. | Test every supported locale, make room for longer UI text, and support international keyboard layouts. |
| **Invalid or broken links**: website, support, privacy policy, or terms of service URLs are broken or open the wrong page. | Check that all links open successfully and send users to the correct relevant content. |
| **Missing third-party dependency disclosure**: the listing does not tell users that the plugin needs an external application. | State third-party application requirements clearly in the plugin description and documentation. |
| **Inadequate support channel**: no contact method exists, or the provided email/link is invalid. | Provide a working support channel, such as email, GitHub issues, or a website contact form. |

### Content Requirements

Plugins are required to comply with [Adobe's General Terms of Use](https://www.adobe.com/legal/terms.html) and the Content Policies in the [Adobe Transparency Center](https://www.adobe.com/trust/transparency.html). For user safety and acceptable-use reasons, plugins must not:

- Include or create illegal content, including CSAM or material encouraging illegal drug use.
- Include or create adult content, including sexual content, consensual or non-consensual nudity, gore, graphic gore or violence, or strong language.
- Include or create hate speech, or speech that encourages violence, bullying, or cruel treatment of anyone.
- Create content that promotes, automates, or enables highly regulated activities, including financial advice, medical advice or diagnosis, legal advice or documents, or contracts.
- Include or create malicious code, including viruses, malware, or spyware.
- Take part in misinformation/disinformation campaigns.
- Infringe intellectual property rights, including copyright, belonging to other people or companies.
- Automatically carry out AI-determined destructive or irreversible actions without explicit user consent.

### Generative AI Guidelines

Generative-AI plugins that create content need to comply with [Adobe's General Terms of Use](https://www.adobe.com/legal/terms.html), Developer Terms of Use, and the Content Policies in the [Adobe Transparency Center](https://www.adobe.com/trust/transparency.html). In particular:

- The plugin must not create illegal, adult, or hateful content.
- The plugin must use filtering technologies that block prohibited content generation.
- Thorough testing is required to confirm that illegal content is not generated.
- The plugin must not automate regulated domains, including financial, medical, or legal advice, unless appropriate disclaimers and user consent are in place.
- The plugin must not generate malicious code or join misinformation campaigns.
- The plugin must not violate another person or company's intellectual property rights.
- The plugin must not perform destructive actions unless the user explicitly consents.

Before approval for publication, a plugin that uses generative AI may require certification that you have read these guidelines and agree to follow them. If the plugin is found generating illegal content, Adobe will remove it. If you think removal or restriction was mistaken, you may appeal through the [Adobe Transparency Center](https://www.adobe.com/trust/transparency.html).
