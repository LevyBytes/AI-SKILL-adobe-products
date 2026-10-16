# Preparing recipient email lists

Example 2: Get a list of recipients for which to encrypt data and email the document.

This function prepares the recipient list and displays it. It does not encrypt or send the document.

```javascript
function describeRecipients() {
    var options = {
        bAllowPermGroups: false,
        cNote: "Select the list of recipients. " +
            "Each person must have both an email address and a certificate.",
        bRequireEmail: true, bUserCert: true
    };
    var groups = security.chooseRecipientsDialog(options);
    if (!groups || !groups.length) return null;
    var users = groups[0].userEntities;
    var message = "The document will be encrypted for the following:\n";
    var mailList = [];
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var certificate = user.defaultEncryptCert;
        if (!certificate && user.certificates && user.certificates.length)
            certificate = user.certificates[0];
        if (!certificate) throw new Error("Recipient has no encryption certificate");
        var address = user.email || (certificate.subjectDN && certificate.subjectDN.e);
        if (!address) throw new Error("Recipient has no email address");
        message += certificate.subjectCN + ", " + address + "\n";
        mailList.push(address);
    }
    app.alert(message);
    return { mailList: mailList, message: message };
}
```

Related: [security.chooseRecipientsDialog](choose-recipients-dialog.md).
