# The XML Object — Modifying XML elements and attributes

Assigning a value to the matching property changes an element.

- Assigning an XML element replaces the element. When more than one element of that type exists, the first one is replaced and the rest are removed.
- Assigning a non-XML value converts it to a string, then replaces the element's content with that string.
- If the XML has no element of that type, a new element is appended.

Attribute values can be changed with the same technique.
