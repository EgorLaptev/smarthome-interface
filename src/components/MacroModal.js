import React, {useEffect, useState} from 'react';
import {
    IonList, IonItem, IonNote,
    IonLabel,
    IonToolbar, IonTitle,
    IonButton, IonButtons,
    IonContent,
    IonIcon,
    IonCard, IonCardSubtitle, IonCardTitle,IonCardContent, IonCardHeader
} from "@ionic/react";
import {addOutline} from "ionicons/icons";
import DeviceItem from "./DeviceItem";
import DeviceControls from "./DeviceControls";


function MacroModal({ onDismiss, macro }) {

    const [devices, setDevices] = useState([]);

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }

    useEffect(loadDevices, []);

    async function loadDevices() {

        const devices = [];

        for (const { device_id } of macro.devices ?? []) {
            const url = `${api}/devices/${device_id}`;
            const device = await fetch(url, { method: 'GET', headers }).then( resp => resp.json() );
            devices.push(device);
        }

        setDevices(devices);

    }

    const devicesList = devices.map( device =>
        <IonCard key={device.id}>

            <IonCardHeader>

                <IonCardSubtitle>{ device.name }</IonCardSubtitle>
                <IonCardTitle>{ device.type_name }</IonCardTitle>

                <IonCardContent>

                    <DeviceControls type_id={device.type_id} value={device.value} onUpdate={onUpdate}/>

                </IonCardContent>
            </IonCardHeader>

        </IonCard>
    );

    function onUpdate(e) {



    }

    function deleteMacro() {}

    return (
        <>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={deleteMacro} color='danger'> Delete </IonButton>
                </IonButtons>
                <IonTitle>Macro devices</IonTitle>
                <IonButtons slot="end">
                    <IonButton onClick={onDismiss}> Close </IonButton>
                </IonButtons>
            </IonToolbar>

            <IonContent>

                { devicesList }

                <IonButton expand='block' fill='clear' size='large'>Link Device</IonButton>

            </IonContent>


        </>
    )
}


export default MacroModal;
