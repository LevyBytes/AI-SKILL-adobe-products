/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace CombinePDFWithPageRanges {
partial class Program {
private static PageRanges GetPageRangeForSecondFile()
        {
            PageRanges pageRangesForSecondFile = new PageRanges();
            pageRangesForSecondFile.AddAllFrom(5);
            return pageRangesForSecondFile;
        }
}
}
