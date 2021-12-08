import { Users } from '../database.json'
import { useState } from 'react'

type Props = {
    view: () => void
}

const LoginView = (props: Props) => {
    //const userNames = Users
    const [inputValue, setInputValue] = useState<string>("")

    function LogaIn(){

        const user = Users.find(user => user.name === inputValue)
        if (user) {
            props.view()
        }   else {
            // gör något som visar fel som går att testa
        }     

        
        //1. När man klickar på knappen ska man då - först test
        //2. Ta emot värdet i name textfältet
        //3. Jämföra om den finns i userNames
        //4. Skicka användaren vidare till ProductsView

        //const nameFromInput = ''


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
            data-test="login-button"
            onClick={LogaIn}>Log In</button>
        </div>
    )
}

export default LoginView

