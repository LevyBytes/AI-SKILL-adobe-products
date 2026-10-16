# PF_Arbitrary_INTERP_FUNC

`PF_Arbitrary_INTERP_FUNC`

Three handles to instances of your type arrive: one carrying the starting values (0), one carrying the ending values (1), and a third where the interpolated result (somewhere between 0 and 1) belongs. A float also arrives telling you the point between 0 and 1 at which your value should land. Create an instance, populate it with the interpolated result, and drop that instance into the handle you were given. By the time the normalized time value reaches you, the velocity curves have already been factored in.

Note

Never check out parameters if the in_data>effect_ref is NULL.
