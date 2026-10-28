# Scientific Filter

Scientific Filter provides advanced audio filtering controls. It is also available from the Effects Rack for single assets in the waveform editor, and for tracks and clips in the Multitrack editor.

- Bessel: gives accurate phase response without ringing or overshoot. The pass band slopes at the edges, where stop-band rejection is weakest among the filter types. These traits make Bessel useful for percussive, pulse-like signals. For other filtering work, use Butterworth.
- Butterworth: gives a flat pass band with minimal phase shift, ringing, and overshoot. Its stop-band rejection is much stronger than Bessel and only a little weaker than Chebychev 1 or 2. These overall traits make Butterworth the best option for most filtering tasks.
- Chebychev: gives the strongest stop-band rejection but the weakest phase response, ringing, and overshoot in the pass band. Use it only when rejecting the stop band matters more than keeping an accurate pass band.
- Elliptical: gives a sharp cutoff and narrow transition width. It can notch frequencies as well, unlike Butterworth and Chebychev filters. It can add ripples in both the stop band and the pass band.

- LowPass: allows low frequencies through and removes high frequencies. Set the cutoff point where frequencies are removed.
- HighPass: allows high frequencies through and removes low frequencies. Set the cutoff point where frequencies are removed.
- BandPass: keeps a band, or frequency range, while removing all other frequencies. Set two cutoff points to define the band's edges.
- BandStop: rejects frequencies inside the specified range. Also called a notch filter, Band Stop is the opposite of Band Pass. Set two cutoff points to define the band's edges.

- Master Gain: compensates when the overall volume may be too loud or too quiet after filter settings are changed.
- Cutoff: sets the frequency boundary between passed and removed frequencies. At this point, the filter changes from passing to attenuating, or the reverse. For filters that need a range, Band Pass and Band Stop, Cutoff sets the low-frequency boundary while High Cutoff sets the high-frequency boundary.
- High Cutoff: sets the high-frequency boundary in filters that require a range, Band Pass and Band Stop.
- Order: sets filter precision. Higher order values make the filter more precise, with steeper cutoff slopes and similar behavior, but high orders can also create more phase distortion.
- Transition Bandwidth: (Butterworth and Chebychev only) sets transition-band width. Lower values produce steeper slopes. If a transition bandwidth is entered, the Order setting is filled automatically, and the reverse is also true. In filters that need a range, Band Pass and Band Stop, this option sets the lower frequency transition, while High Width sets the higher frequency transition.
- High width: (Butterworth and Chebychev only) in range-based filters, Band Pass and Band Stop, this option sets the higher frequency transition, while Transition Bandwidth sets the lower frequency transition.
- Stop Attn: (Butterworth and Chebychev only) sets how much gain reduction is applied when frequencies are removed.
- Pass/Actual ripple: (Chebychev only) sets the maximum permitted ripple amount. Ripple means unwanted boosts and cuts around the cutoff point.
