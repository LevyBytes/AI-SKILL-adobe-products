# SOAP request-object contract

Additional notes on the oRequest parameter

For the oRequest parameter you pass an object literal naming the remote procedure together with the parameters to invoke. Keyed by the remote procedure's fully qualified method name, the literal expects a colon to divide the namespace from the method name.

To illustrate: with a method namespace of http://mydomain/methods and a method name of echoString, the fully qualified form becomes http://mydomain/methods:echoString. That key maps to a nested object literal whose keys are the method's parameters and whose values supply each parameter's value. For example:

```javascript
oRequest: {
    "http://soapinterop.org/:echoString":{inputString: "Echo!"}
}
```

As parameters travel to a remote procedure, the runtime maps JavaScript types onto SOAP types on its own, following this table:

| JavaScript type | SOAP type |
| --- | --- |
| String | xsd:string |
| Number | xsd:float |
| Date | xsd:dateTime |
| Boolean | xsd:boolean |
| ReadStream object | SOAP-ENC:base64 |
| Array | SOAP-ENC:Array |
| Other | No type information |

Note

Here the xsd namespace points at the XML Schema Datatypes namespace http://www.w3.org/2001/XMLSchema, while SOAP-ENC points at the SOAP Encoding namespace http://schemas.xmlsoap.org/soap/encoding/.

These properties are recognized on the oRequest object:

| Property | Description |
| --- | --- |
| soapType | Selects the SOAP type applied to the value as the SOAP message is built. This helps whenever you need a datatype other than the automatic binding covered above. Qualify the type with a namespace using the &lt;namespace&gt;:&lt;type&gt; form — for instance http://mydomain/types:myType. Because the xsd (XMLSchema Datatypes), xsi (XMLSchema Instance), and SOAP-ENC (SOAP Encoding) namespaces are already implicit in the SOAP message, soapType may reference them directly, as with xsd:int for the XMLSchema Datatype Integer type. |
| soapValue | (Acrobat 6.0) Supplies the value placed into the generated SOAP message; it may be a string or a ReadStream object. Note that soapValue goes in unescaped — it is not XML Entity escaped — so a “<” stays “<” rather than becoming “<” in the XML Message. That means you can hand soapValue a raw XML fragment to drop straight into the XML Message. (Acrobat 7.0) soapValue may additionally take an array of nodes — these become, in order, the child nodes belonging to the request message's node. |
| soapName | Overrides the key name from the object literal with the element name used when the SOAP message is generated. As an example, JavaScript has no integers, yet you can build an integer parameter for a SOAP method like so: var oIntParameter = { soapType: “xsd:int”, soapValue: “1” }; The oRequest parameter handed to SOAP.request could then read: oRequest: { “http://soapinterop.org/:echoInteger”: { inputInteger: oIntParameter } } This approach is demonstrated in Example 1 below. |
| soapAttributes | (Acrobat 7.0) An object listing XML attributes to attach when the element for the request node is constructed. Each object key is an attribute name and its value is that attribute's value. |
| soapQName | (Acrobat 7.0) An object giving the namespace qualified name (QName) for the request node. Take the element <ns:local xmlns:ns="urn:example.org">: its name is a QName built from a local name ("local") plus a namespace ("urn:example.org"). Two properties live on this object:<br><br>localName: A string giving the QName's local name.<br><br>nameSpace: A string giving the QName's namespace. |
| soapAttachment | (Acrobat 7.0) A Boolean flag declaring that the node's soapValue contents are to be encoded as an attachment per the SwA specification. Whenever soapAttachment is true the matching soapValue has to be a stream; if it is not, an exception results. |
| soapParamOrder | (Acrobat 7.0) An array fixing the sequence in which RPC parameters reach the server. It holds strings naming the parameters. This setting only takes effect while bEncoding is true. |

Related: [SOAP.request](request.md).
