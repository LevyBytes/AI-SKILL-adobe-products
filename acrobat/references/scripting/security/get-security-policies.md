# getSecurityPolicies

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | Not available in Reader |

Hands back whatever security policies are presently in scope, narrowed by the options you pass. Right before the filtering happens, the underlying master list of policies gets refreshed. The default SecurityHandler objects do the work of fetching the most recent policies. Should nothing qualify — either none exist or none survive the filter — the result is null.

Note

Calling login on the default SecurityHandler objects first can surface additional policies that would otherwise be missed.

This runs solely within a console event or an application initialization event, and Adobe Reader does not provide it.

Parameters

| Parameter | Description |
| --- | --- |
| bUI | (optional) Governs whether the UI is permitted to appear. The fallback is false. |
| oOptions | (optional) A SecurityPolicyOptions object holding the criteria applied when narrowing the returned policy list. Leave it out and every policy that turns up is handed back. |

Returns

An array of SecurityPolicyOptions objects or null.

SecurityPolicyOptions object

These are the properties carried by a SecurityPolicyOptions object:

| Property | Description |
| --- | --- |
| bFavorites | Omit it and Favorite status plays no part in the filtering. Set it true and only Favorite policies come back; set it false and only non-Favorite policies come back. |
| cHandler | Omit it and the security filter plays no part in the filtering. Supply it and only policies matching that security filter are returned. Allowed entries live in security Constants (consult the HandlerName object). Pass at most one value. |
| cTarget | Leave it undefined and the target plays no part in the filtering. Define it and only policies whose target matches are returned. Allowed entries live in the EncryptTarget object of security constants. Pass at most one value. |

Example 1: Pull the favorite PPKLite policies and print each name. Here security.PPKLiteHandler is used (consult security constants).

```javascript
var options = { bFavorites:true, cHandler:security.PPKLiteHandler };
var policyArray = security.getSecurityPolicies( { oOptions: options } );
for( var i = 0; i < policyArray.length; i++)
    console.println( policyArray[i].name );
```

Example 2: Drive the login, then grab the APS policies and print each name. Here security.APSHandler is used (consult security constants).

```javascript
var aps = security.getHandler( security.APSHandler, true );
aps.login();
var options = { cHandler: security.APSHandler };
var policyArray = security.getSecurityPolicies({
    bUI: true,
    oOptions: options });
for(var i = 0; i < policyArray.length; i++)
    console.println( policyArray[i].name );
```
