# Sequence.autoReframeSequence()

app.project.sequences[index].autoReframeSequence(numerator, denominator, motionPreset, newName, useNestedSequences)

### Description

Creates an auto-reframed sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| numerator | Integer | Numerator for the target frame aspect ratio. |
| denominator | Integer | Denominator for the target frame aspect ratio. |
| motionPreset | String | One of: - slower - default - faster |
| newName | String | Name assigned to the sequence that is created. |
| useNestedSequences | Boolean | Whether nested sequences should be honored. |

### Returns

Returns the Sequence object that was generated.

### Example

```javascript
var sequence = app.project.activeSequence;
if (sequence) {
    var numerator = 1;
    var denominator = 1;
    var motionPreset = 'default'; // 'default', 'faster', 'slower'
    var newName = sequence.name + ', auto-reframed.';
    var useNestedSequences  = false;

    var newSequence = sequence.autoReframeSequence(numerator, denominator, motionPreset, newName, useNestedSequences);

    if (newSequence) {
        alert('Created reframed sequence: ' + newName + '.');
    } else {
        alert('Failed to create re-framed sequence: ' + newName + '.');
    }
} else {
    alert('No active sequence');
}
```
