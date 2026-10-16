/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace AutotagPDFParameterised {
partial class Program {
private static String CreateOutputFilePathForTaggingReport(String outputPath)
        {
            String timeStamp = DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss");
            return outputPath + "/AutotagPDF-report" + timeStamp + ".xlsx";
        }
}
}
