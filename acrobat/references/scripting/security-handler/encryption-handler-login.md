# Encryption-handler login and cleanup

Example 3: Reach for security.APSHandler, see security constants.

Pass the handler-specific login parameters and the implemented operation callback. A failed login returns false without running the operation; an authenticated handler is logged out even if the operation throws.

```javascript
function withEncryptHandler(loginParams, operation) {
    var handler = security.getHandler(security.APSHandler, true);
    if (!handler.login({ oParams: loginParams })) return false;
    try {
        return operation(handler);
    } finally {
        handler.logout();
    }
}
```

For the full story on signing a PDF document, turn to signatureSign.

Related: [SecurityHandler.login](login.md).
