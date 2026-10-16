# Standard Events in Point Products

Point-product support for standard events is summarized here.

| Event Type | Event Scope | Description | Event Parameter | PS | ID | AI | AN | PR | PL | AU |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| documentAfterActivate | APPLICATION | Event fired when a document has been activated(after new/open document; after document has retrieved focus). | URL to the active document. If the doc was not save, the NAME will be set instead of the URL. | ![No][cross] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |
| documentAfterDeactivate | APPLICATION | Event fired when the active document has been de-activated.(after document loses focus) | URL to the active document. If the doc was not save, the name will be set instead of the URL. | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |
| applicationBeforeQuit | APPLICATION | Event fired when the application got the signal to start to terminate. | none | ![No][cross] | ![Issue][issue] | ![Issue][issue] | ![No][cross] | ![No][cross] | ![No][cross] | ![No][cross] |
| applicationActivate | APPLICATION | Event fired when the Application got an "activation" event from the OS. | none | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![Yes][correct] on Mac; ![No][cross] on Windows | ![Yes][correct] on Mac; ![No][cross] on Windows | ![Yes][correct] |
| documentAfterSave | APPLICATION | Event fired after the document has been saved | URL to the saved document. | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |

(![Yes][correct] = supported, ![No][cross] = not supported)

[cross]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_8.x/Documentation/images/cross.png "No"
[correct]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_8.x/Documentation/images/correct.png "Yes"
[issue]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_8.x/Documentation/images/Issue.png "Issue"

Note: In the ID and AI point products, CEP unloads immediately after `applicationBeforeQuit` is emitted. As a result, HTML extensions may not get an opportunity to process that event.
