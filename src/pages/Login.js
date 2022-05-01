import React from "react";
import {
    IonPage,
    IonContent,
    IonInput
} from "@ionic/react";
import './css/Login.css';


function Login(props) {

    const api = 'http://127.0.0.1:8000/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    function login(e) {

        e.preventDefault();

        const url = `${api}/login`;

        const method = 'POST';

        const body = JSON.stringify({
            login: '',
            password: ''
        })

        const headers = {
            'Content-Type': 'application/json',
        }

        fetch(url, { method, headers, body })
            .then(resp => resp.json())
            .then(resp => console.log(resp));

    }

    return (
        <IonPage>
            <IonContent className='login' fullscreen={true}>
                <div className="login__wrap">
                    <h1 className='login__title'>
                        Auth
                    </h1>


                    <form onSubmit={login} className='login__form'>
                        <IonInput placeholder='Login'/>
                        <IonInput placeholder='Password' type='password'/>
                        <input type="submit" value='Login' className='login__submit'/>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    )
}


export default Login;