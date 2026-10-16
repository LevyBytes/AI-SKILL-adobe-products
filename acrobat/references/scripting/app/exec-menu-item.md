# app.execMenuItem

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | Yes | All |

Executes the specified menu item.

From Acrobat 5.0 onward, a call to app.execMenuItem("SaveAs") is possible, within the limits laid out below. Running the Save As item writes the current file to the user's hard drive once a dialog box has prompted them for a folder and file name. When "Save As Optimizes for Fast Web View" is enabled in the Documents preferences, the saved file is linearized.

Note

(Acrobat 7.0) Earlier Acrobat releases would only run the following code from within a batch, console, or menu event.

```javascript

app.execMenuItem("SaveAs");
```

That limitation is lifted in Acrobat 7.0, which means app.execMenuItem("SaveAs") now works inside a mouse-up event as well, for instance.

A form object does not persist through a Save As when the user preferences enable "Save As Optimizes for Fast Web View". At that point Field objects stop being valid, and reaching for one right after the save can raise an exception. The examples below illustrate this.

Quitting via script is blocked for security purposes; scripts cannot run the Quit menu item. From Acrobat 6.0 forward, the Paste menu item is likewise off-limits to scripts.

(Acrobat 8.0) Only a brief roster of safe menus may be invoked through the execMenuItem method. Naming a menu item that is absent from the safe list causes execMenuItem to fail without any notice. Future releases may drop menu items or alter how they behave.

You can view the safe-menu roster by building a form button and opening its Button Properties dialog box at the Actions tab. Pick "Execute a menu item" from the Select Action list, then press the Add button, which brings up the Menu Item dialog box listing the safe menus.

In a privileged context — the console or a batch sequence, for example — the app.execMenuItem method runs with no restriction at all. With folder JavaScript, running app.execMenuItem unrestricted is likewise possible by way of a trusted function granted raised privilege. Consult Example 4, below.

Sign & Certify offers yet another route to unrestricted app.execMenuItem calls. After the document author has signed and certified the file, privileged methods become runnable from a non-privileged context, provided the document consumer has the author's certificate among their trusted identities and trusts that author to run embedded high-privilege JavaScript.

For the sake of a secure environment, the runnable menu items are confined to this set:

| AcroSendMail:SendMail | HandMenuItem | ShowHideToolbarBasicTools |
| --- | --- | --- |
| ActualSize | HelpReader | ShowHideToolbarCommenting |
| AddFileAttachment | InsertPages | ShowHideToolbarData |
| Annots:Tool:InkMenuItem | LastPage | ShowHideToolbarEdit |
| BookmarkShowLocation | NextPage | ShowHideToolbarEditing |
| Close | OneColumn | ShowHideToolbarFile |
| CropPages | OpenOrganizer | ShowHideToolbarFind |
| DeletePages | PageSetup | ShowHideToolbarForms |
| DocHelpUserGuide | PrevPage | ShowHideToolbarMeasuring |
| ExtractPages | Print | ShowHideToolbarNavigation |
| Find | PropertyToolbar | ShowHideToolbarPageDisplay |
| FindCurrentBookmark | Quit | ShowHideToolbarPrintProduction |
| FindSearch | ReplacePages | ShowHideToolbarRedaction |
| FirstPage | RotatePages | ShowHideToolbarTasks |
| FitHeight | SaveAs | ShowHideToolbarTypewriter |
| FitPage | Scan | SinglePage |
| FitVisible | ShowHideAnnotManager | Spelling |
| FitWidth | ShowHideArticles | Spelling:Check |
| FullScreen | ShowHideBookmarks | TwoColumns |
| GeneralInfo (Properties) | ShowHideFields | TwoPages |
| GeneralPrefs | ShowHideFileAttachment | Web2PDF:OpenURL |
| GoBack | ShowHideModelTree | ZoomDragMenuItem |
| GoBackDoc | ShowHideOptCont | ZoomTo |
| GoForward | ShowHideSignatures | ZoomViewIn |
| GoForwardDoc | ShowHideThumbnails | ZoomViewOut |
| GoToPage |  |  |

Document-level access to menu items is the only thing this roster governs; application-level JavaScript and JavaScript running from a privileged context fall outside it.

Acrobat stores this roster in its registry, and you may edit it should you decide the list needs to grow. Expanding it means editing the relevant registry entries:

The key for the default list is `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Adobe\Adobe Acrobat\9.0\FeatureLockDown\cDefaultExecMenuItems`.

The key for the list used by Tuner is `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Adobe\Adobe Acrobat\9.0\FeatureLockDown\cAdminExecMenuItems`.

Under both keys the value name is tWhiteList with type REG_SZ. Its value data holds every menu item name, with one name set off from the next by the "|" delimiter.

See also addMenuItem, addSubMenu, and hideMenuItem. To make the console print out every menu item's name, call listMenuItems.

Parameters

| Parameter | Description |
| --- | --- |
| cMenuItem | Which menu item to run. You can pull the roster of menu item names from listMenuItems. |
| oDoc | (optional, Acrobat 7.0) Here oDoc names a non-hidden document's Doc object (see the Doc object hidden property). When this parameter is supplied, execMenuItem fires the menu item within that document's context. |

Related references:

- [Opening and saving with menu commands](menu-open-save-examples.md)
- [Trusted menu-command example](trusted-menu-example.md)
