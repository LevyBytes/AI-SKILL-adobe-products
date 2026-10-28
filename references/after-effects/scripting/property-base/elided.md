# PropertyBase.elided

app.project.item(index).layer(index).propertySpec.elided

### Description

A true value flags this property as an organizing group for other properties. Such a group stays hidden in the interface, and its child properties get no indentation in the Timeline panel. Picture a text layer carrying two animators with nothing twirled open — what you would see is:

- Text
- PathOptions
- MoreOptions
- Animator1
- Animator2

Here, "Animator 1" and "Animator 2" both sit inside a PropertyBase named "Text Animators." Since that parent group never shows up in the interface, neither child is indented in the Timeline panel.

### Type

Boolean; read-only.
