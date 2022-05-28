import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonRange } from "@ionic/react";


function DeviceControls({ type_id, value, onUpdate }) {

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