# Extension Folders

CEP recognizes 3 extension-folder types.

- Product extension folder. This path is suggested, although each point product may choose its own location. Third-party extensions cannot be placed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x86): `C:\Program Files\Common Files\Adobe\CEP\extensions`
  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - Mac: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - Mac: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP choose the extension to load?

- Search order is product extension folder first, then system extension folder, then per-user extension folder.
- Any extension missing a compatible host application ID and version is rejected.
- When two extensions share an extension bundle ID, CEP loads the higher version.
- When extension bundle ID and version both match, CEP uses the one whose manifest file has the newest modification date.
- If bundle ID, version, and manifest modification date are all identical, CEP loads the first matching extension it finds.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be installed in the system extension folder or the per-user extension folder.

Note:

- Do not use character '#' in an extension folder path on Windows or macOS,
  because CEF treats '#' as a delimiter.
