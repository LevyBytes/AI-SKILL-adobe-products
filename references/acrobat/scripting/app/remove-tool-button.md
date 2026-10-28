# removeToolButton

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All

Takes a button you previously placed on the toolbar back off it.

Note

(Acrobat 7.0) Pulling off a toolbutton that addToolButton put there means removeToolButton has to run inside the very same context that addToolButton ran in.

Were no document open in Acrobat at the moment the button went on, then no document may be open in Acrobat at the moment you take the button off. Refer to example 2 further down.

By the same logic, if some particular document held focus as the active one when the toolbutton was added, that identical document must be active for removeToolButton to take the button off.

Should a document be the active one at the time its toolbutton is added, closing that document strips the button away on its own. Consult as well the notes that trail the addToolButton description.

Parameters

Parameter: Description

cName

The identifier that does not depend on language, the one you handed over when addToolButton was called.

Example 1: Refer to the sample that trails addToolButton.

Example 2: Here the button gets removed under the same context addToolButton used. To start, nothing is open in Acrobat. From the console, run the code below:

```javascript
app.addToolButton({cName: "button1", cExec:"app.alert('pressed');",

     cTooltext:"Button1"});
```

Now open a PDF document inside Acrobat and run the following line from the console:

```javascript
app.removeToolButton({cName:"button1"});
```

This throws an exception, and taking the button off does not succeed.

Close that PDF document, run the removeToolButton script once more, and this time the button comes off.
