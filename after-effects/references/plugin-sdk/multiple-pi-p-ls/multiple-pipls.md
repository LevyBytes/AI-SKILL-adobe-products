# include the output of the custom build steps into the Microsoft-generated .rc file. — Multiple PiPLs

You can pack several plug-ins — AEGPs and effects both — into one file using multiple PiPLs, though it isn't advised. When a single file holds PiPLs for AEGPs as well as effects, the AEGPs have to come first!

Pointing multiple PiPLs at multiple effects inside one .dll or code fragment isn't supported by any other host — Premiere Pro included. And when one plug-in needs an update, do you honestly want to put out a fresh build of every plug-in you make? Our advice is a single PiPL and a single plug-in for each code fragment.
