# Action

Models one Action in the Actions palette.
An Action is a sequence of commands a user can record and replay later.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| id | _number_ | R | 22.1 | The internal ID of this Action Can be used for batchPlay calls, used internally |
| index | _number_ | R | 22.1 | Zero-based index of this Action in it's parent Action Set |
| name | _string_ | R W | 22.1 | The name of this Action, displayed in the panel Cannot be changed |
| parent | [_ActionSet_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/actionset.md) | R | 22.1 | The Action Set this Action belongs to |
| typename | _string_ | R | 23.0 | The class name of the referenced object: _"Action"_. |

### Methods
