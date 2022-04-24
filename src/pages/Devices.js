import {IonPage, IonContent, IonToolbar, IonButton, IonButtons, IonTitle} from "@ionic/react";
import React from 'react';
import {useParams} from "react-router";


function Devices() {

    const {deviceId} = useParams();

    return (
        <IonPage>
            <IonContent>

                <IonToolbar>

                    <IonButtons slot="start">
                        <IonButton href={'home'}> Home </IonButton>
                    </IonButtons>

                    <IonTitle>{'Device name'}</IonTitle>

                </IonToolbar>

            </IonContent>
        </IonPage>
    )

}


export default Devices;