# Structuring documents for XML - Edit href attributes

InCopy automatically creates href attributes for image-file handling. The href attribute stores the disk location of the image file so the file can be displayed. When you tag a placed image, InCopy writes an href attribute value containing the image path and filename.

Valid paths include absolute links, relative links beside the XML file, and relative links into the Images subfolder under the XML file's folder. Relative paths depend on the saved document path.

An href attribute with an absolute link looks like the following (in Windows and the Mac OS):

href=file:///C:/Images/Meadow.psd

href=file:///Users/abhayc//Desktop/abc.jpg

An href attribute to an image file in the same folder as the XML file looks like the following:

href=file:Meadow.psd

An href attribute to an image file in the Images subfolder looks like the following:

href=file:///Images/Meadow.psd

Edit the href attribute when you need to point to a different image link. For instance, an absolute link can be changed into a relative link so the image remains accessible after export.

Double-click the href attribute in the Structure pane. (You may need to click the triangle icon beside the image element before the attribute appears.) For Value, enter the new path to the image, and then click OK.
