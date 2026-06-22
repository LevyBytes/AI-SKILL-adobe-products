# Aftereffects (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

declare interface \_DropShadow extends PropertyGroup {
readonly blendMode: OneDProperty
readonly color: ColorProperty
readonly opacity: OneDProperty
readonly useGlobalLight: OneDProperty
readonly angle: OneDProperty
readonly distance: OneDProperty
readonly spread: OneDProperty
readonly size: OneDProperty
readonly noise: OneDProperty
readonly layerKnocksOutDropShadow: OneDProperty
}

declare interface \_InnerShadow extends PropertyGroup {
readonly blendMode: OneDProperty
readonly color: ColorProperty
readonly opacity: OneDProperty
readonly useGlobalLight: OneDProperty
readonly angle: OneDProperty
readonly distance: OneDProperty
readonly choke: OneDProperty
readonly size: OneDProperty
readonly noise: OneDProperty
}

declare interface \_OuterGlow extends PropertyGroup {
readonly blendMode: OneDProperty
readonly opacity: OneDProperty
readonly noise: OneDProperty
readonly colorType: OneDProperty
readonly color: ColorProperty
readonly colors: NoValueProperty
readonly gradientSmoothness: OneDProperty
readonly technique: OneDProperty
readonly spread: OneDProperty
readonly size: OneDProperty
readonly range: OneDProperty
readonly jitter: OneDProperty
}

declare interface \_InnerGlow extends PropertyGroup {
readonly blendMode: OneDProperty
readonly opacity: OneDProperty
readonly noise: OneDProperty
readonly colorType: OneDProperty
readonly color: ColorProperty
readonly colors: NoValueProperty
readonly gradientSmoothness: OneDProperty
readonly technique: OneDProperty
readonly source: OneDProperty
readonly choke: OneDProperty
readonly size: OneDProperty
readonly range: OneDProperty
readonly jitter: OneDProperty
}

declare interface \_BevelAndEmboss extends PropertyGroup {
readonly style: OneDProperty
readonly technique: OneDProperty
readonly depth: OneDProperty
readonly direction: OneDProperty
readonly size: OneDProperty
readonly soften: OneDProperty
readonly useGlobalLight: OneDProperty
readonly angle: OneDProperty
readonly altitude: OneDProperty
readonly highlightMode: OneDProperty
readonly highlightColor: ColorProperty
readonly highlightOpacity: OneDProperty
readonly shadowMode: OneDProperty
readonly shadowColor: ColorProperty
readonly shadowOpacity: OneDProperty
}

declare interface \_Satin extends PropertyGroup {
readonly blendMode: OneDProperty
readonly color: ColorProperty
readonly opacity: OneDProperty
readonly angle: OneDProperty
readonly distance: OneDProperty
readonly size: OneDProperty
readonly invert: OneDProperty
}

declare interface \_ColorOverlay extends PropertyGroup {
readonly blendMode: OneDProperty
readonly color: ColorProperty
readonly opacity: OneDProperty
}

declare interface \_GradientOverlay extends PropertyGroup {
readonly blendMode: OneDProperty
readonly opacity: OneDProperty
readonly colors: NoValueProperty
readonly gradientSmoothness: OneDProperty
readonly angle: OneDProperty
readonly style: OneDProperty
readonly reverse: OneDProperty
readonly alignWithLayer: OneDProperty
readonly scale: OneDProperty
readonly offset: TwoDProperty
}

declare interface \_Stroke extends PropertyGroup {
readonly color: ColorProperty
readonly blendMode: OneDProperty
readonly size: OneDProperty
readonly opacity: OneDProperty
readonly position: OneDProperty
}

declare interface \_GeometryOptionsGroup extends PropertyGroup {
readonly curvature: OneDProperty
readonly segments: OneDProperty

readonly bevelStyle: OneDProperty
readonly bevelDepth: OneDProperty
readonly holeBevelDepth: OneDProperty
readonly extrusionDepth: OneDProperty
}

declare interface \_MaterialOptionsGroup extends PropertyGroup {
readonly castsShadows: OneDProperty
readonly lightTransmission: OneDProperty
readonly acceptsShadows: OneDProperty
readonly acceptsLights: OneDProperty
readonly appearsInReflections: OneDProperty
readonly ambient: OneDProperty
readonly diffuse: OneDProperty
readonly specularIntensity: OneDProperty
readonly specularShininess: OneDProperty
readonly metal: OneDProperty
readonly reflectionIntensity: OneDProperty
readonly reflectionSharpness: OneDProperty
readonly reflectionRolloff: OneDProperty
readonly transparency: OneDProperty
readonly transparencyRolloff: OneDProperty
readonly indexOfRefraction: OneDProperty
}

declare interface \_AudioGroup extends PropertyGroup {
readonly audioLevels: TwoDProperty
}

declare interface \_TextProperties extends PropertyGroup {
readonly sourceText: TextDocumentProperty
readonly pathOption: \_TextPathOptions
readonly moreOption: \_TextMoreOptions
}

declare interface \_TextPathOptions extends PropertyGroup {
readonly path: OneDProperty
}

declare interface \_TextMoreOptions extends PropertyGroup {
readonly anchorPointGrouping: OneDProperty
readonly groupingAlignment: TwoDProperty
readonly fillANdStroke: OneDProperty
readonly interCharacterBlending: OneDProperty
}
