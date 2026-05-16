import './App.css'
import {useState} from "react";

export default function UserPanel(props) {
    return <div>
        <h4>Witaj {props.email}</h4>
        <a class="button button-clear" onClick={() => props.onLogout()}>Wyloguj</a>
    </div>
}