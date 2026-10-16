# Adobe PDF PPD isn’t installed

When Adobe PDF is missing from the PPD list, the Adobe PDF PPD might not be present in the InDesign Presets folder.

Older Adobe PDF PPDs can still work, but Adobe recommends PDF-based export workflows when possible because PostScript output and PPD-dependent workflows are legacy approaches.

Quit InDesign.

Go to the InDesign application folder: /Applications/Adobe InDesign [version]/Presets/

Create a folder named PPDs, preserving that case-sensitive name, then copy the Adobe PDF PPD file into it.

Restart InDesign and choose File > Print.

PostScript output is a legacy workflow. For most current print and publishing workflows, PDF export through File > Export > Adobe PDF (Print) is more reliable and gives better support for transparency handling, modern RIPs, and print providers.
