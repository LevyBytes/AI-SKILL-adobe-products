# SOAP echo-service connection example

Example: Echo a string and an integer using an echo service WSDL document.

You will need a service WSDL Document URL. Grab one from the "Round 2 Interop Services - using SOAP 1.2" section at this address: http://www.whitemesa.com/interop.htm .

Pass the endpoint of a compatible SOAP test service. The historical service-discovery address is not an assumption that a live endpoint is available.

```javascript
function connectEchoService(cURL) {
// Connect to the test service
   var service = SOAP.connect(cURL);

   // Print out the methods this service supports to the console
   for(var i in service) console.println(i);

var cTestString = "This is my test string";

   // Call the echoString service -- it is an RPC Encoded method
   var result = service.echoString(cTestString);

   // This should be the same as cTestString
   console.println(result + " == " + cTestString);

   // Call the echoInteger service -- JavaScript doesn't support integers
   // so we make our own integer object.
   var oTestInt =
   {
       soapType: "xsd:int",
       soapValue: "10"
   };
   var result = service.echoInteger(oTestInt);

   // This should be the same as oTestInt.soapValue
   console.println(result + " == " + oTestInt.soapValue);

}
```

This produces the following output:

Reference data, output or notation; not an executable JavaScript program.

```text
echoBase64
echoBoolean
echoDate
echoDecimal
echoFloat
echoFloatArray
echoHexBinary
echoInteger
echoIntegerArray
echoPolyMorph
echoPolyMorphArray
echoPolyMorphStruct
echoString
echoStringArray
echoStruct
echoStructArray
echoVoid
This is my test string == This is my test string
10 == 10
```

Related: [SOAP.connect](connect.md).
