# SecurityHandler.login

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Opens a route for getting at and choosing digital IDs for one particular Security Handler. From the user interface you can pick a default digital ID that sticks around either forever or just while the application stays open. Once such a pick is made through the UI, logging into a Security Handler before using the digital ID may no longer be needed.

Which parameters apply tends to hinge on the specific handler. What the Adobe.PPKLite and Adobe.PPKMS handlers do is laid out below.

For backward compatibility you may pass cPassword and cDIPath, or alternatively fold them in as properties of the oParams object. That second route became the calling convention of choice as of Acrobat 6.0.

Compare also logout, newUser, and loginName.

Parameters

| Parameter | Description |
| --- | --- |
| cPassword | (optional, Acrobat 5.0) Whatever password unlocks the password-protected digital ID. To get at digital ID files and at PKCS#11 devices, Adobe.PPKLite leans on this parameter. |
| cDIPath | (optional, Acrobat 5.0) A device-independent path aimed at either the password-protected digital ID file or a PKCS#11 library. Adobe.PPKLite leans on this parameter. |
| oParams | (optional, Acrobat 6.0) A LoginParameters object whose parameters are tailored to one particular SecurityHandler object. Its shared fields appear below. Because those fields take in the cDIPath and cPassword values, the parameter list can be written several ways. |
| bUI | (optional, Acrobat 6.0) Flip to true to log the user in through the user interface. Leave it false and the default engine tied to the user interface stays out of play, with the digital ID's logged in state kept off the Security Settings dialog box. Any security handler backing this method ought to back this attribute. |

Hands back true once the login goes through, false if it does not.

LoginParameters Object

Parameters for the login method ride inside this generic JavaScript object. Its properties are:

| Property | Type | Version (Key) | Description |
| --- | --- | --- | --- |
| cDIPath | String | 5.0 | Points at a file holding the digital ID or a PKCS#11 library. Backed by the Adobe.PPKLite security handler. |
| cPassword | String | 6.0 | A password that authenticates the user. It can open a password-protected digital ID file or reach a PKCS#11 device. Backed by the Adobe.PPKLite security handler. Keep in mind that Acrobat makes no promise about obfuscating this password in memory. |
| cPFX | String | 7.0 | (optional) A hex-encoded PFX serving as the login target. Hand it over and it wins out over cDIPath. Its use is internal only. As things stand, JavaScript gives you no route to pull a hex encoded PFX file. |
| oEndUserSignCert | generic object | 6.0 | Picks a digital ID meant for end-user signing. What you assign is a Certificate object — or a generic object whose property names match a Certificate object's — and it pins down the certificate being picked.<br><br>A given handler may not require this method at all. Say you are logged in with Adobe.PPKLite to a PKCS#12 file that holds one signing digital ID: no signing credential needs picking. The binary and SHA1Hash properties of this object must be processable by every security handler. Where bUI is true, this object is allowed to be empty. |
| cMsg | String | 6.0 | Text to surface in the login dialog box whenever bUI is true. |
| cURI | String | 7.0 | URI for reaching a server. Backed by the Adobe.APS and Adobe.PPKLite handlers. For Adobe.PPKLite, the URI names a Roaming Credential server. |
| cUserId | String | 7.0 | The user name applied when reaching a server. Backed by the Adobe.APS and Adobe.PPKLite handlers. |
| cDomain | String | 7.0 | The domain name applied when reaching a server. Only the Adobe.APS handler backs it. |
| iSlotID | Integer | 7.0 | Names the slot ID of a PKCS#11 device to log into. Only the Adobe.PPKLite handler backs this parameter. |
| cTokenLabel | String | 7.0 | Names the token label of a PKCS#11 device to log into. Only the Adobe.PPKLite handler backs this parameter. |

Related references:

- [Signing-handler login and credential selection](signing-handler-login.md)
- [Windows signing credentials](windows-signing-credentials.md)
- [Encryption-handler login and cleanup](encryption-handler-login.md)
