# response

Version (Key): 3.01 | Save-Prefs: No | Security: No | Product: All

Puts up a dialog box that poses a question alongside a field where the user can type an answer.

Parameters

Parameter: Description

cQuestion

The question put to the user.

cTitle

(optional) The title shown on the dialog box.

cDefault

(optional) A starting value for the answer. Leave it out and no default gets shown.

bPassword

(optional) When true, the user's typing is masked behind asterisks (\*) or bullets (•), handy where the entry could be sensitive. It defaults to false.

cLabel

(optional, Acrobat 6.0) A brief string placed just ahead of the edit text field, sharing its line.

Returns

A string holding what the user typed. Should the user press the Cancel button, what comes back is the null object.

Example: Prompt the user for an answer, then echo that answer back.

```javascript
var cResponse = app.response({
    cQuestion: "How are you today?",
        cTitle: "Your Health Status",
        cDefault: "Fine",
        cLabel: "Response:"
});
if (cResponse == null)
    app.alert("Thanks for trying anyway.");
else
    app.alert('You responded, "'+cResponse+'", to the health '
        + "question.",3);
```
