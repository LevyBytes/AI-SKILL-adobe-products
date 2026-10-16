# Extension Folders

CEP recognizes 3 types of extension folders.

- Product extension folder. The location below is a suggestion, but each point product can choose its own folder. Third-party extensions cannot be installed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - macOS: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - macOS: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

- CEP searches first in the product extension folder, then in the system extension folder, and last in the per-user extension folder.
- Extensions are filtered out when they do not declare a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the latest modification date.
- When two extensions share the same extension bundle ID, version, and manifest modification date, CEP uses the first match it finds.

Extension Installation:

- Host application installers should place extensions in product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be placed in either the system extension folder or the per-user extension folder.

Note:

- Paths for extension folders cannot contain the character '#' on Windows
  or Mac OSX, because CEF treats '#' as a delimiter.
