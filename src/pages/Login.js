import React, {useRef, useState} from "react";
import {
    IonPage,
    IonContent,
    IonInput, IonButton, IonSpinner, IonText, useIonToast
} from "@ionic/react";
import './css/Login.css';


function Login(props) {

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [validating, setValidating] = useState(false);

    const [presentToast, dismissToast] = useIonToast();

    const loginInput = useRef(null);
    const passInput = useRef(null);

    async function login(e) {

        e.preventDefault();

        setValidating(true);

        const url = `${api}/login`;

        const method = 'POST';

        const body = JSON.stringify({
            login: loginInput.current.value,
            password: passInput.current.value
        })

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:8101'
        }

        const response = await fetch(url, { method, headers, body }).then(resp => resp.json())

        if (response.errors) {
            presentToast({
                duration: 1000,
                color: 'danger',
                message: Object.values(response.errors)[0]
            });
        }

        setValidating(false)

    }

    return (
        <IonPage>
            <IonContent className='login' fullscreen={true}>
                <div className="login__wrap">
                    <h1 className='login__title'>
                        Auth
                    </h1>
                    <form onSubmit={login} className='login__form'>
                        <IonInput placeholder='Login' ref={loginInput}/>
                        <IonInput placeholder='Password' type='password' ref={passInput}/>
                        <IonButton type='submit' className='login__submit'>
                            { validating ? <IonSpinner name='crescent'/> : 'Login' }
                        </IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    )
}


export default Login;