# doScript

> any **doScript**( Mixed **script**, ScriptLanguage **language**, any **withArguments**, UndoModes **undoMode**, String **undoName** )
>
> Executes the script as one transaction in the requested language.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | script | Script to run; accepts File, String or JavaScript Function. |
| ScriptLanguage | language | Script language. When omitted, the language used to call this method is used. (Optional) |
| any | withArguments | Argument array passed to the script. (Optional) |
| UndoModes | undoMode | Undo behavior for this script. (Optional) |
| String | undoName | Undo step name used for entire script undo mode. (Optional) |
