# signatureGetModifications

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Hands back an object describing the changes applied to the document since its signature field was signed. Only the delta between the document's present state and its signed state is captured. Objects that came and went — added after signing but then deleted — go unreported.

Returns

An object holding the modification details, carrying the properties listed below:

| Property | Type | Description |
| --- | --- | --- |
| formFieldsCreated | Array of Field objects | The form fields that were created once signing had occurred. |
| formFieldsDeleted | Array of Generic objects | The form fields removed after signing. Every generic object here is a string shaped as name: type. |
| formFieldsFilledIn | Array of Field objects | The form fields that got filled in after signing. |
| formFieldsModified | Array of Field objects | The form fields altered after signing. Filling in a form field does not count as modification in this sense. |
| annotsCreated | Array of Annotation objects | The annotations brought into being after signing. Should an annotation be transient — a pop-up generated on the fly, say — its array slot holds a string shaped as author: name: type. |
| annotsDeleted | Array of Generic objects | The annotations removed after signing. Every generic object here takes the form author: name: type. |
| annotsModified | Array of Annotation objects | The annotations changed after signing. Should an annotation be transient — a pop-up generated on the fly, say — its array slot holds a string shaped as author: name: type. |
| numPagesCreated | Integer | How many pages were added once signing had taken place. |
| numPagesDeleted | Integer | How many pages were removed once signing had taken place. |
| numPagesModified | Integer | How many pages had their content changed after signing (adding, deleting, or modifying annotations and form fields is not treated as page modification here). |
| spawnedPagesCreated | Array of Strings | The pages spawned after signing, each one accompanied by the name of its source template. |
| spawnedPagesDeleted | Array of Strings | The spawned pages removed after signing, each one accompanied by the name of its source template. |
| spawnedPagesModified | Array of Strings | The spawned pages changed after signing, each one accompanied by the name of its source template. |

Example: print the modification details out to the console.

```javascript
var sigField = this.getField( "mySignature" );
var sigMods = sigField.signatureGetModifications();

var formFieldsCreated = sigMods.formFieldsCreated;
for( var i = 0; i < formFieldsCreated.length; i++ )
    console.println( formFieldsCreated[i].name );

var formFieldsDeleted = sigMods.formFieldsDeleted;
for( var i = 0; i < formFieldsDeleted.length; i++ )
    console.println( formFieldsDeleted[i].name );

var formFieldsFilledIn = sigMods.formFieldsFilledIn;
for( var i = 0; i < formFieldsFilledIn.length; i++ )
    console.println( formFieldsFilledIn[i].name );

var formFieldsModified = sigMods.formFieldsModified;
for( var i = 0; i < formFieldsModified.length; i++ )
    console.println( formFieldsModified[i].name );

var spawnedPages = sigMods.spawnedPagesCreated;
for( var i = 0; i < spawnedPages.length; i++ )
    console.println( spawnedPages[i] );

console.println( sigMods.numPagesDeleted );
```
