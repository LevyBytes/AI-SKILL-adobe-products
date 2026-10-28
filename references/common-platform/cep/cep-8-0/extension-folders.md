# Extension Folders

CEP supports 3 extension folder types.

- Product extension folder. The path below is a suggestion; each point product can choose its own folder. Third party extensions cannot be installed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x86): `C:\Program Files\Common Files\Adobe\CEP\extensions`
  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - Mac: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - Mac: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

- CEP searches the product extension folder first, then the system extension folder, and finally the per-user extension folder.
- Extensions are filtered out when they lack a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the one with the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the newest modification date.
- When two extensions share the same extension bundle ID, version, and manifest modification date, CEP loads the first one it finds.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should install to either the system extension folder or the per-user extension folder.

Note:

- Character '#' cannot appear in extension folder paths on Windows
  or Mac OSX, because CEF interprets '#' as a delimiter.
