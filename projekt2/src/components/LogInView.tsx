import { Users } from '../database.json'
import { useState } from 'react'
import { User, Props } from "../models/User"

const LoginView = (props: Props) => {
    const [inputValue, setInputValue] = useState<string>("")
    const LogaIn = () => {
        const user:User | undefined = Users.find(user => user.name === inputValue)
        if (user) {
            props.view()
        }   else {
            setInputValue("Wrong name")
        }     
    }
    return(
        <div>
            <input 
            type="text"
            placeholder="Name"
            className="name"
            value={inputValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setInputValue(ev.target.value)}
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

