# Application and namespace specifiers — Application specifiers

Application specifiers are strings that combine the application name with a version number and a language code. Their syntax is: appname[\_instance[[-version[-locale]]]

| Specifier | Description |
| --- | --- |
| appname | An Adobe application name. Creative Suite 4 applications that support the ExtendScript Toolkit use these identifying strings: - aftereffects - bridge - estoolkit - illustrator - incopy - indesign - indesignserver - photoshop |
| instance | Optional. This appended underscore string separates instances for applications, such as InDesign Server, that can launch and run more than one instance. A server started with SOAP port 12345 would use the specifier indesignserver_configuration_12345. |
| version | Optional. This number gives at least the major version. Include a minor version after a dot when needed; for example, 1.5. If no version is supplied, the framework uses the sending application's suite version when possible, or otherwise chooses the highest available version. Creative Suite 4 interapplication messaging recognizes these identifying names and version numbers: - acrobat-9.0 - aftereffects-9.0 - soundbooth-2.0 - bridge-3.0 - contribute-5.0 - devicecentral-2.0 - dreamweaver-10.0 - encore-4.0 - estoolkit-3.0 - fireworks-10.0 - flash-10.0 - illustrator-14.0 - indesign-6.0 - indesignserver-6.0 - incopy-6.0 - photoshop-11.0 - premierepro-4.0 - audition-4.0 - ame-1.0 - exman-2.0 |
| locale | Optional. This Adobe locale code combines a 2-letter ISO-639 language code with, optionally, a 2-letter ISO 3166 country code after an underscore. Case matters. Examples include en_us, en_uk, ja_jp, de_de, and fr_fr. Without this value, ExtendScript uses the current platform locale. For multilingual applications such as Bridge, where one installation includes all locale versions, do not specify a locale. |

These examples are valid specifiers:

- photoshop
- bridge-3.0
- indesign_1-6.0
- illustrator-14.0
- illustrator-14.0-de_de

When version and locale details are omitted from a specifier, the framework searches for the best matching installation. Matching is attempted in this sequence:

1. Applications from the same suite
2. Installed applications with the greatest available version number
3. Applications already running
4. Applications whose locale matches the current locale
5. Applications in any locale
