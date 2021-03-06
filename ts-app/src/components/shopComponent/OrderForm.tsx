import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useCallback } from "react";
import { Select, styled, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useProductActions } from "../../hooks/useProductActions";
import { useForm, Controller } from "react-hook-form";
import { getFieldState } from "../../utils/getFieldstate";
import { ValidatePhoneNumber } from "../../utils/validatePhoneNumber";
import { validateEmail } from "../../utils/validateEmail";

export type OrderDataType = {
    name: string,
    phone: string,
    email: string,
    comment: string,
    city: string | undefined,
}
const StyledDialog = styled(Dialog)`
  overflow-y: hidden;
  display: flex;
  align-items: center;
  width: 440px;
  margin: auto;
`

export function OrderForm() {
    const { orderModalState } = useTypedSelector((state) => state.product)
    const { handleSubmit, reset, control } = useForm<OrderDataType>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            comment: '',
            city: 'New-York',
        }
    })

    const { openOrderModal, closeOrderModal } = useProductActions()
    const handleClickOpen = useCallback(() => {
        openOrderModal()
    }, [openOrderModal])
    const handleClose = useCallback(() => {
        closeOrderModal()
    }, [closeOrderModal])

    const onSubmit = useCallback(() => {
        alert("Submitted")
        reset()
        handleClose();
    }, [reset, handleClose])
    return (
        <div>
            <Button
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={handleClickOpen}
                variant='outlined'
                sx={{ my: 2, color: 'blue', display: 'block' }}>
                Order
            </Button>

            <StyledDialog open={orderModalState} onClose={handleClose}>
                <DialogTitle>???????????????????? ??????????????</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <DialogContent>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    required: '???????? ????????????????????????',
                                    validate: (value => {
                                        if (value.length <= 3)
                                            return '???????????? ?????????????????? ???????????? 3 ????????????????'
                                    })
                                }}
                                render={({ field, fieldState, formState }) => (
                                    <TextField label="Name"
                                        required
                                        focused
                                        {...getFieldState({ formState, fieldState })}
                                        variant="outlined" {...field} />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: '???????? ????????????????????????',
                                    validate: (value) => {
                                        if (ValidatePhoneNumber(value)) {
                                            return true;
                                        } else {
                                            return '???????????????? ?????????? ????????????????'
                                        }
                                    }
                                }}
                                render={({ field, fieldState, formState }) => (
                                    <TextField label="Phone"
                                        required
                                        type="number"
                                        focused
                                        id="outlined-basic"
                                        {...getFieldState({ formState, fieldState })}
                                        variant="outlined" {...field} />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    validate: (value) => {
                                        if (validateEmail(value)) {
                                            return true;
                                        } else {
                                            return '?????????????? ???????????????????? email'
                                        }
                                    }
                                }}
                                render={({ field, formState, fieldState }) => (
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        {...getFieldState({ formState, fieldState })}
                                        {...field}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="comment"
                                control={control}
                                rules={{
                                    validate: (value: string) => {
                                        if (value.length > 10 || value === '') {
                                            return true;
                                        } else {
                                            return '?????????? ???????????? ???????? ???? ???????????? 10 ????????????????'
                                        }
                                    }
                                }}
                                render={({ field, formState, fieldState }) => (
                                    <TextField
                                        label="Comment"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        {...getFieldState({ formState, fieldState })}
                                        {...field}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel >City</InputLabel>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        label="City"
                                        {...field}
                                    >
                                        <MenuItem value='Astana'>Astana</MenuItem>
                                        <MenuItem value='Almaty'>Almaty</MenuItem>
                                        <MenuItem value='New-York'>New-York</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant='contained' type='submit'>Order</Button>
                            <Button variant='contained' onClick={() => handleClose()}>Close</Button>
                        </div>
                    </DialogContent>
                </form>
            </StyledDialog>
        </div>
    )
}

