# Signing-handler login and credential selection

Example 1: Log in and log out.

Pass the handler-specific login parameters and the implemented operation callback. A failed login returns false without running the operation; an authenticated handler is logged out even if the operation throws.

```javascript
function withSignHandler(loginParams, operation) {
    var handler = security.getHandler(security.PPKLiteHandler, true);
    if (!handler.login({ oParams: loginParams })) return false;
    try {
        return operation(handler);
    } finally {
        handler.logout();
    }
}
```

Use UI to select a credential, when already logged in.

Pass the already authenticated PPKLite handler to select its signing credential through the UI.

```javascript
function selectSigningCredential(handler) {
    return handler.login({
        oParams: { oEndUserSignCert: {}, cMsg: "Select your Digital ID" },
        bUI: true
    });
}
```

Log in and select the signing credentials

Pass the PPKLite handler, identity-file path, password and selected certificate. The Boolean result reports whether login succeeded.

```javascript
function loginWithSigningCredential(handler, identityPath, password, certificate) {
    return handler.login({ oParams: {
        cDIPath: identityPath, cPassword: password,
        oEndUserSignCert: certificate, cMsg: "Select your Digital ID"
    }, bUI: true });
}
```

Related: [SecurityHandler.login](login.md).
