# Issue 1 (CEP 12) : CSInterface's version specific APIs show incorrect Operating System Version

CSInterfaces API cannot detect the OS version accurately for Win 11, Mac OS 12(only arm), and Mac OS 13 (both intel and arm), due to limitations in the underlying CEF layer. On those platforms, CEP 12 will not show correct OS version details.
