# Crash while using GPU rendering on macOS

To help resolve GPU-related Adobe InDesign crashes, create diagnostic reports and provide them to Adobe support.

On macOS, Adobe InDesign can crash at random intervals because of GPU driver problems. These failures affect Mac systems with GPU performance enabled, and they may happen during many different operations. Adobe can investigate the problem when you generate and share the system diagnostic report.

As a temporary workaround while Adobe investigates, switch InDesign to CPU mode by choosing View > Preview on CPU.

Certain macOS graphics drivers can conflict with GPU acceleration, which makes InDesign crash during routine work. After the change, InDesign renders with the CPU instead of GPU acceleration. That can slow performance on high-resolution displays, but it should stop crashes tied to the GPU. Review InDesign GPU performance settings if you need more detail about the trade-offs.
