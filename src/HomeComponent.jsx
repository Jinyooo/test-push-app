import React from 'react';
import { useState } from 'react';

function HomeComponent(props) {
    const [name, setName] = useState('');
    const [display, setDisplay] = useState(false);

    const submitName = (e) =>{
        e.preventDefault();
        setDisplay(true);
    }
    const setMyName = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>Home</h1>
            <p>당신의 이름은 무엇입니까?</p>
            <input type="text" onChange={setMyName}/>
            
            { name &&  <p><b>반갑습니다 {name}님 </b></p> }
            
            
        </div>
    );
}

export default HomeComponent;