# Install licenses for license-only packages

After creating a license-only package in the Admin Console, use this process for packages that use Online, Offline, or Isolated activation:

Get the package from the Admin Console.

Unpack the package contents. The license-only package provides licensing details in a .json file and also includes the Licensing Toolkit utility. Windows utility: adobe-licensing-toolkit.exe macOS utility: adobe-licensing-toolkit

Use administrator privileges when running the license-install commands. Windows command: adobe-licensing-toolkit.exe --precondition --install --filePath <absolute path of the .json file> Short form: adobe-licensing-toolkit.exe -p -i -f <absolute path of the .json file> macOS command: sudo adobe-licensing-toolkit --precondition --install --filePath <absolute path of the .json file> Short form: sudo adobe-licensing-toolkit -p -i -f <absolute path of the .json file>
