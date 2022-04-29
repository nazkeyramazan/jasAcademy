
type Props = {
    formState: any,
    fieldState: any
}

export function  getFieldState ({formState, fieldState}: Props) {
    return {
        error: formState.isSubmitted && fieldState.isTouched && !!fieldState.error,
        helperText: formState.isSubmitted && fieldState.isTouched && fieldState.error?.message
    }
}