# Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Extracting it reveals a samples folder plus the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/dotnet/shot5-spc.png)

2. Move that `pdfservices-api-credentials.json` file into a directory you've just made.

3. Within that new directory, add a file called `ExportPDFToWord.csproj`. Its job is to spell out our requirements and to help shape the application we're putting together.

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Adobe.PDFServicesSDK" Version="4.4.0" />
    <PackageReference Include="log4net" Version="3.2.0" />
  </ItemGroup>

  <ItemGroup>
    <None Update="Bodea Brochure.pdf">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </None>
    <None Update="log4net.config">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </None>
  </ItemGroup>

</Project>
```

The dependencies we require and the way the application gets built are both defined by this file.

The PDF our application works on is `Bodea Brochure.pdf` (grab it from [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)), and the goal is to turn it into a Microsoft Word document named `Bodea Brochure.docx`.

4. Inside your editor, open up the directory holding the credentials you copied earlier and the `csproj` file you just made. Add one more file there, `Program.cs`.

With that, coding can begin.
