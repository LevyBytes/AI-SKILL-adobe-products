# JavaScript APIs — Error

Any time an exception gets thrown from a method or property written in JavaScript, an Error object is created on the fly. Core JavaScript itself can raise several Error subclasses — EvalError, RangeError, SyntaxError, TypeError, ReferenceError, URLError — all of which take the Error object as their prototype. JavaScript may raise some of these directly or, as it sees fit, derive its own subclasses of the Error object. Where your scripts lean on try/catch handling, expect the thrown object to be one of the types in the table that follows.

| Error object | Brief description |
| --- | --- |
| RangeError | Argument value is out of valid range. |
| TypeError | Wrong type of argument value. |
| ReferenceError | Reading a variable that does not exist. |
| MissingArgError | Missing required argument. |
| NumberOfArgsError | Invalid number of arguments to a method. |
| InvalidSetError | A property set is not valid or possible. |
| InvalidGetError | A property get is not valid or possible. |
| OutOfMemoryError | Out of memory condition occurred. |
| NotSupportedError | Functionality not supported in this configuration (for example, Adobe Reader). |
| NotSupportedHFTError | HFT is not available (a plug-in may be missing). |
| NotAllowedError | Method or property is not allowed for security reasons. |
| GeneralError | Unspecified error cause. |
| RaiseError | Acrobat internal error. |
| DeadObjectError | Object is dead. |
| HelpError | User requested for help with a method. |

Whatever Error object types JavaScript implements pick up their properties and methods from the core Error object. Certain JavaScript objects might define exception types all their own. When an Error subclass adds methods or properties of its own, that belongs in the documentation for the specific object.

Example: Print all properties of the Error object to the console.

```javascript
try {
    app.alert(); // one argument is required for alert
} catch(e) {
    for (var i in e)
    console.println( i + ": " + e[i])
}
```
