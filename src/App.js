import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('pgomolka@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let validationMessage = '';
    if (email.length<10){
        validationMessage=<div>Co za krótki email XD</div>
    } else if (email.length<15){
        validationMessage=<div>Ale masz spoko email</div>
    } else {
        validationMessage=<div>Ale bydle, takim to można zabić</div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" value={email} onChange={handleChange}/>
            { email.length>0 && <div>{validationMessage}</div> }
        </div>
    );
}

export default App;
