import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('pgomolka@agh.edu.pl');
    const [isLoggedIn, setIsLoggedIN] = useState(false);

    return (
        <div>
            <h1>Witaj w systemie zapisów na zajęcia</h1>
            {!isLoggedIn && <div>
            <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
            <button onClick={() => setIsLoggedIN(true)}>Zaloguj się </button>
            </div>}
                {isLoggedIn && <div>
                    <h1>Witaj {email}</h1>
                    <a onClick={()=>setIsLoggedIN(false)}>Wyloguj</a>
                </div>}
        </div>
    );
}

export default App;
