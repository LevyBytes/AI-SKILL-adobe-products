# Example 3: Work with your footage in Photoshop

Some footage won't come out right from Content-Aware Fill on its own — shots with water, or patches of mixed light and texture, for instance. When that's the case, you can lean on Adobe Photoshop tools such as Clone Stamp to polish the footage.

Note

Make sure you have Photoshop installed on your machine.

The example above has us taking the girl out of footage whose background carries mixed light and texture.

Run through the earlier example's steps to mask off the girl, then set the Fill Method to Object.

1. Frame with the girl masked out.
   With the mask done, turn to the Create Reference Frame option in the Content-Aware Fill panel.

For a Reference Frame, once the mask is in place, pick the frame where the object looms largest in the shot. Here, go with the first frame. Hit the Create Reference Frame button to ship that frame — mask and all — over to Photoshop. A reference frame is a single still clean plate you paint yourself, teaching the Content-Aware Fill algorithm which pixels to drop into your masked region.

3. Open reference frame in Photoshop.
   Paint the fill in however suits you. Here, the Clone Stamp tool gives the finer results. Once the edits are made, save the footage. Steer clear of Save As; always Save the changes under the same name and location. Otherwise Photoshop spawns a new file that After Effects won't reference directly.

Reopen After Effects and the Content-Aware Fill panel sets your reference frame on a layer beneath your original shot. That layer picks up the paint job you saved out of Photoshop and fills the object mask, for that frame alone, with your Photoshop Reference Frame.

Yet another option to consider is the Photoshop Content Aware Fill. or Retouch and repair photos.

To render Content-Aware Fill off your corrected frame, click the Generate Fill Layer button.
