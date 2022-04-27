import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Select, styled, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useForm, Controller} from "react-hook-form";
import {getFieldState} from "../../utils/getFieldState";
import {ValidatePhoneNumber} from "../../utils/validatePhoneNumber";
import {validateEmail} from "../../utils/validateEmail";

const StyledDialog = styled(Dialog)`
  overflow-y: hidden;
  display: flex;
  align-items: center;
  width: 440px;
  margin: auto;
`
export function OrderForm(){
    const dispatch = useDispatch();
    const openModal = useSelector((state)=>state.shopReducer.modalState)
    const {handleSubmit, reset, control} = useForm({
        mode: 'onChange',
        defaultValues: {
            name:'',
            phone: '',
            email: '',
            comment: '',
            city: 'Pavlodar',
        }
    })
    const handleClickOpen = useCallback( (payload)=> {
        dispatch({type: 'shop/openOrderModal', payload})
    }, [dispatch])

    const handleClose = useCallback( (payload)=> {
        dispatch({type: 'shop/closeOrderModal', payload})
    }, [dispatch])

    const onSubmit = useCallback((values) => {
        alert('SUBMIT')
        // console.log(values)
        // dispatch({ type: CLOSE_MODAL })
        // reset()
    }, [dispatch, reset])
    const colors = {
        nameColor: 'primary',
        phoneColor: 'primary',
        emailColor: 'primary',
        commentColor: 'primary',
        cityColor: 'primary'

    };

    return(
        <div >
            <Button
                style={{display:'flex', alignItems:'center'}}
                onClick={handleClickOpen}
                variant='outlined'
                sx={{ my: 2, color: 'blue', display: 'block' }}>
                Order
            </Button>
            <StyledDialog open={openModal} onClose={handleClose}>
                <DialogTitle>Оформление закакза</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} >

                <DialogContent>

                    <FormControl fullWidth sx={{mb:2 }}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Поле обязательное',
                                validate: (value => {
                                    if(value.length<=3)
                                    {
                                        colors.nameColor = 'primary'
                                        return 'Должен содержать больше 3 символов'
                                    }
                                    else
                                        colors.nameColor = 'success'
                                })
                            }}
                            render={({field, fieldState, formState}) => (
                                <TextField label="Name"
                                    required
                                    color={colors.nameColor}
                                    focused
                                    {...getFieldState({  formState, fieldState})}
                                    variant="outlined" {...field} />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb:2  }}>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: 'Поле обязательное',
                                validate: (value) => {
                                    if (ValidatePhoneNumber(value)) {
                                        colors.phoneColor='success'
                                        return true;
                                    } else {
                                        return 'Неверный номер телефона'
                                    }
                                }
                            }}
                            render={({field, fieldState, formState}) => (
                                <TextField label="Phone"
                                           required
                                           color={colors.phoneColor}
                                            focused
                                           {...getFieldState({  formState, fieldState})}
                                               variant="outlined" {...field} />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                validate: (value) => {
                                    if (validateEmail(value)) {
                                        return true;
                                    } else {
                                        return 'Введите корректный email'
                                    }
                                }
                            }}
                            render={({field, formState, fieldState}) => (
                                <TextField
                                           label="Email"
                                           variant="outlined"

                                           {...getFieldState({  formState, fieldState})}

                                           {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}}>
                        <Controller
                            name="comment"
                            control={control}
                            rules={{
                                validate: (value) => {
                                    if (value.length>10 || value==='') {
                                        return true;
                                    } else {
                                        return 'Длина должна быть не меньше 10 символов'
                                    }
                                }
                            }}
                            render={({field, formState, fieldState}) => (
                                <TextField
                                    label="Comment"
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                    {...getFieldState({  formState, fieldState})}

                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}}>
                        <InputLabel >City</InputLabel>
                        <Controller
                            name="city"
                            control={control}
                            render={({field}) => (
                                <Select
                                    label="City"
                                    focused
                                    {...field}
                                >
                                    <MenuItem value='Astana'>Astana</MenuItem>
                                    <MenuItem value='Almaty'>Almaty</MenuItem>
                                    <MenuItem value='Pavlodar'>Pavlodar</MenuItem>
                                </Select>
                            )}
                        />
                    </FormControl>

                    <Button  variant='outlined' type='submit'>Order</Button>
                </DialogContent>
                </form>
            </StyledDialog>
        </div>
    )
}

