import React, {useRef, useState} from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, useIonToast, useIonModal, IonSpinner} from "@ionic/react";
import MacroModal from "./MacroModal";


function MacroItem ({ macro }) {

    const [macroRunning, setMacroRunning] = useState(false)
    const [presentToast, dismissToast] = useIonToast();
    const [presentModal, dismissModal] = useIonModal(MacroModal, {
        macro: macro,
        onDismiss() {
            dismissModal();
        }
    });

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    function runMacro(e) {

        setMacroRunning(true);

        e.stopPropagation();

        const url = `${api}/macros/${macro.id}`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { headers })
            .then(resp => resp.json())
            .then(data => {
                setMacroRunning(false);
                presentToast({
                    color: data.success ? 'light' : 'danger',
                    message: data.success ? 'The macro is completed' : 'No connected actions',
                    duration: 1000,
                });
            })

    }

    function openMacro() {
        presentModal();
    }

    return (
        <IonCard onClick={openMacro}>

            <IonCardHeader>
                <IonCardSubtitle>Macro</IonCardSubtitle>
                <IonCardTitle>{macro.name}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <IonButton expand='block' onClick={runMacro}>
                    { macroRunning ? <IonSpinner name='crescent' color='light'/> : 'Run' }
                </IonButton>
            </IonCardContent>

        </IonCard>
    )
}


export default MacroItem;