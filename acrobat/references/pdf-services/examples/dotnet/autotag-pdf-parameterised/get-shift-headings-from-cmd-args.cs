/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace AutotagPDFParameterised {
partial class Program {
private static Boolean GetShiftHeadingsFromCmdArgs(String[] args)
        {
            return Array.Exists(args, element => element == "--shift_headings");
        }
}
}
