# Placed Images have high resolution

To solve the issue before export and keep files smaller during production, optimize the images in Photoshop before they are used in the layout:

Placed graphics may carry more resolution than their final size requires, forcing InDesign to handle unnecessary image data. Once each image has already been reduced to the needed output resolution, PDF export can complete without memory errors.

Start InDesign and use Window > Links to open the Links panel.

For every image, inspect the Actual PPI and Effective PPI values in Link Info.

Find graphics whose resolution is well above the job target. For high-quality print, aim for Actual and Effective PPI values of 300 dpi.

Right-click the image link, then choose Edit Original so it opens in Photoshop.

In Photoshop, go to Image > Image Size.

In the Image Size dialog box, make sure Resample is enabled.

Work out the needed resolution from the image's final dimensions in the InDesign layout multiplied by the output target, usually 300 dpi for print.

Type the computed values in Width and Height, and confirm that the resolution matches the intended target.

Choose OK, then save the image and close it.

Go back to InDesign; the link should refresh automatically. If the update is not visible, choose the Update Link icon in the Links panel when asked.

Repeat the same process for the remaining high-resolution images in the document.

Tip

When a document uses many graphics, preparing those files in Photoshop before placing them in InDesign can also make InDesign run better and reduce the document file size.
