# Debugging in the Toolkit - Tracking data

The Data Browser panel exposes the JavaScript engine's live data. In the current context, it lists variables and their current values. When execution is stopped at a breakpoint, it shows variables declared with var in the current function, plus the function arguments. To view variables from the global scope or a calling scope, change context through the Call Stack (see The call stack).

Variable values can be inspected and changed in the Data Browser. - Click a variable name; the edit field at the top of the panel receives that variable's current value. - To change the value, type a replacement and press ENTER. For a Read only variable, the edit field is disabled.

The panel's flyout menu controls how much data is shown:

- Undefined Variables toggles variables whose value is undefined rather than null.
- Functions toggles functions attached to objects. In many cases, the most relevant data inside an object are its callable methods.
- Core JavaScript Elements toggles standard JavaScript-language data, including the Array constructor and the Math object.
- Prototype Elements toggles the JavaScript object prototype chain.

A small icon beside each variable identifies its data type. When an object reference points to an object that has been deleted, it is invalid and its object icon is crossed out in red. Undefined values have no icon.

| Icon | Status |
| --- | --- |
|  | Boolean |
|  | Number |
|  | String |
|  | Object |
|  | Method |
|  | null |

Click an object's icon to inspect its contents. The list expands to show the object's properties, and methods too when Functions display is enabled, while the triangle points downward to show that the object is open.
