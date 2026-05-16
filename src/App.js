import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIN] = useState(false);

    return (
        <div className="container">
            <h1>Witaj w systemie zapisów na zajęcia</h1>
            {!isLoggedIn && <div>
                <h4>Zaloguj się emailem</h4>
            <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
            <button onClick={() => setIsLoggedIN(true)}>Zaloguj się </button>
            </div>}
            {isLoggedIn && <div>
                    <h4>Witaj {email}</h4>
                    <a class="button button-clear" onClick={()=>setIsLoggedIN(false)}>Wyloguj</a>
            </div>}
        </div>
    );
}

export default App;
