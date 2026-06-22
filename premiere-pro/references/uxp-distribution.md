# Adobe Marketplace, Enterprise Distribution, Independent Distribution, Install ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: The Adobe Creative Cloud Marketplace; Enterprise Distribution; Distributing UXP Plugins Independently; Install a UXP plugin — Important Note!; Create a Listing.

## The Adobe Creative Cloud Marketplace

Adobe Creative Cloud Marketplace provides a straightforward path for distributing and monetizing a plugin.

### Overview

Although UXP plugins can be shared independently, Adobe's official Creative Cloud Marketplace gives plugin authors a way to reach millions of users directly.

[Figure: Adobe Creative Cloud Marketplace](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/adobe-marketplace/img/marketplace-ccd.png)

### Features

- **Large audience** across Adobe Creative Cloud users.
- **Highly curated** through the Extensibility Review team.
- Users who acquire the plugin keep **access to the latest version** through their Creative Cloud account in the Creative Cloud Desktop application.
- **Integrated first-class e-commerce platform** for selling a plugin through [FastSpring](https://fastspring.com/).
  - For the EU region, serves as a **Merchant of Records** (MoR), handling VAT collection and remittance on your behalf.
  - Supports free or paid **perpetual products and subscriptions**.
  - Charges a **10% flat fee** on all transactions.
  - Pays sales out as **Royalties** on software purchases.
- **Non-exclusive distribution channel**; you may also sell the plugin through other channels and marketplaces. For more detail, see [this page](uxp-distribution-2.md).

To receive these benefits, submit the plugin for [review and approval](uxp-distribution-2.md), because marketplace listings must satisfy Adobe's quality standards. After approval, the plugin appears in the Creative Cloud Marketplace and becomes available to users.

Learn more about creating a [listing](uxp-distribution.md) and about the [review process](uxp-distribution-2.md).

## Enterprise Distribution

For Enterprise or Team administrators, organization-wide UXP plugin rollout can use either of these routes:

- [Adobe Admin Console](https://adminconsole.adobe.com/)
- [Unified Plugin Installer Agent (UPIA) tool](https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-using-upia-tool.html)

### Overview

UXP plugins can be deployed at scale in two main ways:

1. **Admin Console route with Creative Cloud Marketplace integration**  
   Use the [Admin Console](https://adminconsole.adobe.com/) and [Add plugins](https://helpx.adobe.com/enterprise/using/manage-extensions.html#named-user-licenses) to put selected plugins into deployment packages or offer self-service installation.

2. **Managed-package route for plugin installers (`.ccx` files)**  
   Place plugin installers inside [managed packages](https://helpx.adobe.com/enterprise/using/customize-creative-cloud-app.html#customize). For this path, use [Manually place plugin files](https://helpx.adobe.com/enterprise/using/manage-extensions.html#others) to put plugin files in package folders before shipping them with Creative Cloud apps.

### 1. Deploy plugins through the Admin Console

For packages assembled in the Admin Console with _Named User Licensing_, plugin handling can be set during package setup:

- **Select plugins from the Adobe Marketplace** while you build the package.  
  Deployment installs those selected plugins automatically.
- **Control user permissions**:
  - Let users install Marketplace plugins themselves through the Creative Cloud desktop app.
  - Limit installation capability so IT retains plugin deployment control.
- **Automatic updates**:  
  Unless policy blocks them, Marketplace plugin updates are handled through the Creative Cloud desktop app.

Choose this path when the required plugins are in the Marketplace and you want centralized rules to drive rollout. For details, use [Admin Console manage-extensions guidance](https://helpx.adobe.com/enterprise/using/manage-extensions.html#named-user-licenses).

### 2. Bundle `.ccx` plugins in managed packages

For plugins that do not appear in the Marketplace, such as builds distributed only inside an organization:

- During package creation, **enable the "create a folder for extensions" option** and [include the UPIA tool](https://helpx.adobe.com/enterprise/using/manage-extensions.html#others).
- Package creation adds a folder inside the package layout; put the plugin's `.ccx` files there.
- At deployment time, those bundled plugins are installed automatically alongside the Creative Cloud apps.

For more background, use [Admin Console packaging guidance](https://helpx.adobe.com/enterprise/using/manage-extensions.html#others) and the [UPIA tool documentation](https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-using-upia-tool.html).

### Important Considerations

- **App dependency**: A plugin is installed only when its matching host app (e.g., Premiere) is part of the package or is already present.
- **Error handling**: If plugin installation fails, the overall package installation continues.
- **Activation**: When a plugin needs the host app to restart, users must relaunch that app before the plugin is active.
- **Unique IDs**: To distribute the same plugin internally and through the Creative Cloud Marketplace, create a cloned plugin that uses a different ID, as covered in [the packaging ID guidance](uxp-distribution-2.md).
- **UPIA tool**: Administrators can use the command line [for plugin deployment](https://helpx.adobe.com/in/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-using-upia-tool.html) whenever needed.
- **Offline use**: Per [the offline-use FAQ](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/faq#i-work-exclusively-offline-or-in-a-setting-where-access-to-the-internet-is-extremely-limited-can-i-use-scripts-plugins-extensions-or-c-plugins-how-can-i-install-all-of-the-above-without-the-creative-cloud-desktop-app-or-while-offline), teams with limited internet access or Adobe's Feature Restricted Licensing can still install and run UXP plugins from `.ccx` files with the UPIA tool.

## Distributing UXP Plugins Independently

UXP supports independent plugin distribution across several channels without requiring one fixed path.

### Overview

After you have [packaged your plugin](uxp-distribution-2.md), distribute the `.ccx` installer to colleagues or outside users according to your chosen channel.

Clone your plugin with a different ID **only if you also plan to distribute your plugin through the Creative Cloud Marketplace**; the [Packaging guide](uxp-distribution-2.md) explains the ID concern.

Users installing outside the Creative Cloud Marketplace follow [the `.ccx` installer flow](uxp-distribution.md), which includes a trusted-source warning dialog.

## Install a UXP plugin — Important Note!

To connect to a UXP plugin running inside Premiere Pro, first turn on 'Developer Mode' in Premiere Pro's Plugins preferences.

Most UXP plugin installations are performed directly through the Creative Cloud Desktop application.

### Install a UXP plugin — Overview

The installation path changes with the distribution channel: Creative Cloud Marketplace installs, `.ccx` installer files from independent sources, and enterprise deployments each use a slightly different route.

| Distribution Channel | Installation Method |
| --- | --- |
| **Creative Cloud Marketplace** | Install via the [Creative Cloud Desktop application](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/index.md#use-the-creative-cloud-marketplace) |
| **Independent (`.ccx` installer)** | - [Double-click](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/index.md#use-a-ccx-installer-file) on the `.ccx` file |
|  | - Use the [UPIA tool](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/index.md#use-the-upia-tool) |
| **Enterprise** | Use the [Admin Console](uxp-distribution.md) or the [UPIA tool](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/index.md#use-the-upia-tool) |

Enterprise Distribution

For enterprise UXP plugin rollout details, use the dedicated [Enterprise Distribution](uxp-distribution.md) guide.

Premiere lists UXP Plugins in the **Window** > **UXP Plugins** menu.

[Figure: Premiere UXP Plugins menu](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ppro-menu.png)

### Install a UXP plugin — Use the Creative Cloud Marketplace

Open the Creative Cloud Desktop application, switch to the **Plugins** tab, and choose the **Stock & Marketplace** category in the left-hand sidebar to browse UXP plugins. The Plugins sidebar includes curated views for "Featured plugins" and "All plugins".

To install a selected plugin, press **Get** for that plugin.

[Figure: Creative Cloud Marketplace](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-creative-cloud-marketplace.png)

Next, a confirmation dialog lists the permissions the plugin requests, based on what developers put in the [plugin's manifest](uxp-manifest.md); confirm with **OK**.

[Figure: Confirm installation dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-creative-cloud-marketplace-confirm.png)

If installation succeeds, the plugin appears in the "Manage Plugins" section of the Creative Cloud Desktop application and in the host application. In Premiere, look under the **Window** > **UXP Plugins** menu.

[Figure: Success dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-creative-cloud-marketplace-success.png)

### Install a UXP plugin — Use a `.ccx` installer file

If you built a UXP plugin yourself or received one from a third party, install it by **double-clicking on the `.ccx` file**. When the Creative Cloud Desktop application is closed, it opens first. Because the plugin did not come from the Creative Cloud Marketplace, an additional warning dialog appears; choose **Install** to proceed.

[Figure: Installation dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ccx-installation-dialog.png)

Some plugins require access such as Network or Local FileSystem permissions; the needed level is defined in [this section](uxp-manifest.md) of the Manifest reference, and administrative approval may be needed.

[Figure: Installation dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ccx-warning-dialog.png)

After installation finishes, the plugin appears in the Plugins section of the Creative Cloud Desktop application and in the host application. In Premiere, it is available from the **Window** > **UXP Plugins** menu.

[Figure: Installed plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ccx-installed-plugin.png)

When installation fails, use the Details link on the red toast to open the Logs and inspect the error message. The [Troubleshooting](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/index.md#troubleshooting) section has more information.

### Install a UXP plugin — Uninstall a Plugin

In the Creative Cloud Desktop application, open the "Manage Plugins" tab; on a plugin card, right-click the **•••** icon and choose **Uninstall** to remove it. You can also choose **Disable**, which removes the plugin from the host application while leaving it installed in the Creative Cloud Desktop application. Either action shows a confirmation dialog.

[Figure: Uninstall plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-uninstall.png)

The screenshot above distinguishes plugins installed from the Creative Cloud Marketplace on the left from plugins installed from a `.ccx` file on the right, where the orange download icon identifies them.

Uninstalling a Marketplace plugin removes it from the host application but leaves it **visible** in the Manage Plugins tab because you retain permission to reinstall it later. A plugin installed from a `.ccx` file instead **disappears entirely** from the Manage Plugins tab after uninstall.

### Install a UXP plugin — Use the UPIA tool

Behind the scenes, the Creative Cloud Desktop application manages UXP plugins through the **Unified Plugin Installer Agent** (UPIA), a command-line utility. See the [UPIA tool documentation](https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-using-upia-tool.html) for full macOS and Windows usage instructions.

The UPIA tool supports **install**, **uninstall**, and **list** operations for plugins. The available commands are summarized below.

### On macOS

In **Terminal**, go to the folder that contains the UPIA executable; elevated permissions may be necessary:

```bash
cd "/Library/Application Support/Adobe/Adobe Desktop Common/RemoteComponents/UPI/UnifiedPluginInstallerAgent/UnifiedPluginInstallerAgent.app/Contents/macOS"

./UnifiedPluginInstallerAgent --help
./UnifiedPluginInstallerAgent --version
./UnifiedPluginInstallerAgent --install <extension-file-path>
./UnifiedPluginInstallerAgent --remove <extension-file-path>
./UnifiedPluginInstallerAgent --list <all || product display name>
```

Example commands:

```bash
./UnifiedPluginInstallerAgent --install "~/Desktop/Test-xjluvc_premierepro.ccx"
./UnifiedPluginInstallerAgent --remove "startup-test"
./UnifiedPluginInstallerAgent --list all
```

### On Windows

In **Command Prompt**, run the following command:

```bash
cd "C:\Program Files\Common Files\Adobe\Adobe Desktop Common\RemoteComponents\UPI\UnifiedPluginInstallerAgent"
```

These commands are available; some can require administrator privileges:

```bash
UnifiedPluginInstallerAgent.exe /help
UnifiedPluginInstallerAgent.exe /version
UnifiedPluginInstallerAgent.exe /install <extension-file-path>
UnifiedPluginInstallerAgent.exe /remove <extension-file-path>
UnifiedPluginInstallerAgent.exe /list <all || product display name>
```

Example commands:

```bash
UnifiedPluginInstallerAgent.exe /install "C:\Temp\Test-xjluvc_premierepro.ccx"
UnifiedPluginInstallerAgent.exe /remove "startup-test"
UnifiedPluginInstallerAgent.exe /list all
```

### Install a UXP plugin — Troubleshooting

Although UXP plugin management is usually reliable, these checks can help when problems appear.

- Before installing a plugin, it can help to **run the host application at least once**.
- If double-clicking a `.ccx` file does not launch the Creative Cloud Desktop application, locate the UPIA executable and run it manually. The **file extension may not have been associated properly**, or **permission issues** may be involved.
- The UPIA executable can sometimes be missing from the system or become corrupted. **Reinstalling the Creative Cloud Desktop application** may fix that problem. For enterprise plugin installation, see [this packaging section](uxp-distribution.md) for how to include the UPIA in your package.
- Another option is [Anastasiy's Extension Manager](https://install.anastasiy.com/), a third-party tool, to install the plugin.
- For support, contact [ccintrev@adobe.com](mailto:ccintrev@adobe.com). If more troubleshooting is needed, support may request output from the [Log Collector tool](https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-log-collector-tool.html).

## Create a Listing

Creating and submitting a listing through the Adobe Developer Distribution portal.

### Overview

Use this guide to make the UXP plugin distribution process smoother. It lists preparation items to handle in advance and the steps for submitting a plugin for public distribution. Public distribution still goes through our team's [quality review](uxp-distribution-2.md) under the Guidelines.

### Preparing for Submission

### 1. Metadata

**\* marks required fields.**

| Name | Character Length | Description |
| --- | --- | --- |
| **\* Public plugin name** | 45 | A unique name for the plugin |
| **\* Subtitle** | 30 | A subtitle that will appear in the plugin listing card |
| **\* Description** | 5000 | A full context and description of the plugin and its features |
| **\* Categories** | NA | Collaboration, Tools & Automation, Usability & Testing, Publish & Handoff, Design Assets |
| **Tags** | 300 | Tags to increase discoverability of the listing |
| **\* Support email** | 1000 | Support email address to be shared with your users |
| **Help URL** | 1000 | URL for your users to get help |
| **Privacy Policy URL** | 1000 | URL of your Privacy Policy |
| **Terms of Service URL** | 1000 | URL of your Terms of Service |
| **Purchase Method** | NA | Either Free, Perpetual, or Subscription |
| **\* Trader information** | NA | Provide the Trader information in the Publisher Profile if you want to make your plugins available in the EU |
| **\* Version details** | 1000 | Public release notes |
| **\* Supported Languages** | 1000 | Languages supported by the plugin |
| **\* Note do Adobe Reviewers** | 1000 | Note for Adobe Reviewers |

Check that every required field has an appropriate value and that the submitted information is correct.

Testing credentials

If your plugin includes paid or premium areas, include credentials reviewers can use for testing. Reviewers need access to every feature during their test pass, and missing credentials will cause the submission to be rejected immediately.

### 2. Assets

| Type | Format | Description |
| --- | --- | --- |
| **\* 48x48 icon** | `.jpg/png` < 1MB | a 48x48 sized icon for the plugin card |
| **\* 96x96 icon** | `.jpg/png` < 1MB | a 96x96 sized icon for the plugin card |
| **\* 192x192 icon** | `.jpg/png` < 1MB | a 192x192 sized icon for the plugin card |
| **\* Screenshot** | `.jpg/png` < 5MB | a 1360x800 sized screenshot for the plugin listing page |
| **Additional screenshots** | `.jpg/png` < 5MB | 4 more optional 1360x800 sized screenshots |
| **Videos** | URL | Up to 5 YouTube or Vimeo video URLs with captions (255 chars) |
| **\* Publisher logo** | `.jpg/png` < 2MB | 250x250 sized logo to represent you or your company |

A **publisher logo** is required only for a first distribution submission when no publisher profile has been created yet.

### 3. Plugin Package

Use [Package a UXP plugin](uxp-distribution-2.md) to build the `.ccx` package file, and review the [plugin's ID](uxp-distribution-2.md) guidance.

### Submission Steps

### 1. Public Profile

Public distribution requires a public profile before submission. Create it from the [Developer Distribution portal](https://developer.adobe.com/distribute/home); read the [getting-started documentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/getting-started) and complete the provided instructions. This setup is **required only for your first distribution submission** and when no publisher profile exists yet.

If a **Permission Required error** message appears while loading the Developer Distribution portal, the most likely cause is an enterprise account without the needed permissions. Ask the administrator of your company's Admin Console to give your user the **Developer role**, or use a personal Adobe ID.

[Figure: Developer Distribution - permission required](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-dev-role.png)

On the Publisher Profile page, provide the **Public name**, **Marketing website**, **Description**, and **Publisher logo**. Follow the [branding guidelines](uxp-distribution-2.md) for those details.

[Figure: Developer Distribution - publisher profile](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-publisher-profile.png)

EU Digital Services Act (DSA) Trader Requirements

To make the listing available in the EU region, provide **Trader information** too. More information is in [EU Digital Services Act Trader Requirements](https://developer.adobe.com/compliance/).

If you choose not to provide that information, the listing is automatically hidden from users in Europe, who cannot purchase the plugin; users elsewhere continue to have access.

On the **Commerce** tab of the Publisher Profile page, Adobe asks you to set up [FastSpring](https://fastspring.com/), its third-party payment provider, and enter your **FastSpring key**. This lets the Creative Cloud Marketplace pay plugin sales and transfer royalties to your FastSpring account.

### 2. Create a New Listing

From the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/getting-started), click **Create New Listing**.

[Figure: Developer Distribution - create new listing](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-create-new.png)

Choose **Creative Cloud desktop plugin** from the available options, then click **Next**.

[Figure: Developer Distribution - Creative Cloud Desktop plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-category.png)

Product cards appear for every Creative Cloud application that supports UXP. Select the application for your plugin submission and click **Next**.

[Figure: Developer Distribution - Product cards](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-select-app.png)

When published or draft listings already exist, select one from the dropdown and click **Continue with existing Plugin**; otherwise, click **Create a new listing**.

[Figure: Developer Distribution - Continue with existing Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-existing.png)

After the new listing is created, the **plugin ID** is generated automatically. **Copy** and save this ID because it is needed when packaging the plugin. Click **Continue to your listing**.

[Figure: Developer Distribution - Create a new listing](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-new-listing-created.png)

### 3. Plugin Details

Open **Listing Details**, then complete **General**, **Localizations**, **Media**, **Tags** and **Services** with the values collected in [Preparing for Submission](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/index.md#preparing-for-submission).

[Figure: Developer Distribution - plugin details](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-metadata.png)

### Hybrid plugins support

[Hybrid plugins](uxp-plugins.md) submitted to the Creative Cloud Marketplace **must include binaries for all three supported architectures**: macOS arm64 (Apple Silicon), macOS x64 (Intel), and Windows x64. If any architecture is missing, the Developer Distribution portal rejects the `.ccx` package.

For local development or [independent distribution](uxp-distribution.md), a Hybrid plugin can cover fewer architectures, but Marketplace submission requires complete architecture coverage. Full details are in the [Building Hybrid Plugins](uxp-plugins.md) guide.

### 4. Add a new Version

Each plugin version, including the first submission, requires uploading the previously prepared `.ccx` package file.

[Figure: Developer Distribution - Upload CCX](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-upload-ccx.png)

Complete the required fields, such as Supported languages, Version details, and Screenshots, across all tabs. For an initial submission, submit listing details and a new version together; after publication, listing-detail updates and new-version submissions can be sent independently.

When finished, click **Submit for review**. A summary of the submitted information appears. Add a note for reviewers, include any testing credentials they may need, and preview the listing in the Creative Cloud Marketplace to confirm the details look right.

You can choose automatic publication after review is complete or publish manually later.

[Figure: Developer Distribution - Submit for review](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/listing/img/listing-submit-for-review.png)

Click **Submit listing** to send the plugin for review. The review target is within **10 business days** after submission, and you will be notified if the plugin is accepted or needs changes. The [Review process](uxp-distribution-2.md) page has more information.

## See also

- [Troubleshooting](help-troubleshooting.md)
