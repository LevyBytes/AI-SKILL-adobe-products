# .NET changes

- On Nuget the package is now `Adobe.PDFServicesSDK`, replacing `Adobe.DocumentServices.PDFTools`
- In your project’s .csproj file, update the SDK dependency to the following:


- Adjust the namespaces in your .cs file to fit the new dependency:

Import the SDK namespace in C# with `using Adobe.PDFServicesSDK;`.
