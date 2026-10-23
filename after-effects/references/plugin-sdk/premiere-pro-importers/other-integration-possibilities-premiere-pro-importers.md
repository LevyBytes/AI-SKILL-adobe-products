# Other Integration Possibilities - Premiere Pro Importers

Across the bulk of Adobe Creative Cloud applications — Premiere Pro, Media Encoder, Prelude, and Audition among them — Premiere Pro importers handle bringing media in. Given that wider reach, we suggest writing a Premiere Pro importer unless what you need is the very specific After Effects integration that only this SDK's AEIO API provides. Here is where to get the Premiere Pro SDK: https://www.adobe.io/apis/creativecloud/premierepro.html

A priority system is one edge MediaCore importer plug-ins hold over AEIOs: whichever importer ranks highest takes the first shot at a file, and should that importer not handle the file in question, the next one down in priority gets its turn to attempt the import, continuing on down the line.
