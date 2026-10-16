# Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Unpacking that archive reveals a samples folder alongside the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` file into a directory you create fresh for it.

3. Within that fresh directory, add a file named `ExtractTextInfoFromPDF.csproj`. Its job is to spell out our requirements and to help describe the application being built.

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
        <None Update="Adobe Extract API Sample.pdf">
            <CopyToOutputDirectory>Always</CopyToOutputDirectory>
        </None>
        <None Update="log4net.config">
            <CopyToOutputDirectory>Always</CopyToOutputDirectory>
        </None>
    </ItemGroup>

</Project>
```

Inside it we'll declare the dependencies required and lay out how the build proceeds.

The program is going to ingest a PDF — `Adobe Extract API Sample.pdf`, shipped as part of the .NET sample project — and pull out what it contains. Those results land in a ZIP file, `ExtractTextInfoFromPDF.zip`. From that ZIP we then read the output and echo the text of every `H1` header the PDF holds.

4. Back in your editor, open the folder where you just copied the credentials and made the `csproj` file. Add a new file called `Program.cs`.

Now you're ready to begin coding.
