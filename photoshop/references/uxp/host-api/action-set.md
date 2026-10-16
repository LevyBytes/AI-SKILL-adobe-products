# ActionSet

Photoshop Actions

Manages content in the Actions panel.
The Actions panel contains a hierarchy of Action Sets, and each Action Set holds a list of Actions

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| actions | [_Action_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/action.md)[] | R | 22.1 | List of Actions in this Action Set |
| id | _number_ | R | 22.1 | The internal ID of this Action Set Can be used for batchPlay calls, used internally |
| index | _number_ | R | 22.1 | Zero-based index of this Action Set in the Actions palette |
| name | _string_ | R W | 22.1 | The name of this Action Set, displayed in the panel |
| typename | _string_ | R | 23.0 | The class name of the referenced object: _"ActionSet"_. |

### Methods
