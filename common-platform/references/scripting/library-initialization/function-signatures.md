# Function signatures

When you return function name-signature strings, each string ties a function name to that function's parameter types, when types are present. For example:

```javascript
["functionName1_argtypes", "functionName2_argtypes", "functionName3"]
```

Each string starts with the function name. After that comes an underscore character and a list of argument data types, with one character for each argument. For functions without arguments, the final underscore can be left off unless the function name itself contains an underscore.

The characters that identify data types are:

| Characeter | Description |
| --- | --- |
| a | Any type. No conversion is performed. This is the default when no type is supplied or when an unrecognized type code is used. |
| b | Boolean |
| d | signed 32 bit integer |
| u | unsigned 32 bit integer |
| f | 64 bit floating point |
| s | String |

For example, suppose your library defines these two entry points:

Reference data, output or notation; not an executable JavaScript program.

```text
One (Integer a, String b);
Two ();
```

These two functions therefore use the signature strings "One_ds", "Two".

Warning

Do not return multiple signatures for a single function to model function overloading.

Doing so produces undefined results.
