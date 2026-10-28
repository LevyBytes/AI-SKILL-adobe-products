# marker.key(index)

Return type: MarkerKey.

Argument type: index is a Number.

Hands back the MarkerKey object for the marker at the given index. That index tracks where the marker falls in composition time rather than what the marker is named. As a sample, the expression below yields the time of the first composition marker:

thisComp.marker.key(1).time

### marker.key(name)

Return type: MarkerKey.

Argument type: name is a String.

Hands back the MarkerKey object for the marker carrying the given name. The name value matches whatever was typed into the comment field of the marker dialog box, such as marker.key("1"). Composition markers default to a numeric name. When several markers in the composition share a name, the one earliest in composition time is returned. A marker key's value is a String rather than a Number. For instance, this expression yields the time of the composition marker named "0":

thisComp.marker.key("0").time


Return type: MarkerKey.

Argument type: index is a Number.

Hands back the MarkerKey object for the layer marker at the given index.

### marker.key(name)

Return type: MarkerKey.

Argument type: name is a String.

Hands back the MarkerKey object for the layer marker carrying the given name. The name value matches whatever was typed into the comment field of the marker dialog box, such as marker.key("ch1"). When several markers on the layer share a name, the one earliest in layer time is returned. A marker key's value is a String, not a Number.

Placed on a property, this expression ramps that property's value from 0 to 100 across the span between two markers named individually:

m1 = marker.key("Start").time; m2 = marker.key("End").time; linear(time, m1, m2, 0, 100);
