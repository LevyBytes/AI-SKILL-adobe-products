# loadPolicyFile

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

Points to a cross-domain policy file at whatever location the url parameter names. Policy files serve Acrobat as a permission mechanism that lets PDFs pull data from servers besides their own. Thanks to app.loadPolicyFile(), Acrobat is able to fetch policy files from arbitrary locations, as the example below shows:

```javascript
app.loadPolicyFile("http://www.example.com/sub/dir/pf.xml");
```

Whenever a crossdomain policy check comes up, this prompts Acrobat to pull a policy file from the URL given. Whatever permissions that policy file grants extend to every piece of content sitting at its level or deeper within the server's virtual directory hierarchy. The example carries on with the following code:

```javascript
this.getURL("http://www.example.com/sub/dir/vars.txt", true) // allowed
this.getURL("http://www.example.com/sub/dir/deep/vars2.txt", true) // allowed
this.getURL("http://www.example.com/mydir/vars3.txt", true) // not allowed
```

You may load as many policy files as you like through loadPolicyFile(). Faced with a request that calls for a policy file, Acrobat will always let any policy file downloads finish before it turns that request down. As a last resort, when none of the policy files supplied via loadPolicyFile() permits a request, Acrobat falls back on the original default location, /crossdomain.xml.

Parameters

| Parameter | Description |
| --- | --- |
| url | Where the cross-domain policy file lives, given as a url. The length of url is capped at 1024 bytes; passing a longer string raises an exception. - Unlike many JavaScript for Acrobat methods, this one takes no single object argument whose properties carry the arguments. This method's argument is a string. |

Returns

Nothing
