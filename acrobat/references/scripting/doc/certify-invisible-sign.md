# certifyInvisibleSign

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 10.0 | D | Yes | All but Reader |

Places an invisible certification onto a document. Adobe Reader does not offer this method.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | The signature engine object. |
| oInfo | (optional) Extra signing information. |
| cDIPath | (optional) Where to save the signed file. Leave the path out and the file overwrites itself. |
| bUI | (optional) Pass TRUE to allow UI interaction. It may be FALSE provided a path and certificate are given. By default this is FALSE. |
| cLegalAttest | (optional) The reason for signing. |

Hands back TRUE when the signing went through.

Example:

```javascript
var myEngine = security.getHandler( "Adobe.PPKLite" );
myEngine.login( "password", "/C/Users/username/Desktop/PrivateUser.pfx" );

var myInfo =  {password: "password",
               reason: "SaveAs Test",
               mdp: "defaultAndComments"};

this.certifyInvisibleSign({
    oSig:myEngine,
    oInfo:myInfo,
    cDIPath:"/c/temp/sigSign.pdf",
    cLegalAttest: "Certified using JavaScript",
    bUI:false
});
```
