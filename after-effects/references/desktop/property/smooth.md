# smooth(width=.2, samples=5, t=time)

Return type: Number or Array.

Argument type: width, samples, and t are Numbers.

Evens out the property's values across time, trading large, short-lived swings for smaller, more uniformly spread ones. It pulls this off by running a box filter over the property's value at the named time. The width value sets the time window (in seconds) the filter averages across. The samples value is the count of discrete samples spaced evenly over time; raise it for more smoothness (at a performance cost). As a rule, keep samples odd so the current time's value joins the average. Example: position.smooth(.1, 5)
