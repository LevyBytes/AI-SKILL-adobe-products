# Option #2 - Multiple User Deployment in Managed Environments

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
