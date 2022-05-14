import { ControllerFieldState, UseFormStateReturn } from "react-hook-form"
import { OrderDataType } from "../components/shopComponent/OrderForm"

type Props = {
    formState: UseFormStateReturn<OrderDataType>,
    fieldState: ControllerFieldState,
}

export function getFieldState({ formState, fieldState }: Props) {
    return {
        error: formState.isSubmitted && fieldState.isTouched && !!fieldState.error,
        helperText: formState.isSubmitted && fieldState.isTouched && fieldState.error?.message
    }
}