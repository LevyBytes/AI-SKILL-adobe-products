# Field/Calculate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

A change in a form that forces every field carrying a calculation script to run is what defines this event. Each field whose result rides on the changed field's value gets recalculated now. Those fields may, in turn, spawn further Field/Validate, Field/Blur, and Field/Focus events.

One calculated field can hinge on others whose values have to be worked out first. Holding an ordered list of every field in a document that carries a calculation script is the calculation order array. Whenever a full calculation is required, the fields are computed one after another, beginning at the array's zeroth index and running through to its end.

Want a different calculation order for the fields? While in Edit Form mode, reach for the Forms > Edit Fields > Set Field Calculation Order menu item.

The target of this event is whichever field's calculation script is running. It also defines the source and targetName properties.

This one does heed the rc return code. A return code of false leaves the field's value untouched; true assigns the field whatever the value property currently holds.
