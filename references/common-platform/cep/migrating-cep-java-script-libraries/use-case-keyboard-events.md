# Use Case: Keyboard Events

CEP lets an extension register interest in particular keyboard events so those events do not go straight to the host application, which enables custom callback handling. UXP does not offer equivalent global keyboard-event registration. A UXP plugin can focus a control inside a panel and listen for several keyboard-press types, but it cannot globally override shortcuts. To ask for this capability, post in the [UXP developer forums](https://forums.creativeclouddeveloper.com/t/how-to-set-a-keyboard-shortcut-for-a-photoshop-uxp-plugin/3236).
