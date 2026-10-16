/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace CombinePDFWithPageRanges {
partial class Program {
private static PageRanges GetPageRangeForFirstFile()
        {
            PageRanges pageRangesForFirstFile = new PageRanges();
            pageRangesForFirstFile.AddSinglePage(2);
            pageRangesForFirstFile.AddSinglePage(3);
            pageRangesForFirstFile.AddRange(5, 7);
            return pageRangesForFirstFile;
        }
}
}
