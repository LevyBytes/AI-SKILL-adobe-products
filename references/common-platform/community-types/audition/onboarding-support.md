# OnboardingSupport

Community declaration reference: Audition/2018.

Support for onboarding.

```typescript
declare class OnboardingSupport {
    /**
    - */
      readonly currentUserUID: string
    /**

    - Initialize an OnboardingSupportObject.
      */
      constructor()
    /**

    - */
      static __(): any
    /**

    -
    - @param CommandID
      */
      indicateMainMenuItem(CommandID: string): boolean
    /**

    -
    - @param stepData WorkflowStatus : [String] action for the workflow step WorkflowID : [String] GUID for the workflow WorkflowName : [String] workflow name WorkflowSessionID : [String] session ID WorkflowAttempts : [Number] attempt count WorkflowStepsTotal : [Number] total steps WorkflowDurationMS : [Number] elapsed duration
      */
      onWorkflowAction(stepData: object): boolean
    /**

    -
    - @param stepData WorkflowStatus : [String] action for the workflow step WorkflowID : [String] GUID for the workflow WorkflowName : [String] workflow name WorkflowSessionID : [String] session ID WorkflowAttempts : [Number] attempt count WorkflowStepsTotal : [Number] total steps WorkflowStepInteractivity : [String] interactivity for the step WorkflowStep : [Number] active step WorkflowStepDurationMS : [Number] step duration WorkflowStepRetries : [Number] retry count WorkflowDurationMS : [Number] elapsed duration
      */
      onWorkflowStepAction(stepData: object): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
