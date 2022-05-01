import {IonPage, IonContent, IonToolbar, IonBackButton, IonButtons, IonTitle} from "@ionic/react";
import React from 'react';
import {useParams} from "react-router";
import DevicesList from "../components/DevicesList";


function Devices() {

    const {deviceId} = useParams();

    return (
        <IonPage>
            <IonToolbar>
                <IonTitle> Devices </IonTitle>

                <IonButtons slot="start">
                    <IonBackButton defaultHref="home"/>
                </IonButtons>
            </IonToolbar>

            <IonContent>
                <DevicesList room={390}/>
            </IonContent>
        </IonPage>
    )

}


export default Devices;