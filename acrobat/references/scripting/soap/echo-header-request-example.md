# SOAP echo-header request example

Example 2: Set a SOAP Header and gets it back.

Pass the endpoint of a compatible SOAP test service. The historical service-discovery address is not an assumption that a live endpoint is available.

```javascript
function requestEchoHeaders(cURL) {
var NS = "http://www.example.com/soap/:";
var oHeader = {};
oHeader[NS + "testSession"] =
{
    soapType: "xsd:string",
    soapValue: "Header Test String"
};
var oResultHeader = {};
var oRequest = {};
oRequest[NS + "echoHeader"] = {};
var response = SOAP.request(
{
    cURL: cURL,
    oRequest: oRequest,
    cAction: "http://soapinterop.org/",
    oReqHeader: oHeader,
    oRespHeader: oResultHeader
});

}
```

Related: [SOAP.request](request.md).
