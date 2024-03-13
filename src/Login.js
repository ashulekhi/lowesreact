import { useState } from "react"

function Login() {
    var user = {}
    var totalusers = []
    var [onlineUsers,setOnlineusers] =  useState(0)
    console.log("People jpined" , onlineUsers)
    function joinMeeting(){
        setOnlineusers(onlineUsers+1)
    }

    function handleEmail(event){
        user.email = event.target.value
    }

    function handlePassword(event){
        user.password = event.target.value
    }

    function handleLogin(){
        console.log("User details" , user)
        var temp = {...user}
        totalusers.push(temp)
        console.log("Total User details" , totalusers)


    }

    return (
        <div>
            <h1>Login Component</h1>
            <h1>People Joined {onlineUsers}</h1>
            <div>
                <input onChange={handleEmail} placeholder="Email" />
            </div>
            <div>
                <input onChange={handlePassword} placeholder="Password" /> 
            </div>
            <div>
                <button  onClick={handleLogin} style={{"height":"30px","background-color":"blue" , color:"white"}}>Login</button>
            </div>
            <div>
                <button  onClick={joinMeeting} style={{"height":"30px","background-color":"blue" , color:"white"}}>Join Meeting</button>
            </div>
        </div>
    )
}
export default Login