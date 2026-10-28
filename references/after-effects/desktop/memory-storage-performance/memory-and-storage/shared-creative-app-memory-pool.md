# Memory pool shared between After Effects, Premiere, Photoshop, and Audition

A memory pool is shared between After Effects and Adobe Creative Cloud applications. The Memory & CPU preferences panel signals this through the icons sitting along its top for each program; whichever icons appear dimmed belong to programs that aren't currently open.

To keep RAM from being swapped out to disk, a memory balancer continuously redistributes how much memory each program gets. Every program signs up with the memory balancer and supplies these essentials: its minimum memory needs, the ceiling of memory it can take, how much it's using right now, and a priority. That priority comes in three levels — low, normal, and high. After Effects and Premiere claim high only while they're the active application. Normal covers After Effects sitting in the background or Adobe Media Encoder up front. Low applies to background servers belonging to Premiere or Adobe Media Encoder.

Note

One concrete upshot of the shared memory pool: launching Premiere cuts into the RAM After Effects has for previews, while quitting Premiere hands that RAM straight back to After Effects and lengthens how long previews can run.
