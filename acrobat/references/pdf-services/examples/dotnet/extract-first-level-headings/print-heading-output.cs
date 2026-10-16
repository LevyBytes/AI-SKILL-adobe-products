/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying it.
 */
namespace ExtractTextInfoFromPDF {
partial class Program {
static void PrintHeadingOutput(string zipPath)
        {
            using ZipArchive archive = ZipFile.OpenRead(zipPath);
            ZipArchiveEntry jsonEntry = archive.GetEntry("structuredData.json")
                ?? throw new InvalidDataException("Extract ZIP has no structuredData.json.");
            using Stream input = jsonEntry.Open();
            using JsonDocument data = JsonDocument.Parse(input);
            JsonElement elements = data.RootElement.GetProperty("elements");
            foreach (JsonElement element in elements.EnumerateArray())
            {
                string elementPath = element.GetProperty("Path").GetString();
                if (elementPath != null && elementPath.EndsWith("/H1", StringComparison.Ordinal))
                    Console.WriteLine(element.GetProperty("Text").GetString());
            }
        }
}
}
