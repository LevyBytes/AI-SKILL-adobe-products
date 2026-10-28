# Set up the .NET electronic-seal project

Extract `PDFServicesSDK-.NetSamples.zip` from the credential download. Keep `pdfservices-api-credentials.json` in a secure project location; the application reads its client ID and secret through environment variables.

Create a project directory containing `ElectronicSeal.csproj`, `Program.cs`, `SampleInvoice.pdf`, `sampleSealImage.png` and `log4net.config`. Get the input documents and logging configuration from the downloaded samples or Adobe's [appearance-options sample project](https://github.com/adobe/PDFServices.NET.SDK.Samples/tree/4360e3f042cd3395e399c572490e411b0e3e314d/ElectronicSealWithAppearanceOptions). Preserve the filenames' case so the program and project agree on every platform.

Use this project configuration for the .NET 8 application, SDK 4.4.0 and log4net 3.2.0:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <OutputType>Exe</OutputType>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Version="4.4.0" Include="Adobe.PDFServicesSDK" />
    <PackageReference Version="3.2.0" Include="log4net" />
    <None Update="log4net.config;SampleInvoice.pdf;sampleSealImage.png" CopyToOutputDirectory="Always" />
  </ItemGroup>
</Project>
```

Place the complete upstream C# application in `Program.cs` as described in the [application procedure](step-three-creating-the-application.md). It applies a visible electronic seal with configured appearance items to the invoice PDF and uses the PNG as the seal image. Keep the certificate provider details ready in addition to the Adobe client credentials.

Run `dotnet build ElectronicSeal.csproj` from this directory to restore the declared dependencies and build the project. Continue with the application procedure to set credentials, run the job and locate the sealed PDF.
