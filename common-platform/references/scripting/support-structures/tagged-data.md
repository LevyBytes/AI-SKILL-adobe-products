# TaggedData

TaggedData carries data values between JavaScript and shared-library C/C++ code. Types convert automatically when suitable:

```cpp
typedef struct {
    union {
        long intval;
        double fltval;
        char* string;
        SoHObject* hObject;
    } data;
    long type;
    long filler;
} TaggedData;
```

### Parameters

| Parameter | Description |
| --- | --- |
| intval | Integer and boolean data values. Type is kTypeInteger, kTypeUInteger, or kTypeBool. |
| fltval | Floating-point numeric data values. Type is kTypeDouble. |
| String | String data values. All strings are UTF-8 encoded and null-terminated. Type is kTypeString or kTypeScript. - The library needs an ESFreeMem() entry point so ExtendScript can release string pointers returned from the library. Without that entry point, returned string data is not released by ExtendScript. - For a returned string whose type is kTypeScript, ExtendScript evaluates the script and makes the evaluation output the function-call result. |
| hObject | JavaScript object data value represented in C/C++ form. Type is kTypeLiveObject or kTypeLiveObjectRelease. - When a returned object uses kTypeLiveObject, ExtendScript leaves the object unreleased. - When a returned object uses kTypeLiveObjectRelease, ExtendScript releases it. |
| type | The data type tag. One of: - kTypeUndefined: null value equivalent to JavaScript undefined. A function return value defaults to this setting. - kTypeBool: boolean value, 0 for false, 1 for true. - kTypeDouble: 64-bit floating-point number. - kTypeString: character string. - kTypeLiveObject: pointer to an internal object representation (SoHObject). - kTypeLiveObjectRelease: pointer to an internal object representation (SoHObject). - kTypeInteger: 32-bit signed integer value. - kTypeUInteger: 32-bit unsigned integer value. - kTypeScript: string containing an executable JavaScript script. |
| filler | 4-byte filler used to keep 8-byte alignment. |
