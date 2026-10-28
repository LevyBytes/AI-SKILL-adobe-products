# Listing recipient groups and permissions

Example 3: List all the entries in an array of groups.

Pass the DisplayOptions object explicitly. Cancellation does not dereference a missing group list.

```javascript
function listRecipientGroups(options) {
    var groups = security.chooseRecipientsDialog(options);
    if (!groups) return false;
    for (var g = 0; g < groups.length; g++) {
        console.println("Group No. " + g);
        var permissions = groups[g].permissions || {};
        console.println("Permissions:");
        for (var permission in permissions)
            console.println(permission + " = " + permissions[permission]);
        var users = groups[g].userEntities;
        for (var u = 0; u < users.length; u++) {
            console.println("User No. " + u);
            var user = users[u];
            for (var field in user)
                console.println(field + " = " + user[field]);
        }
    }
    return true;
}
```

Related: [security.chooseRecipientsDialog](choose-recipients-dialog.md).
