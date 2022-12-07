import React, {useState} from 'react'
import api from '../API'
import MeetingUsers from './meetingUsers'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    
    const getUserList = () => {
        return (
            users.map((user) => (
                <tr key={user._id}>
                    <th scope="row">{user.name}</th>
                    <td>{getUserQualities(user.qualities)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td><button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(user._id)}>Delete</button></td>
                </tr>
            ))
        )
    }
    const getUserQualities = (qualities) => {
        return qualities.map((quality) => {
            return <span key={quality._id} className={'badge m-1 bg-' + quality.color}>{quality.name}</span>
        })
        
    }
    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id))
    }
    
    return (
        <>
            <MeetingUsers userMeetYouCount={users.length}/>

            {
            users.length > 0 && <table className="table table-dark table-hover mt-2">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"/>
                    </tr>
                </thead>
                <tbody>
                   { getUserList()}
                </tbody>
            </table>
            }
        </>
    )
}

export default Users