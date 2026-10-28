# PropertyBase.matchName

app.project.item(index).layer(index).propertySpec.matchName

### Description

This is a dedicated name the property uses for assembling unique naming paths. It stays out of sight, yet scripts can reference it, and each property carries its own one-of-a-kind match-name identifier. Across releases these names hold steady no matter how the display name (the name attribute value) shifts or what changes land in the application, and unlike the display name they are never localized. While an indexed group might lack a name value, it always carries a matchName. (Indexed groups are of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.)

### Type

String; read-only.
