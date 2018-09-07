import React from 'react';

export default function ButtonLogin(props){
    console.log(props)
    return(
      <button 
      onClick={props.login}
      >
          Login
      </button>
    )
}