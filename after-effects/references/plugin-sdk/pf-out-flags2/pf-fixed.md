# PF_Fixed

`PF_Fixed`

Deprecated. We championed fixed sliders for years. These days `PF_Param_FLOAT_SLIDERs` are our recommendation instead — the extra precision pays off in plenty of cases and no longer costs what it used to, and frankly the low-byte / high-byte nonsense had worn out its welcome. `FIX_SLIDERs` offer more precision than `PF_Param_SLIDER`. Set the UI decimal places on their own. Drop the `PF_Fixed`'s low word to land on integer results.

`PF_Fixed`

Angles given in fixed-point degrees, precise to tiny fractions of a degree. Because users may dial in several full turns, values can exceed 360.

`PF_Fixed`

A point in two dimensions, giving x and y in destination layer space. The layer's origin is its top-left corner, with x growing rightward and y growing downward. From CS5.5 on, use `PF_PointParamSuite1` to read the values at floating-point accuracy. A bit of dusty history: before API spec version 12.1 (After Effects 4.0), the point's default ran 0 to 100 in fixed point with the radix point at bit 16 (plain fixed point, in other words). Passing (50,50) in fixed point landed at the image center. The value handed back for a point control is in absolute pixels carrying some number of fixed-point bits. So if you supplied (50,50) as the default and the user dropped the effect on a 640 by 480 layer, the default you'd receive would come through as (320, 240) in Fixed point. Plug-ins declaring API versions earlier than 12.1 keep the old behavior.
