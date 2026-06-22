# Exmancmd7 8Guide

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Use the following steps to set up ExManCmd 7.8; Package, Distribute, Install Guide.

## Use the following steps to set up ExManCmd 7.8

- [**Don't update to Catalina if you still depend on ExtendScript ToolKit.**](https://medium.com/adobetech/estk-and-macos-10-15-catalina-cbcc30300918?source=friends_link&sk=76b9896b1eec630691f5603839ae28fe "Don't update to Catalina if you still depend on ExtendScript ToolKit.") Consider testing Catalina in a separate Mac partition first.
- BridgeTalk is not fully Catalina compliant and needs the extra download-time steps listed below.

To check which ExManCmd version is installed, use this visual cue:

[Figure: ExManVersionWarrow](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/ExManVersionWarrow.png)

~~1. Download ExManCmd 7.8 here: [https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html](https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html "https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html")~~
The linked page now provides the latest ExManCmd release, and Version 7.8 can no longer be downloaded there.

2. Mount the `.dmg` volume by double-clicking the `.dmg` folder.
3. Copy the `Contents` folder and paste it onto your hard drive, or into another System location.
4. Open `Contents - > MacOS`.
5. Start Terminal.app.
6. Run this command to clear Apple's quarantine flag from the BridgeTalk component: `xattr -dr com.apple.quarantine Your/SystemPath/Contents/MacOS/ExManBridgeTalkCmd`
   - One convenient approach is to paste the command first, then drag the `ExManBridgeTalk` file directly into Terminal so you do not have to browse the file system manually:

[Figure: filepathdrag drop.small](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/filepathdrag_drop.small.gif)

- Press return to execute the command.

6. Double-click ExManCmd Tool from `/Contents/MacOS/ExManBridgeTalkCmd`.

7. macOS still displays this warning:
   [Figure: ExManCantBeOpenedOpen](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/ExManCantBeOpenedOpen.png)

8. In `System Preferences -> Security`, choose "Open Anyway" to approve ExManCmd:

[Figure: catalinaSysPrefError](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/catalinaSysPrefError.jpg)

8. ExManCmd should now launch correctly, except possibly for BridgeTalk-dependent workflows. Tell us if this procedure fails.
9. Continue using ExManCmd for normal addon install/remove tasks.
   - When installing directly into the Creative Cloud app, running ExManCmd with `sudo` is recommended.
   - Other installation types may not need `sudo`.

## Package, Distribute, Install Guide

Once your extension has been built successfully, prepare it for distribution by packaging it as `ZXP` and signing it with a valid certificate. This guide covers the extension packaging, distribution, and installation flow.

After finishing the guide, you will be able to:

1. Package an extension as `ZXP` with a certificate.
1. Install the packaged extension on your machine or another user's machine.
1. Distribute the packaged extension.

### Contents

1. [Prerequisites](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Package%20Distribute%20Install/readme.md#prerequisites)
1. [Acquiring a signed certificate](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Package%20Distribute%20Install/readme.md#acquiring-a-signed-certificate)
1. [Creating and verifying a signed package](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Package%20Distribute%20Install/readme.md#creating-and-verifying-a-signed-package)
1. [Distributing the `ZXP` Packaged Extension](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Package%20Distribute%20Install/readme.md#distributing-the-zxp-packaged-extension)
1. [Installing the `ZXP` Packaged Extension](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Package%20Distribute%20Install/readme.md#installing-the-zxp-packaged-extension)

### Prerequisites

This guide expects that you already have a complete, working CEP extension. If you still need to build one, start with the [Adobe CEP Getting Started Guide](https://github.com/Adobe-CEP/Getting-Started-guides).

### Acquiring a signed certificate

The package signature proves that the packaged contents have not changed after packaging. During installation, the extension installer compares the package with that signature and confirms that the certificate is valid. CEP also performs certificate validation whenever a host application attempts to launch an extension.

Documents and software are commonly signed with certificates whose expiration windows range from one to four years. Without a valid timestamp, an extension signed by an expired certificate can no longer be installed or loaded. Users are not warned before the signature reaches expiration. Restoring availability requires repackaging the extension with a new certificate, so rebuild the extension package well ahead of the installer certificate's expiration date to prevent installation failures for users.

A valid timestamp records that the signing certificate was still valid when the signature was created.
For that reason, include a timestamp whenever you package and sign an extension.
Adding the timestamp keeps the digital signature usable for a longer period.

Validation outcomes are:

| Signature | CEP result |
| --- | --- |
| No signature | Extension does not run |
| Signature invalid | Extension does not run |
| Certificate used to sign has expired and no timestamp exists | Extension does not run |
| Certificate used to sign has expired, but has a valid timestamp | Extension runs normally |
| Signature valid | Extension runs normally |

### Download the signing and packaging tool, `ZXPSignCmd`

Adobe supplies `ZXPSignCmd`, a command-line utility for packaging and signing extensions. Download the platform-specific toolkit from the [CEP Resources page](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD).

With this utility, you can generate a self-signed certificate, build a signed ZXP package, or check an existing ZXP package. It does not examine whether the extension's content itself is valid.

For details on required extension structure and contents, consult the [Adobe CEP Getting Started Guide](https://github.com/Adobe-CEP/Getting-Started-guides).

### Choose a certificate acquisition path

Code-signing certificates fall into two categories: commercial certificates issued by trusted certificate authorities, and self-signed certificates. A commercial certificate must be bought from a trusted certificate authority.

- Using CA (Certificate Authority) - A CA-signed certificate must meet these requirements: - The target operating system must include the root certificate for the code-signing certificate by
  default. This differs across operating-system variants.

      - The issuing certificate authority (CA) for the code-signing certificate must allow that

  certificate to be used for signing extensions.

- Creating a self-signed certificate - When no CA-signed certificate is available, use the `ZXPSignCmd` downloaded earlier to self-sign the package with this command:

```
ZXPSignCmd -selfSignedCert <countryCode> <stateOrProvince> <organization> <commonName> <password> <outputPath.p12> [options]
```

| Parameters | Description |
| --- | --- |
| countryCode | The certificate identifying information for your country. |
| stateOrProvince | The certificate identifying information for your state or providence. |
| organization | The certificate identifying information for your organization. |
| commonName | The certificate identifying information for your common name. |
| password | The password for the new certificate. |
| outputPath.p12 | The path and file name for the new certificate. |
| options(locality) | `-locality <code>` If supplied, the locale code to associate with this certificate. |
| options(orgUnit) | `-orgUnit <name>` If supplied, an organizational unit to associate with this certificate. |
| options(email) | `-email <addr>` If supplied, an email address to associate with this certificate. |
| options(validityDays) | `-validityDays <num>` If supplied, a number of days from the current date-time that this certificate remains valid. |

After the command completes, the generated self-signed certificate is placed at `<outputPath.p12>`.

**Example**

```
./ZXPSignCmd -selfSignedCert US NY MyCompany MyCommonName abc123 MyCert.p12
```

### Creating and verifying a signed package

After the previous step gives you a signed and verified certificate, you can build a signed package. Distribution through Adobe Exchange or the Admin Console requires an Adobe `ZXP` package. If neither Adobe Exchange nor the Admin Console is your channel, confirm with that channel whether ZXP packaging is necessary.

### Decide what to include in your package and provide the configuration file

For a package containing only one HTML extension, use a folder layout like the following and put `manifest.xml` under `CSXS`folder:

The following `manifest.xml` example corresponds to that folder layout:

```
<?xml version="1.0"?>
  ExtensionBundleId="com.example.extension"
  ExtensionBundleVersion="1.0.0" Version="7.0">
```

_SEE: [complete version of the manifest spec](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/ExtensionManifest_v_7_0.xsd)_

To include other files or add more configuration, provide a configuration `.mxi` file. That file lets you define product configuration details such as supported applications, installation locations, and related settings. The recommended folder layout appears below:

This folder layout corresponds to the following `id.xml` sample:

```
<?xml version="1.0" encoding="UTF-8"?>
<macromedia-extension
    id="id"
    icon="icon.png"
    name="Example Package"
    requires-restart="true"
    version="1.0.0">
    <author name="AUTHOR NAME"/>
    <description>
        <![CDATA[YOUR DESCRIPTION]]>
    </description>
    <ui-access>
        <![CDATA[YOUR INSTRUCTION]]>
    </ui-access>
    <license-agreement>
        <![CDATA[YOUR LICENSE AGREEMENT]]>
    </license-agreement>
    <products>
        <product familyname="Photoshop" version="13"/>
    </products>
    <files>
        <file source="Extension/html.zxp"
            destination=""
            file-type="CSXS"
            products="Photoshop,Photoshop32,Photoshop64"
            minVersion="14.0" />
        <file source="PSD/"
            destination="$Downloads"
            file-type="ordinary"
            products="Photoshop,Photoshop32,Photoshop64"
            minVersion="14.0" />
    </files>
</macromedia-extension>

```

_SEE: [Configuration File Reference](https://helpx.adobe.com/extension-manager/kb/configuration-file-reference.html)_

For additional detail and a walkthrough, consult [How to Customize Your Adobe Creative Cloud Extension Package](https://medium.com/adobetech/how-to-customize-your-adobe-creative-cloud-extension-package-1aba6111aee4).

### Use `ZXPSignCmd` to package your extension

When the input directory is ready, finish packaging by running this command:

```
ZXPSignCmd -sign <inputDir> <outputZxp> <p12> <p12Password> [options]
```

| Parameters | Description |
| --- | --- |
| inputDir | The path to the folder containing the source files to package. |
| outputZxp | The path and file name for the ZXP package. |
| p12 | The path and file name for the signed certificate. |
| p12Password | The password for the certificate. |
| options(tsa) | `-tsa <timestampURL>` The timestamp server. Examples: http://time.certum.pl/ http://timestamp.comodoca.com/rfc3161 |

**Example**

```
./ZXPSignCmd -sign myExtProject myExtension.zxp MyCert.p12 abc123 -tsa http://time.certum.pl/
```

### Use `ZXPSignCmd` to verify your `ZXP` Package

`ZXPSignCmd` checks the signature of a `ZXP` package; it does not validate the extension content.
Run this command for signature checking:

```
ZXPSignCmd -verify <zxp>|<extensionRootDir> [options]
```

| Parameters | Description |
| --- | --- |
| zxp | The path and file name for the ZXP package. |
| extensionRootDir | The path to the folder containing the deployed ZXP |
| options(certinfo) | `-certinfo` If supplied, prints information about the certificate, including timestamp and revocation information. |
| options(skipOnlineRevocationChecks) | `-skipOnlineRevocationChecks` If supplied, skips online checks for certificate revocation when `-certinfo` is set. |
| options(addCerts) | `-addCerts <cert1> <cert2> ...` If supplied, verifes the certificate chain and assesses whether the supplied DER-encoded certificates are included. |

**Example**

```
./ZXPSignCmd -verify myExtension.zxp -certinfo

*********** Certificate Information ***********
CN: MyCommonName
OU:
DN: /C=US/ST=NY/O=MyCompany/CN=MyCommonName
OS Trusted: false
Revoked: false
Timestamp: Valid and within certificate validity dates at time of signing
Signing Certificate: Valid (from 2018-04-02 until 2029-06-19)
***********************************************
```

_Note: The output above shows how to confirm timestamp validity._

### Distributing the `ZXP` Packaged Extension

Developers have several ways to distribute extensions. This section highlights two Adobe-preferred paths. For any different distribution method, verify the requirements with that specific channel.

### Option #1 - Adobe Exchange

Adobe Exchange lets you make the package publicly available so Adobe users can download the extension. To list an extension, go to the [Exchange Producer Portal](https://partners.adobe.com/exchangeprogram/creativecloud). For more assistance, consult the [Adobe Exchange Producer Portal](https://partners.adobe.com/exchangeprogram/creativecloud).

### Option #2 - Multiple User Deployment in Managed Environments

Through the enterprise console, extensions can be bundled into a deployment package. As a result, Creative Cloud applications and extensions are installed in one deployment workflow. Follow these steps:

1. Sign in to [the enterprise console](https://adminconsole.adobe.com/enterprise/overview)
1. Open the "Packages" tab at the top
1. Choose "Create a Package"
1. Choose "Managed Package" and then click "Select"
1. Set up the package and click "Next" (select "Create a folder for extensions & include the Extension Manager command line tool")
1. Add any required Adobe host applications, then click "Next"
1. Type the package name and click "Build Package"
1. When the package is ready, the browser downloads it automatically. If it does not, click the package name and then click "Download"
1. Unzip the downloaded zip file (Note: on MacOS, use the MacOS built-in Archive Utility for extraction)
1. In the extracted folder, open the `Build` folder
1. Right-click the `YOUR_PACKAGE_NAME.pkg` file and choose "Show Package Content"
1. Go to `Contents > Resources > post > addon > ZXP`
1. Put the `.zxp` file in this folder
1. Return to `YOUR_PACKAGE_NAME.pkg` and double-click the `.pkg` file. The installation process starts

### Installing the `ZXP` Packaged Extension

### Option #1 - Adobe Exchange

Adobe Exchange is a marketplace for uploading and downloading extensions, custom tags, scripts, content, and other additions that extend Adobe applications. To download a product hosted on Adobe Exchange, use these steps:

1. Go to https://exchange.adobe.com/creativecloud.html
1. Select the marketplace (Creative Cloud / Experience Cloud / Document Cloud)
1. Select the product that matches your needs
1. Click "Buy" or "Free", depending on whether the product costs money
1. The product downloads to its configured location (Note that the ZXP package defines this location. Most sellers place it under "Where
   To Find It")

### Option #2 - `ExManCmd`

1. Download `ExManCmd` - Get the Extension Manager Command Line tool (ExManCmd) from these locations. Its command-line interface covers many operations available in the Extension Manager interface:

   - ExManCmd - Mac: https://www.adobe.com/go/ExManCmdMac
   - ExManCmd - Windows: https://www.adobe.com/go/ExManCmdWin

1. Unzip the `ExManCmd` toolkit - Extract the downloaded toolkit so the `ExManCmd` file is ready for the next step.

1. Install the package - Use the available `ExManCmd` commands to install or uninstall the package. See [Extension Manager command-line basics](https://helpx.adobe.com/extension-manager/using/command-line.html) for details.

   ```
   ExManCmd --install <zxpPath>
   ```

   **Example**

   ```
   ./ExManCmd --install ~/Documents/myExtension.zxp
   ```

   If an error appears, consult the [extensions installation error codes and description](https://helpx.adobe.com/exchange/kb/error-codes.html) for additional information.

### Option #3 - Anastasiy’s extension manager

Use Anastasiy’s extension manager as a third-party installer for extension packages in `.zxp` format.

1. Download and install Anastasiy’s extension manager
   Open [Anastasiy's extension manager download page](https://install.anastasiy.com/) and complete the installer steps shown there.

   After installation finishes, the extension is placed at the extension folder's root level. (Note that the root extension folder location differs by operating system. See [CEP Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders) for more details.)
