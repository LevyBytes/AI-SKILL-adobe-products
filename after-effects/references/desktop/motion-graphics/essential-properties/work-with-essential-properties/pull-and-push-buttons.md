# Pull and Push buttons

Adjusting an essential property switches on the Pull and Push buttons within the Timeline panel, and the essential property's name shifts to bold. Together those two cues signal that a property has been unlinked.

Relinking an essential property back to its source property is exactly what the Pull and Push buttons accomplish. A separate pair of Pull and Push buttons exists per essential property, plus one pair covering the whole Essential Properties group.

Pull

Choosing Pull throws away the essential property's edited value, keyframes, and expression.

Push

Choosing Push sends the essential property's edited value, keyframes, and expression onto the source property.

Once you click either Pull or Push, the essential properties reconnect to their source properties and the buttons grey out again. Pull and Push buttons

A. Linked Essential Properties (Pull and Push buttons disabled) B. Unlinked Essential Properties (Pull and Push buttons enabled)

Pull and Push buttons

Pushing an edited essential property back onto the source property propagates the change to every instance of that same primary composition, provided the matching essential property stays linked. Say you build a primary composition for a credit roll, drop it in several times, and tweak only one precomposition's color essential property. Pushing that fresh color value back to the source value makes all instances of the primary composition render in the updated color.

Those same Push and Pull buttons surface in the Properties panel too whenever a property has been modified.

Push and Pull options in the Properties panel
