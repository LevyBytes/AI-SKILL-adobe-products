/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in 
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace RotatePDFPages {
partial class Program {
private static PageRanges GetFirstPageRangeForRotation()
        {
            PageRanges firstPageRange = new PageRanges();
            firstPageRange.AddSinglePage(1);
            firstPageRange.AddRange(3, 4);
            return firstPageRange;
        }
}
}
