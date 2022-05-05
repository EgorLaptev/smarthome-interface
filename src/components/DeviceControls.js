import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonRange } from "@ionic/react";


function DeviceControls({ type_id, value, id }) {

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    function onUpdate(e) {

        const url = `${api}/devices/${id}`;

        const method = 'PATCH';

        const body = JSON.stringify({
            'value': e.detail.value
        });

        fetch(url, { method, headers, body });

    }

    return [1, 4].includes(type_id)
        ?
        <IonSegment value={value} onIonChange={onUpdate}>
            <IonSegmentButton value='close'>
                <IonLabel>Close</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='open'>
                <IonLabel>Open</IonLabel>
            </IonSegmentButton>
        </IonSegment>
        : [2, 3].includes(type_id)
        ?
        <IonSegment value={value} onIonChange={onUpdate}>
            <IonSegmentButton value='off'>
                <IonLabel>Off</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='on'>
                <IonLabel>On</IonLabel>
            </IonSegmentButton>
        </IonSegment>
        : type_id == 6
        ?
        <IonRange value={value} min={10} max={30} pin color="secondary" onIonChange={onUpdate}>
            <IonLabel slot="start"> 10 </IonLabel>
            <IonLabel slot="end"> 30 </IonLabel>
        </IonRange>
        : value + ' °C'

}


export default DeviceControls;