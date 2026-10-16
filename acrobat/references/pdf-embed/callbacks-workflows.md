# Callbacks & workflows

Callbacks are how the PDF Embed API lets you customize workflows. Register them with the parameters you specify and, as a website developer, you gain a grip on workflows tied to saving files, user profiles, user settings, and the like.

Three parameters accompany every callback:

- Callback type: any one of `SAVE_API`, `STATUS_API`, `GET_USER_PROFILE`,
  `GET_USER_SETTING_API`, or `SET_USER_SETTING_API`
- Function: a JavaScript function that hands back a promise.
- Options: Extra options handed to the callback that steer how it
  behaves in particular situations.

There's a one-callback-per-type limit; you might, say, wire up one callback for save and another for status.

Because `registerCallback` lives on `AdobeDC.View`, the call ends up looking roughly like this:

```javascript
adobeDCView.registerCallback(options);
```

That second parameter is a function handing back a promise that either resolves or fails, carrying a response object made of _code_ and _data_. On a clean run the promise ought to resolve; when something goes wrong it ought to be rejected. Send the matching code along with the promises:

```javascript
async function callbackResponse(operation) {
    const codes = AdobeDC.View.Enum.ApiResponseCode;
    try {
        return { code: codes.SUCCESS, data: await operation() };
    } catch (error) {
        throw { code: codes.FAIL, data: {} };
    }
}
```

Supply operation as a function that performs the callback’s work and returns its documented data payload, or rejects on failure.
