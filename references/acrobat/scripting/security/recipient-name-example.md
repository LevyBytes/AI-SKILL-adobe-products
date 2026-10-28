# Selecting a recipient name

Example 1: Retrieve groups with permissions

```javascript
function chooseRecipientName() {
    var options = {
        bAllowPermGroups: true, bPlaintextMetadata: false,
        cTitle: "Encrypt and Email", cNote: "Select recipients",
        bAllowImportFromFile: false, bRequireEncryptionCert: true,
        bRequireEmail: true
    };
    var groups = security.chooseRecipientsDialog(options);
    if (!groups || !groups.length || !groups[0].userEntities.length) return null;
    var name = groups[0].userEntities[0].fullName;
    console.println("Full name = " + name);
    return name;
}
```

Related: [security.chooseRecipientsDialog](choose-recipients-dialog.md).
