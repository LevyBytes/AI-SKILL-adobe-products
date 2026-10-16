# Checking spelling — Change dictionary preferences

Dictionary preferences control how InCopy uses hyphenation dictionaries and spelling dictionaries. For most InCopy languages, Proximity dictionaries handle both spelling verification and word hyphenation. When spelling or hyphenation components from another company are installed, vendor choices can be assigned per installed language.

Note

The Dictionary Preferences dialog box is not where you choose the language dictionary for spell checking or text hyphenation. Instead, this dialog box selects the hyphenation and spelling plug-ins that InCopy uses for the language shown in the Language field. With only the default hyphenation and spelling plug-in installed, no Dictionary Preferences dialog box settings usually need adjustment. After a third-party developer's spelling or hyphenation plug-in is installed, it becomes available in the Hyphenation Vendor and Spelling Vendor menus in this dialog box. That makes it possible to use one vendor's hyphenation or spelling engine for some languages and a different vendor's engine for other languages.

Open Edit > Preferences > Dictionary (Windows) or InCopy  > Preferences > Dictionary (Mac OS). For Language, choose the language whose settings or vendor assignments need to change. Manage user dictionaries as needed. (See Create or add user dictionaries.) If a hyphenation component from a company other than Adobe is installed, choose it in the Hyphenation menu. If a spelling dictionary component from a company other than Adobe is installed, choose it from Spelling. In Hyphenation Exceptions, open Compose Using and use one of these options:

For composition based on the external user dictionary's hyphenation exceptions list, choose User Dictionary.

For composition based on the exceptions list stored inside the document, choose Document.

When both exception lists should be used, choose User Dictionary And Document. This is the default setting.

To copy the external user dictionary's exception list into the document's own exception list, select Merge User Dictionary Into Document. Note

In workflows with many different partners or clients, consider clearing Merge User Dictionary Into Document. For example, a service provider usually should avoid merging its user dictionary into every customer's file.

To force every story to recompose after related settings change, select Recompose All Stories When Modified. This option recomposes stories after Compose Using settings change (see step 6) or after the Dictionary command adds or removes words. Recomposition time depends on how much text the document contains. Click OK.
