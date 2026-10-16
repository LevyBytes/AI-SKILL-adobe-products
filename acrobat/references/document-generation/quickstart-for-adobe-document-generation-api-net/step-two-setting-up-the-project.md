# Step Two: Setting up the project

1. Head to your Downloads folder and locate the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Extracting that archive yields a samples folder together with the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot5-spc.png)

2. Grab the `pdfservices-api-credentials.json` file and drop it into a brand-new directory.

3. Inside that new directory, add a file named `GeneratePDF.csproj`. Its job is to spell out our requirements and help shape the application we're putting together.

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
    <None Update="log4net.config">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </None>
    <None Update="receiptTemplate.docx">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </None>
    <None Update="receipt.json">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </None>
  </ItemGroup>

</Project>
```

Our program will pick up a Word document, `receiptTemplate.docx` (downloadable from [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/receiptTemplate.docx)), merge it with data held in a JSON file, `receipt.json` (downloadable from [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/receipt.json)), and hand the result to the Acrobat Services API so a receipt PDF comes back.

4. Within your editor, open up the directory where you placed the credentials and added the `csproj` file earlier. Make a new file there called `Program.cs`.

At this point you're set to start writing code.
