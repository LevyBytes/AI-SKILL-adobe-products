# SOAP echo-value request example

Example 1: Kick off an RPC against echo services by way of request.

You will need a service WSDL Document URL; pull one from the “Round 2 Interop Services - using SOAP 1.2” section over at http://www.whitemesa.com/interop.htm .

Pass the endpoint of a compatible SOAP test service. The historical service-discovery address is not an assumption that a live endpoint is available.

```javascript
function requestEchoValues(cURL) {
var cTestString = "This is my test string";

   // Call the echoString SOAP method -- it is an RPC Encoded method
   var response = SOAP.request(
   {
       cURL: cURL,
       oRequest: {
           "http://soapinterop.org/:echoString": {
               inputString: cTestString
           }
       },
       cAction: "http://soapinterop.org/"
   });

   var result =

    response["http://soapinterop.org/:echoStringResponse"]["return"];

   // This should be the same as cTestString
   console.println(result + " == " + cTestString);

   // Call the echoInteger SOAP method -- JavaScript doesn't support
   // integers so we make our own integer object.
   var oTestInt =
   {
       soapType: "xsd:int",
       soapValue: "10"
   };

   var response = SOAP.request(
   {
       cURL: cURL,
       oRequest: {
           "http://soapinterop.org/:echoInteger": {
               inputInteger: oTestInt
           }
       },
       cAction: "http://soapinterop.org/"
   });

   var result =

    response["http://soapinterop.org/:echoIntegerResponse"]["return"];

   // This should be the same as oTestInt.soapValue
   console.println(result + " == " + oTestInt.soapValue);

}
```

This produces the following output:

Reference data, output or notation; not an executable JavaScript program.

```text
This is my test string == This is my test string
10 == 10
```

Related: [SOAP.request](request.md).
