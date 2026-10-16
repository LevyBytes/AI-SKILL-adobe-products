# Windows signing credentials

Example 2: Reach for the "Adobe.PPKMS" security handler object, then choose which credentials sign.

Pass the selected certificate; this example does not assume an undeclared myCerts array.

```javascript
function selectWindowsSigningCredential(certificate) {
    var handler = security.getHandler("Adobe.PPKMS");
    return handler.login({ oParams: { oEndUserSignCert: certificate } });
}
```

Related: [SecurityHandler.login](login.md).
