import './App.css'
import {useState} from "react";
import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel(props) {
    return <div>
        <h4>Witaj {props.email}</h4>
        <MeetingsPage/>
        <a class="button button-clear" onClick={() => props.onLogout()}>Wyloguj</a>
    </div>
}