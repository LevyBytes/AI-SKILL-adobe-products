# SoCClientName

For JavaScript objects created by shared-library C/C++ code, SoCClientName stores identity data for methods and properties. Definition:

```cpp
SoCClientName {
    char* name_sig ;
    uint32_t id ;
    char* desc ;
}
```

### Parameters

| Parameter | Description |
| --- | --- |
| name_sig | Name of the property or method, unique within the class. It may include a signature after an underscore to identify argument types for methods; see Function signatures. When names are passed back to SoObjectInterface functions, the signature portion is omitted. |
| id | Unique identifying number for the property or method, or 0 to request a generated UID. If your code supplies the UID, it can avoid string comparisons while identifying JavaScript properties and methods. Either assign every UID explicitly or allow all of them to be generated. |
| desc | Descriptive string or NULL. |
