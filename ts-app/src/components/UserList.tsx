import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers } from '../store/actions/fetchUsers'
import { User } from '../types/userTypes'
import { UserItem } from './UserItem'

export function UserList() {
    const { users, error, loading } = useTypedSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers() as any)
    }, [dispatch])

    if (loading) {
        return (
            <h1>Загрузка пользователей</h1>
        )
    }
    if (error) {
        return (
            <h1 style={{ border: '1px solid red' }}>{error}</h1>
        )
    }

    return (
        <div>
            {(users as User[]).map((user) => <UserItem user={user} />)}
        </div>
    )
}