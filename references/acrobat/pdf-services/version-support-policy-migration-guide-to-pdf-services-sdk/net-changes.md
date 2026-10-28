# .NET changes

- Nuget package name changed from `Adobe.DocumentServices.PDFTools` to `Adobe.PDFServicesSDK`
- Update the SDK dependency in your project's .csproj file with the following:

```xml
<ItemGroup>
    <PackageReference Include="log4net" Version="3.2.0" />
    <PackageReference Include="Adobe.PDFServicesSDK" Version="4.3.1" />
</ItemGroup>
```

- Update the namespaces accordingly in your .cs file as per the new dependency:

Import the SDK namespace in C# with `using Adobe.PDFServicesSDK;`.
