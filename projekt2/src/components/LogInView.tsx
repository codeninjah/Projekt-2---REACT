import { Users } from '../database.json'

const LoginView = () => {
    //const name = ["Alex", "Simon"]
    const userNames = Users

    function LogaIn(){
        const nameField = document.querySelector(".name")
        console.log(nameField) // skriver ej ut värdet
        
        //1. När man klickar på knappen ska man då - först test
        //2. Ta emot värdet i name textfältet
        //3. Jämföra om den finns i userNames

        //const nameFromInput = ''

    }

    return(
        <div>
            <input type="text" placeholder="Name" className="name"></input>
            <button onClick={LogaIn}>Log In</button>
        </div>
    )
}

export default LoginView

