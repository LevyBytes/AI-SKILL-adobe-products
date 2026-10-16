# Passing simple types

When a message object's onResult callback receives a response, it has to interpret the string in the response message body to recover a result of the proper type. Results can be identified and handled by type as follows:

| Type | Description |
| --- | --- |
| Number | JavaScript allows you to access a string that contains a number directly as a number, without doing any type conversion. However, be careful when using the plus operator (+), which works with either strings or numbers. If one of the operands is a string, both operands are converted to strings and concatenated. |
| String | No conversion is required. |
| Boolean | The result string is either "true" or "false." You can convert it to a true boolean by evaluating it with the eval method. |
| Date | The result string contains the date in the form: "dow mmm dd yyyy hh:mm:ss GMT-nnnn". For example "Wed Jun 23 2004 00:00:00 GMT-0700". |
| Array | The result string contains a comma delimited list of the elements of the array. For example, If the result array is [12, "test", 432], the messaging framework flattens this into the string "12,test,432". As an alternative to simply returning the array, the message target can use the toSource method to return the code used to create the array. In this case, the sender must reconstitute the array by using the eval method on the result string in the response body. See discussion below. |
