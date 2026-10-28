# Working with modal dialogs

A dialog usually contains controls the user works with so the script can collect selections or entered values. Sometimes the user's result is stored on the control object and can be read after dismissal. For example, when the user changes a Checkbox or RadioButton, the updated state is available from the control's value property.

When a script must react while the dialog remains open, assign the relevant control a callback for the interaction event, such as onClick or onChange. That callback function becomes the control's onClick or onChange property value.

For example, validation of a value entered in an edittext control can happen inside that control's onChange callback handler. The callback may run the validation and display an alert when the user must correct errors.

In some modal dialogs, user choices must be valid before the script permits dismissal. To validate the dialog state after OK is clicked, define an onClose event handler for the dialog. This callback runs whenever a window is closing. Returning true allows the window to close; returning false cancels the close operation and leaves the window open.

An onClose handler can inspect any dialog control states for validity, then use alert messages or other modal dialogs to report problems that must be fixed. It can return true to dismiss the dialog, or false to keep the dialog open for correction.
