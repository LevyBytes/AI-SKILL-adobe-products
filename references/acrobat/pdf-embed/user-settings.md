# User settings

To recolor an annotation, a user clicks the PDF annotation and swaps its color from the toolbar. From then on, every fresh annotation of that type picks up the new color. On top of that, the first time anyone selects an annotation tool, a coach mark surfaces to explain it and then fades out after a few seconds.

In the old default behavior, these user preferences worked by having the browser hold onto the changed annotation color along with whether a given tool's coach mark had already shown. That came from stashing the data in the local storage of the PDF Embed API domain. That approach is now deprecated, and the PDF Embed API no longer keeps the data.

What this means by default is that the preferences vanish on a PDF reload: the changed annotation color is forgotten (so the default color applies instead) and users meet the annotation tool coach marks all over again when the PDF reloads.

Website developers can sharpen this experience by registering the user setting callbacks. Two of them come into play:

- `SET_USER_SETTING_API`: Persists settings specific to the user.
- `GET_USER_SETTING_API`: Pulls back the current user setting.

These callbacks let developers roll their own implementation and stash the user preferences anywhere they please.

**User settings callback signature**

```javascript
function registerUserSettings(view, saveSetting, readSetting) {
    const enums = AdobeDC.View.Enum;
    view.registerCallback(enums.CallbackType.SET_USER_SETTING_API, async setting => {
        try {
            await saveSetting(setting);
            return { code: enums.ApiResponseCode.SUCCESS };
        } catch (error) {
            throw { code: enums.ApiResponseCode.FAIL, data: {} };
        }
    }, {});
    view.registerCallback(enums.CallbackType.GET_USER_SETTING_API, async () => {
        try {
            const setting = await readSetting();
            return { code: enums.ApiResponseCode.SUCCESS, data: { setting } };
        } catch (error) {
            throw { code: enums.ApiResponseCode.FAIL, data: {} };
        }
    }, {});
}
```

saveSetting persists the received setting; readSetting returns it. Both may be asynchronous. Supply application storage functions; this example does not choose or configure storage.

Grab the working code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Save User Preferences/`. That sample puts the user
setting callbacks to work saving preferences in the website domain's local
storage. With it in place, the browser hangs onto the changed annotation color and
surfaces the coach mark just one time for each annotation tool in the current browser.

Treat this as nothing more than an example; the actual way of saving the user preferences is entirely the website developer's call.
