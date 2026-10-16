/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace AutotagPDFParameterised {
partial class Program {
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
}
}
