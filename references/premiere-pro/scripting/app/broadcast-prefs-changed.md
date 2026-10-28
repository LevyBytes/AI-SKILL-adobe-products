# app.broadcastPrefsChanged()

app.broadcastPrefsChanged()

### Description

Signals to Application that preferences changed.

### Parameters

String ID for the changed preference. (currently only listens to "BE::PreferencesScratchDisksChanged")

### Returns

Returns true when the update succeeds.

### Example

```javascript
app.broadcastPrefsChanged("BE::PreferencesScratchDisksChanged");
```
