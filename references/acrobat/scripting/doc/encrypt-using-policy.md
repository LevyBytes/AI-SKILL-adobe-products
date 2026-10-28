# encryptUsingPolicy

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | Not available in Reader |

Applies encryption to the document by way of a chosen policy object and handler. The call can prompt the user and may end up generating a new security policy.

Note

Only a batch, console, or application initialization event can run this method. Refer also to Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| oPolicy | The policy object that governs the document’s encryption. It might be a SecurityPolicy object handed back by chooseSecurityPolicy or getSecurityPolicies. Alternatively, supply a generic object whose policyId property is set. Passing a predefined policy ID pulls in and applies the matching policy; passing an unrecognized one yields an error. One predefined policy ID behaves specially: setting policyId to “adobe_secure_for_recipients” prompts the Adobe LiveCycle Policy Server to build a fresh policy. (Publishing requires a configured Policy Server.)<br><br>An error comes back if this special policy ID is paired with a null oGroups. |
| oGroups | (optional) An array of Group objects the handler is to apply alongside the policy. Precisely what happens hinges on both the chosen policy and the handler in play. Permission data may ride along inside the Group object; whether it gets honored depends on the policy and its companion security handler. The default value is null. |
| oHandler | (optional) The SecurityHandler object used for encryption. A mismatch between this object and the handler name in the oPolicy object causes failure. Leave it out and the handler’s default object steps in. With the APS security handler, you can spin up a new SecurityHandler in advance, authenticate through the login call to a server Acrobat is not set up for, and then feed that SecurityHandler in via oHandler — opening the door to policies absent from the server Acrobat targets. With the PPKLite security handler, you could likewise build a SecurityHandler ahead of time, open a digital ID file Acrobat is not configured with through the login call, and pass it in via oHandler — letting you tap certificates held in that digital ID file but not in Acrobat. |
| bUI | (optional) When true, the interface may appear (say, for authentication). When false, no interface shows. An error returns if interaction becomes necessary yet stays disallowed. The default value is false. |

Returns

What comes back is a SecurityPolicyResults object, carrying the properties below.

| Property | Type | Description |
| --- | --- | --- |
| errorCode | Integer | The error code handed back by the handler that implements the policy. Three outcomes are possible:<br><br>0 = Success.<br><br>errorText is not defined.<br><br>unknownRecipients may be defined.<br><br>policyApplied is defined.<br><br>1 = Failure.<br><br>errorText is defined.<br><br>unknownRecipients may be defined.<br><br>policyApplied is not defined.<br><br>2 = Abort, the user aborted the process.<br><br>errorText is not defined.<br><br>unknownRecipients is not defined.<br><br>policyApplied is not defined. |
| errorText | String | The localized description of the error, when present. Consult errorCode for the conditions under which it is set. |
| policyApplied | Object | The SecurityPolicy object that was applied, when present. Where the supplied policy was “adobe_secure_for_recipients”, the call minted a new policy and the matching policy object surfaces here. Consult errorCode for the conditions under which it is set. |
| unknownRecipients | Recipients object | Recipients that were supplied but could not be honored while applying the policy, when present. Consult errorCode for the conditions under which it is set. |

Example 1: Apply encryption to a just-created document by way of a policy you pick.

```javascript
var doc = app.newDoc();
var policy = security.chooseSecurityPolicy();
var results = doc.encryptUsingPolicy( { oPolicy: policy } );
if ( results.errorCode == 0)
    console.println("The policy applied was: " + results.policyApplied.name);
```

Example 2: Encrypt a newly created document using a template policy. (A LiveCycle Policy Server must be configured for publishing before running this example.)

```javascript
var doc = app.newDoc();
var groups = [ { userEntities: [{email:"jdoe@example.com"},

     {email:"bsmith@example.com"} ]}
];
var policy = { policyId: "adobe_secure_for_recipients" };
var results = doc.encryptUsingPolicy({
    oPolicy: policy,
    oGroups: groups,
    bUI: true
});
if ( results.errorCode == 0)
    console.println("The policy applied was: "
        + results.policyApplied.name);
```
