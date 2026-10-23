# Basic Host Differences`PF_InData`

Premiere Pro handles field rendering differently from After Effects. During field rendering, `PF_InData`>field reports the current field being rendered, regardless of whether `PF_OutFlag_PIX_INDEPENDENT` was set.

In Premiere Pro, `PF_InData`>quality contains the monitor window quality setting received by effects. After Effects differs because this field contains the source layer's quality setting.
