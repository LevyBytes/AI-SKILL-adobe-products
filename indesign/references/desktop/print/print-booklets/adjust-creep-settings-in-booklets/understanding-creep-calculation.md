# Understanding creep calculation

InDesign gets the creep increment by taking the creep value you entered and dividing it by one less than the total sheet count. One sheet contains two printer spreads—front and back.

- Positive creep: The centerfold (innermost spread) remains fixed, and outer sheets shift away from the spine. Use this direction when thick paper stocks make outer pages extend.
- Negative creep: The cover (outermost spread) remains fixed, and inner sheets shift toward the spine. Booklet printing commonly uses this "push-in" effect to compensate for paper bulk.

Across the sheets, the creep value is applied in steps. On each sheet, every page moves half of that sheet's total creep amount, with one half going toward each side of the spread.
