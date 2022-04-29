import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActionCreators from '../store/actions/productActionCreators'

export const useProductActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(productActionCreators, dispatch)
    }, [dispatch])
}