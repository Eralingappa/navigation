import {Component} from "react";

class Home extends Component {
    gothLogin =()=>{
        console.log(`how to navigation on  Login Page Click on Button `)
    }
    render(){
        return (
            <div>
                <h1> This is my Page </h1>
                <button onClick={this.gothLogin}>Login</button>
                <button> Singup</button>
            </div>
        )
    }
}
export default Home