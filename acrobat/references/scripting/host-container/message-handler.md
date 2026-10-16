# messageHandler

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.05 | No | No | All | Object | R/W |

A notification object invoked whenever a script in the host container fires the postMessage method. The methods and properties this object may surface include:

| Method/Property | Description |
| --- | --- |
| onMessage | (Optional) A method invoked in answer to postMessage. Delivery of the message is asynchronous. A single array parameter — the same array handed to postMessage — is passed to the method. |
| onError | (Optional) A method invoked in answer to an error. It receives an Error object plus an array of strings matching the message that triggered the error. On that Error object, the name property holds one of these:<br><br>"MessageGeneralError": Some general failure took place.<br><br>"MessageNotAllowedError": Security grounds blocked the operation. Should an error arise while this property remains undefined, that error never reaches you — errors, unlike messages, get no queue. |
| onDisclose | A mandatory method invoked to settle whether the host application may send messages to the document. This hands the PDF document author control over the security conditions under which messaging is allowed. Set the method during the Doc/Open event. Two parameters reach the method:<br><br>cURL: The URL pointing at where the host container lives (say, the URL of an HTML page that uses an &lt;OBJECT&gt; tag).<br><br>cDocumentURL: The URL of the PDF document whose disclosure is under review. Return true from the method, and the host container may post messages to the message handler. |
| allowDeliverWhileDocIsModal | A Boolean marking whether messages and errors reach their handlers while the document sits in a modal state. By default (false), messages and errors are held in a queue and kept from the onMessage and onError handlers whenever the application has a modal dialog up. Detect that situation with the app.isModal property. |

Note

Rather than a method, onDisclose can instead carry the value HostContainerDisclosurePolicy.SameOriginPolicy, by which the document is disclosed to the host container only when the two share an origin. Origin here is judged by scheme, server, and port together. For disclosure to occur, the scheme has to be http, https, or ftp.

Whenever these methods run, this resolves to the messageHandler instance the method is being called on.

You may bolt additional methods and properties onto messageHandler so long as none of their names start with on.

Set messageHandler to null, or to an object lacking an onMessage method, and any messages posted by postMessage stack up in a queue until the property holds a valid messageHandler instance.

Delivery order is guaranteed: messages arrive in the order posted, and errors arrive in the order they occurred. Across the two streams, though, no ordering relationship exists between messages and errors.

Any exception thrown inside the handler methods is thrown away. An exception escaping onDisclose is read as a failure of that function. No messages or errors get delivered while execution sits inside an onMessage / onError / onDisclose handler.

Example: A catch-all message handler for the host container.

```javascript
this.hostContainer.messageHandler =
{
    onMessage: function(aMessage)
    {
        for(var i = 0; i < aMessage.length; i++)
         console.println("Recv'd Msg[ " + i + "]: " + aMessage[i]);
    },
    onError: function(error, aMessage){ },
    onDisclose: HostContainerDisclosurePolicy.SameOriginPolicy
};
```
