# Encoding API

CEP exposes encoding through the `window.cep.encoding` object, letting extensions encode content while reading or writing files. In UXP, pass the desired encoding directly as a string literal when calling file read/write methods. CEP developers can work with UTF8 or Base64; UXP text encoding support is limited to utf-8, utf-16be, and utf-16le.
