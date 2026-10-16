/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace AutotagPDFParameterised {
partial class Program {
private static AutotagPDFParams GetParamsFromCmdArgs(String[] args)
        {
            Boolean generateReport = GetGenerateReportFromCmdArgs(args);
            Boolean shiftHeadings = GetShiftHeadingsFromCmdArgs(args);
            AutotagPDFParams.Builder builder = AutotagPDFParams.AutotagPDFParamsBuilder();
            if (generateReport) builder.GenerateReport();
            if (shiftHeadings) builder.ShiftHeadings();
            return builder.Build();
        }
}
}
