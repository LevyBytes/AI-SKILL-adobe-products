# Extension Folders

CEP supports 3 extension-folder types.

- Product extension folder. This is only a suggestion because each point product can choose its own location. Third-party extensions cannot be installed there.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - macOS: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - macOS: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

- CEP searches first in the product extension folder, next in the system extension folder, and last in the per-user extension folder.
- Extensions are filtered out when they do not declare a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the one with the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the newest modification date.
- When two extensions share the same extension bundle ID, version, and manifest modification date, CEP loads whichever one it finds first.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be installed in the system extension folder or the per-user extension folder.

Note:

- Do not include character '#' in an extension folder path on Windows
  or Mac OSX, because CEF treats '#' as a delimiter.
