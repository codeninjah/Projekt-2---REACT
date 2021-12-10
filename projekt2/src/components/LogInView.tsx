import { Users } from '../database.json'
import { useState } from 'react'
import { User, Props } from "../models/User"

const LoginView = (props: Props) => {
    const [nameValue, setnameValue] = useState<string>("")
    const [passwordValue, setpasswordValue] = useState<string>("")
    const LogaIn = () => {
        const user:User | undefined = Users.find(user => user.name === nameValue)
        if (user && user.login === passwordValue) {
          if (user.name === "Alex") {
              props.admin()
          }
          props.view()
        }   else {
            setnameValue("Wrong details")
            setpasswordValue("")
        }     
    }
    return(
        <div>
            <input 
            type="text"
            placeholder="Name"
            className="name"
            value={nameValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setnameValue(ev.target.value)}
          />
          <input 
            type="password"
            placeholder="Password"
            className="password"
            value={passwordValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setpasswordValue(ev.target.value)}
          />
            <button
            className="button"
            data-test="login-button"
            onClick={LogaIn}
            >Log In</button>

        </div>
    )
}

export default LoginView

