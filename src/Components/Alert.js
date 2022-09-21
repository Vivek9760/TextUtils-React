import React from 'react';

function Alert(props){
    const capitalize=(word)=>{
        let text = word.toLowerCase();
        return text[0].toUpperCase() + text.slice(1);
    }
    return( 
        props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
</div>
    );
}

export default Alert;