# Scientific Filter effect

For advanced audio manipulation, use the Scientific Filter effect (Effects > Filter and EQ). It is also available from the Effects Rack for individual assets in the waveform editor and for clips or tracks in the Multitrack editor.

Use the Scientific Filter effect for exact frequency filtering during technical cleanup or experiments.

Apply the Scientific Filter effect when technical audio work calls for precise frequency filtering.

Types

Sets which scientific filter type is used. The available choices are:

- Bessel: Gives accurate phase response without ringing or overshoot. Its pass band slopes at the edges, though, and stop-band rejection there is the weakest among these filter types. Bessel is therefore useful for percussive, pulse-like signals. For other filter jobs, choose Butterworth.

- Butterworth: Produces a flat pass band with little phase shift, ringing, or overshoot. It rejects the stop band far better than Bessel and only slightly less than Chebychev 1 or 2. Taken together, those traits make Butterworth the strongest default for most filter tasks.

- Chebychev: Delivers the strongest stop-band rejection, but it has the poorest phase response, ringing, and overshoot in the pass band. Use it only when stop-band rejection matters more than keeping the pass band accurate.

- Elliptical: Offers a sharp cut-off and a narrow transition width. Unlike Butterworth and Chebychev filters, it can also remove frequencies with a notch. It may add ripples to both the stop band and pass band.

Modes

Selects the filter mode. The available choices are:

- Low Pass: Lets low frequencies through and removes high ones. You need to set the cutoff point where removal begins.

- High Pass: Lets high frequencies through and removes low ones. You need to set the cutoff point where removal begins.

- Band Pass: Keeps a band, meaning a frequency range, and removes everything outside it. Two cutoff points define the band's edges.

- Band Stop: Removes frequencies inside the specified range. Band Stop, also called a notch filter, is the reverse of Band Pass. Two cutoff points define the band's edges.

Gain

Offsets overall volume if filter changes leave the result too loud or too soft.

Cutoff

Sets the frequency boundary between material that passes and material that is removed. At this frequency, the filter changes from passing to attenuating, or the reverse. For range-based filters, Band Pass and Band Stop, Cutoff sets the lower frequency boundary and High Cutoff sets the upper boundary.

High Cutoff

Sets the upper frequency boundary for filters that use a range, which are Band Pass and Band Stop.

Order

Sets filter precision. Higher orders make the filter more exact, with steeper slopes at cutoff points and similar behavior. Very high orders can also create substantial phase distortion.

Transition Bandwidth

(Butterworth and Chebychev only) Sets how wide the transition band is. Lower values create steeper slopes. If a transition bandwidth is entered, Order is calculated automatically, and the reverse is also true. For Band Pass and Band Stop filters, this is the lower-frequency transition, while High Width sets the upper-frequency transition.

High Width

(Butterworth and Chebychev only) For Band Pass and Band Stop filters, this is the upper-frequency transition; Transition Bandwidth sets the lower-frequency transition.

Stop Attn

(Butterworth and Chebychev only) Sets the amount of gain reduction applied to removed frequencies.

Pass Ripple/ Actual Ripple

(Chebychev only) Sets the largest ripple amount allowed. Ripple means unwanted boosting and cutting around cutoff.

### More like this

- About process effects
- Control effect settings with graphs
- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
