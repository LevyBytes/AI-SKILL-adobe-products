# Pdf Accessibility Auto Tag Pdf (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Creates an output stream and copy stream asset's content to it — Generate tagged PDF by setting options with command line arguments

Driving the tagging options from command line arguments is what the sample below demonstrates.

A sample set of the command line arguments, each with what it does:

- --input < input file path >
- --output < output file path >
- --report \{ Supply this flag to have the report bundled with the output \}
- --shift_headings \{ Supply this flag to have headings shifted within the resulting PDF file \}

### Java

```javascript
// Get the samples from https://github.com/adobe/pdfservices-java-sdk-samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFParamaterised

public class AutotagPDFParameterised {

    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFParameterised.class);

    public static void main(String[] args) {
        LOGGER.info("--input " + getInputFilePathFromCmdArgs(args));
        LOGGER.info("--output " + getOutputFilePathFromCmdArgs(args));
        LOGGER.info("--report " + getGenerateReportFromCmdArgs(args));
        LOGGER.info("--shift_headings " + getShiftHeadingsFromCmdArgs(args));

        try (InputStream inputStream = Files.newInputStream(new File(getInputFilePathFromCmdArgs(args)).toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            AutotagPDFParams autotagPDFParams = getOptionsFromCmdArgs(args);

            // Creates a new job instance
            AutotagPDFJob autotagPDFJob = new AutotagPDFJob(asset)
                .setParams(autotagPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(autotagPDFJob);
            PDFServicesResponse<AutotagPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, AutotagPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getTaggedPDF();
            Asset resultAssetReport = pdfServicesResponse.getResult().getReport();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);
            StreamAsset streamAssetReport = (autotagPDFParams != null && autotagPDFParams.isGenerateReport()) ?
                pdfServices.getContent(resultAssetReport) : null;

            // Creating output streams and copying stream assets' content to it
            Files.createDirectories(Paths.get("output/"));
            String outputPath = getOutputFilePathFromCmdArgs(args);
            OutputStream outputStream = Files.newOutputStream(new File(outputPath + "autotagPDFInput-tagged.pdf").toPath());
            LOGGER.info("Saving asset at " + outputPath + "autotagPDFInput-tagged.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            if(streamAssetReport != null) {
                OutputStream outputStreamReport = Files.newOutputStream(new File(outputPath + "autotagPDFInput-report.xlsx").toPath());
                LOGGER.info("Saving asset at " + outputPath + "autotagPDFInput-report.xlsx");
                IOUtils.copy(streamAssetReport.getInputStream(), outputStreamReport);
                outputStreamReport.close();
            }
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }

    private static AutotagPDFParams getOptionsFromCmdArgs(String[] args) {
        Boolean generateReport = getGenerateReportFromCmdArgs(args);
        Boolean shiftHeadings = getShiftHeadingsFromCmdArgs(args);
        AutotagPDFParams.Builder autotagPDFParamsBuilder = AutotagPDFParams.autotagPDFParamsBuilder();

        if (generateReport)
            autotagPDFParamsBuilder.generateReport();
        if (shiftHeadings)
            autotagPDFParamsBuilder.shiftHeadings();

        return autotagPDFParamsBuilder.build();
    }

    private static Boolean getShiftHeadingsFromCmdArgs(String[] args) {
        return Arrays.asList(args).contains("--shift_headings");
    }

    private static Boolean getGenerateReportFromCmdArgs(String[] args) {
        return Arrays.asList(args).contains("--report");
    }

    private static String getInputFilePathFromCmdArgs(String[] args) {
        String inputFilePath = "src/main/resources/autotagPDFInput.pdf";
        int inputFilePathIndex = Arrays.asList(args).indexOf("--input");
        if (inputFilePathIndex >= 0 && inputFilePathIndex < args.length - 1) {
            inputFilePath = args[inputFilePathIndex + 1];
        } else
            LOGGER.info("input file not specified, using default value : autotagPDFInput.pdf");

        return inputFilePath;
    }

    private static String getOutputFilePathFromCmdArgs(String[] args) {
        String outputFilePath = "output/AutotagPDFParameterised/";
        int outputFilePathIndex = Arrays.asList(args).indexOf("--output");
        if (outputFilePathIndex >= 0 && outputFilePathIndex < args.length - 1) {
            outputFilePath = args[outputFilePathIndex + 1];
        } else
            LOGGER.info("output path not specified, using default value : " + outputFilePath);

        return outputFilePath;
    }
}

```

### .NET

```javascript

// Get the samples from https://github.com/adobe/PDFServices.NET.SDK.Samples
// Run the sample:
// cd AutotagPDFParameterised/
// dotnet run AutotagPDFParameterised.csproj

namespace AutotagPDFParameterised
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        private static AutotagPDFParams GetParamsFromCmdArgs(String[] args)
        {
            Boolean generateReport = GetGenerateReportFromCmdArgs(args);
            Boolean shiftHeadings = GetShiftHeadingsFromCmdArgs(args);

            AutotagPDFParams.Builder builder = AutotagPDFParams.AutotagPDFParamsBuilder();

            if (generateReport) builder.GenerateReport();
            if (shiftHeadings) builder.ShiftHeadings();

            return builder.Build();
        }

        private static Boolean GetShiftHeadingsFromCmdArgs(String[] args)
        {
            return Array.Exists(args, element => element == "--shift_headings");
        }

        private static Boolean GetGenerateReportFromCmdArgs(String[] args)
        {
            return Array.Exists(args, element => element == "--report");
        }

        private static String GetInputFilePathFromCmdArgs(String[] args)
        {
            String inputFilePath = @"autotagPdfInput.pdf";
            int inputFilePathIndex = Array.IndexOf(args, "--input");
            if (inputFilePathIndex >= 0 && inputFilePathIndex < args.Length - 1)
            {
                inputFilePath = args[inputFilePathIndex + 1];
            }
            else
                log.Info("input file not specified, using default value : autotagPdfInput.pdf");

            return inputFilePath;
        }

        private static String GetOutputFilePathFromCmdArgs(String[] args)
        {
            String outputFilePath = Directory.GetCurrentDirectory() + "/output/";
            int outputFilePathIndex = Array.IndexOf(args, "--output");
            if (outputFilePathIndex >= 0 && outputFilePathIndex < args.Length - 1)
            {
                outputFilePath = args[outputFilePathIndex + 1];
            }
            else
                log.Info("output path not specified, using default value : /output/");

            return outputFilePath;
        }

        static void Main(String[] args)
        {
            // Configure the logging
            ConfigureLogging();

            log.Info("--input " + GetInputFilePathFromCmdArgs(args));
            log.Info("--output " + GetOutputFilePathFromCmdArgs(args));
            log.Info("--report " + GetGenerateReportFromCmdArgs(args));
            log.Info("--shift_headings " + GetShiftHeadingsFromCmdArgs(args));

            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);
```

```javascript
// Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(GetInputFilePathFromCmdArgs(args));
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                AutotagPDFParams autotagPDFParams = GetParamsFromCmdArgs(args);

                // Creates a new job instance
                AutotagPDFJob autotagPDFJob = new AutotagPDFJob(asset).SetParams(autotagPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(autotagPDFJob);
                PDFServicesResponse<AutotagPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<AutotagPDFResult>(location, typeof(AutotagPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.TaggedPDF;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputPath = GetOutputFilePathFromCmdArgs(args);
                Stream outputStream = File.OpenWrite(outputPath + "autotagPDFInput-tagged.pdf");
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();

                if (autotagPDFParams != null && autotagPDFParams.IsGenerateReport)
                {
                    // Get content from the resulting asset(s)
                    IAsset resultAssetReport = pdfServicesResponse.Result.Report;
                    StreamAsset streamAssetReport = pdfServices.GetContent(resultAssetReport);

                    // Creating output streams and copying stream asset's content to it
                    Stream outputStreamReport =
                        File.OpenWrite(outputPath + "autotagPDFInput-report.xlsx");
                    streamAssetReport.Stream.CopyTo(outputStreamReport);
                    outputStreamReport.Close();
                }
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
    }
}
```

### Node JS

```javascript
// Get the samples from https://github.com/adobe/pdfservices-node-sdk-samples
// Run the sample:
// node src/autotag/autoag-pdf-parameterised.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  AutotagPDFParams,
  AutotagPDFJob,
  AutotagPDFResult,
  SDKError,
  ServiceUsageError,
  ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
const args = process.argv;

(async () => {
  let readStream;
  try {
    console.log("--input " + getInputFilePathFromCmdArgs(args));
    console.log("--output " + getOutputFilePathFromCmdArgs(args));
    console.log("--report " + getGenerateReportFromCmdArgs(args));
    console.log("--shift_headings " + getShiftHeadingsFromCmdArgs(args));

    // Initial setup, create credentials instance
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET,
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({ credentials });

    // Creates an asset(s) from source file(s) and upload
    readStream = fs.createReadStream(getInputFilePathFromCmdArgs(args));
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // Create parameters for the job
    const params = new AutotagPDFParams({
      generateReport: getGenerateReportFromCmdArgs(args),
      shiftHeadings: getShiftHeadingsFromCmdArgs(args),
    });

    // Creates a new job instance
    const job = new AutotagPDFJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: AutotagPDFResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.taggedPDF;
    const resultAssetReport = pdfServicesResponse.result.report;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });
    const streamAssetReport = resultAssetReport
      ? await pdfServices.getContent({ asset: resultAssetReport })
      : undefined;

    // Creates an output stream and copy stream asset's content to it
    const outputPath = getOutputFilePathFromCmdArgs(args);
    const outputFilePath = outputPath + "autotagPDFInput-tagged.pdf";
    console.log(`Saving asset at ${outputFilePath}`);

    const writeStream = fs.createWriteStream(outputFilePath);
    streamAsset.readStream.pipe(writeStream);
    if (resultAssetReport) {
      const outputFileReportPath = outputPath + "autotagPDFInput-report.xlsx";
      console.log(`Saving asset at ${outputFileReportPath}`);

      const writeStream = fs.createWriteStream(outputFileReportPath);
      streamAssetReport.readStream.pipe(writeStream);
    }
  } catch (err) {
    if (
      err instanceof SDKError ||
      err instanceof ServiceUsageError ||
      err instanceof ServiceApiError
    ) {
      console.log("Exception encountered while executing operation", err);
    } else {
      console.log("Exception encountered while executing operation", err);
    }
  } finally {
    readStream?.destroy();
  }
})();

function getInputFilePathFromCmdArgs(args) {
  let inputFilePath = "resources/autotagPdfInput.pdf";
  let inputFilePathIndex = args.indexOf("--input");
  if (inputFilePathIndex >= 0 && inputFilePathIndex < args.length - 1) {
    inputFilePath = args[inputFilePathIndex + 1];
  } else console.log("input file not specified, using default value : autotagPdfInput.pdf");
  return inputFilePath;
}

function getOutputFilePathFromCmdArgs(args) {
  let outputFilePath = "output/";
  let outputFilePathIndex = args.indexOf("--output");
  if (outputFilePathIndex >= 0 && outputFilePathIndex < args.length - 1) {
    outputFilePath = args[outputFilePathIndex + 1];
  } else {
    console.log("output path not specified, using default value :" + outputFilePath);
    fs.mkdirSync(outputFilePath, { recursive: true });
  }
  return outputFilePath;
}

function getGenerateReportFromCmdArgs(args) {
  return args.includes("--report");
}

function getShiftHeadingsFromCmdArgs(args) {
  return args.includes("--shift_headings");
}
```

### Python

````python

## Initialize the logger

```python
logging.basicConfig(level=logging.INFO)

class AutotagPDFParameterised:
    _input_path: str
    _output_path: str
    _generate_report: bool
    _shift_headings: bool

    def __init__(self):
        pass

    def execute(self, *args: str) -> None:
        args = self.parse_args(*args)
        self._input_path = args.input if args.input else self.get_default_input_file_path()
        self._output_path = args.output if args.output else self.get_default_output_file_path()
        self._generate_report = args.report
        self._shift_headings = args.shift_headings

        self.autotag_pdf()

    def autotag_pdf(self):
        try:
            file = open(self._input_path, 'rb')
            input_stream = file.read()
            file.close()
````

## Create parameters for the job

```python
autotag_pdf_params = self.get_autotag_pdf_options()
```

## Creates a new job instance

```python
autotag_pdf_job = AutotagPDFJob(input_asset=input_asset,
                                            autotag_pdf_params=autotag_pdf_params)
```

## Creates an output stream and copy stream asset's content to it

```python
with open(f'{self._output_path}/autotagPDFInput-tagged.pdf', "wb") as file:
                file.write(stream_asset.get_input_stream())

            if self._generate_report:
                result_asset_report: CloudAsset = pdf_services_response.get_result().get_report()
                stream_asset_report: StreamAsset = pdf_services.get_content(result_asset_report)
                with open(f'{self._output_path}/autotagPDFInput-report.xlsx', "wb") as file:
                    file.write(stream_asset_report.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def parse_args(*args: str):
        if not args:
            args = sys.argv[1:]
        parser = argparse.ArgumentParser(description='Autotag PDF')

        parser.add_argument('--input', help='Input file path', type=Path, metavar='input')
        parser.add_argument('--output', help='Output path', type=Path, dest='output')
        parser.add_argument('--report', dest='report', action='store_true', help='Generate report(in XLSX format)',
                            default=False)
        parser.add_argument('--shift_headings', dest='shift_headings', action='store_true', help='Shift headings',
                            default=False)

        return parser.parse_args(args)

    @staticmethod
    def get_default_input_file_path() -> str:
        return 'autotagPdfInput.pdf'

    @staticmethod
    def get_default_output_file_path() -> str:
        now = datetime.now()
        time_stamp = now.strftime("%Y-%m-%dT%H-%M-%S")
        os.makedirs("output/AutotagPDFParameterised", exist_ok=True)
        return f"output/AutotagPDFParameterised/autotag-tagged{time_stamp}"

    @staticmethod
    def create_output_file_path(path) -> None:
        os.makedirs(path, exist_ok=True)

    def get_autotag_pdf_options(self) -> AutotagPDFParams:
        return AutotagPDFParams(
            shift_headings=self._shift_headings,
            generate_report=self._generate_report
        )

if __name__ == "__main__":
    autotag_pdf_parameterised = AutotagPDFParameterised()
    autotag_pdf_parameterised.execute()
```
