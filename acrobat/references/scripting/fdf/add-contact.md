# addContact

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Puts a contact into the FDF file.

Parameters

| Parameter | Description |
| --- | --- |
| oUserEntity | A UserEntity object that identifies which contact gets appended to the FDF file. |

Returns

Throws an exception on failure.

Example:

```javascript
var oEntity={firstName:"Fred", lastName:"Smith", fullName:"Fred Smith"};
var f = app.newFDF();
f.addContact( oEntity );
f.save( "/c/temp/FredCert.fdf" );
```
