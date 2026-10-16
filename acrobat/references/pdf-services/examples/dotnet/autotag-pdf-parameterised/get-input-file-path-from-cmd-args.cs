/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace AutotagPDFParameterised {
partial class Program {
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
}
}
