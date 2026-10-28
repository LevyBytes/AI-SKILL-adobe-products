# Changes Across Versions - Acrobat 8.0 changes

Acrobat 8.0 added E4X (ECMA-357) to its JavaScript interpreter. Read the [ECMAScript for XML specification](https://ecma-international.org/publications-and-standards/standards/ecma-357/) and the [Doc.metadata E4X examples](../doc/metadata.md).

In Preferences (Ctrl + K) > JavaScript, Enable global object security policy is checked by default. A write records the origin; later access requires that origin. For a file, the path must match its path when the value was written. For a URL, the web host must match. Privileged contexts, including console, batch and folder JavaScript, are exceptions. Turning the setting off permits cross-origin access as before version 8.0. Read [global object behavior](../global/java-script-apis-global.md).

Acrobat 8.0 also restricts [app.execMenuItem](../app/exec-menu-item.md) to safe menu items.

## Introduced or newly documented API

| Object | Properties, methods and qualifications |
| --- | --- |
| Certificate | Properties: `privateKeyValidityEnd`, `privateKeyValidityStart`; `validityEnd` and `validityStart` were introduced in 7.0.5 but undocumented. |
| CertificateSpecifier | Properties: `subjectDN`, `keyUsage`, `urlType`; expanded `url` description. Four new `flags` bits: `subjectDN`, `issuerDN`, `keyUsage`, `url`. |
| colorConvertAction | Properties: `action`, `alias`, `colorantName`, `convertIntent`, `convertProfile`, `embed`, `isProcessColor`, `matchAttributesAll`, `matchAttributesAny`, `matchIntent`, `matchSpaceTypeAll`, `matchSpaceTypeAny`, `preserveBlack`, `useBlackPointCompensation`. |
| Doc | Properties: `xfa` (introduced in 6.0.2 but undocumented), `XFAForeground`. Methods: `colorConvertPage`, `embedOutputIntent`, `exportAsFDFStr`, `exportAsXFDFStr`, `getColorConvertAction`. |
| Net | Properties: `SOAP`, `Discovery`, `HTTP`. Methods: `streamDecode`, `streamDigest`, `streamEncode`. `Net.SOAP` aliases `SOAP.wireDump`, `SOAP.connect`, `SOAP.request`, `SOAP.response`; `Net.Discovery` aliases `SOAP.queryServices`, `SOAP.resolveService`. |
| Net.HTTP | Method: `request`. |
| PrintParams | Properties: `booklet`, `constants.bookletBindings`, `constants.bookletDuplexModes`, `constants.handling.booklet`; see `pageHandling`. |
| RDN | Properties: `businessCategory`, `countryOfCitizenship`, `countryOfResidence`, `dateOfBirth`, `dc`, `dnQualifier`, `gender`, `generationQualifier`, `givenName`, `initials`, `l`, `name`, `nameAtBirth`, `placeOfBirth`, `postalAddress`, `postalCode`, `pseudonym`, `serialNumber`, `sn`, `st`, `street`, `title`. |
| SecurityHandler | Previously undocumented properties: `docDecrypt`, `docEncrypt`, `validateFDF`. |
| SeedValue | New flags: `legalAttestations`, `shouldAddRevInfo`, `digestMethod`. New properties: `digestMethod`, `shouldAddRevInfo`. Changed `reasons` behavior and `version` wording. |
| SignatureInfo | Property: `digestMethod`. |

For existing APIs whose behavior changed, open [Modified in Acrobat 8.0](modified-in-acrobat-8-0.md).
