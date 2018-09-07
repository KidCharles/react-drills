import React, {Component} from 'react';
import Button from './ButtonLogin';

export default class Password extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
   handleName=(val)=> {
        this.setState({username:val})
    }
    handlePass=(val)=> {
        this.setState({password:val})
    }
    handleLogin=()=> {
       alert(`Login : ${this.state.username} with password: ${this.state.password}`)
    }
    render(){
        // let {username, password}=this.state
        return(
            <div>
                <input placeholder="username" value={this.state.username} onChange={(e)=> this.handleName(e.target.value)}/>
                <input placeholder="password" value={this.state.password} onChange={(e)=> this.handlePass(e.target.value)}/>
                <Button 
                login={this.handleLogin}
                />
            </div> 
        )
    }
}