import React, { useState } from 'react';
import { Users } from "../database.json"
import { Props } from "../models/Admin"

export const AdminUser = (props: Props) => {
    const [nameValue, setnameValue] = useState<string>("")
    const [passwordValue, setpasswordValue] = useState<string>("")
    const [userList, setUserList] = useState(Users)
    const registerUser = () => {   
        Users.push({name: nameValue, login: passwordValue})
        setUserList(Users)
        setpasswordValue("")
        setnameValue("")
    }
    return (
        <div className="adminUser">
            <div className="userInputs">
                <div className="inputContainer">
                    <label htmlFor="">Name</label>
                    <input 
                    type="text"
                    data-test="admin-user-name-input"
                    value={nameValue}
                    onChange={(
                    ev: React.ChangeEvent<HTMLInputElement>,
                    ): void => setnameValue(ev.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="">Password</label>
                    <input 
                    type="text"
                    data-test="admin-user-password-input"
                    value={passwordValue}
                    onChange={(
                    ev: React.ChangeEvent<HTMLInputElement>,
                    ): void => setpasswordValue(ev.target.value)}
                    />
                </div>
                <button className="button" data-test="admin-new-user-button" onClick={registerUser}>Register</button>
            </div>
            <article>
                <ul className="userList">
                {
                userList.filter(user => user.name.toLowerCase().includes(props.inputValue.toLowerCase())).map(user => (
                    <li className="userItem" key={user.login}>
                        <h3>{user.name}</h3>
                        <p>{user.login}</p>
                    </li>
                ))
                }
                </ul>
            </article>
        </div>
    )
  }


  export default AdminUser