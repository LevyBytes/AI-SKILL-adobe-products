# User Profiles

Through the user profile callback you get to hand over profile details like first name, last name, and email address. Skip registering a user profile callback and the comments panel labels the user "Guest" by default.

[Figure: User being referred to as guest](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/userprofile-new.png)

Register that callback and a user's annotations then carry their matching username.

[Figure: User being referred with correct username](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/userprofile1.png)

**User profile callback signature**

```javascript
function registerUserProfile(view, userProfile) {
    const enums = AdobeDC.View.Enum;
    view.registerCallback(enums.CallbackType.GET_USER_PROFILE_API, async () => ({
        code: enums.ApiResponseCode.SUCCESS,
        data: { userProfile }
    }), {});
}
```

userProfile supplies the documented name, firstName, lastName and email fields. Use the current user’s authorized profile data.
