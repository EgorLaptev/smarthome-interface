import React from "react";
import {
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonSegment,
    IonSegmentButton, IonLabel, IonRange,
    IonButton, IonIcon
} from "@ionic/react";
import {bookmarkOutline} from "ionicons/icons";

function DeviceItem(props) {

    const api = 'http://127.0.0.1:8000/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    function updateDevice(e) {

        const url = `${api}/devices/${props.id}`;

        const method = 'PATCH';

        const body = JSON.stringify({
            'value': e.detail.value
        });

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { method, headers, body })
            // .then(resp => resp.json())
            // .then(resp => console.log(resp));

    }

    let controls;

    // Device type controls
    switch (props.type_id) {
        case 1:
        case 4:
            controls =
                <IonSegment value={props.value} onIonChange={updateDevice}>
                    <IonSegmentButton value='close'>
                        <IonLabel>Close</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value='open'>
                        <IonLabel>Open</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            break;
        case 2:
        case 3:
            controls =
                <IonSegment value={props.value} onIonChange={updateDevice}>
                    <IonSegmentButton value='off'>
                        <IonLabel>Off</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value='on'>
                        <IonLabel>On</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            break;
        case 5:
            controls = props.value + ' °C'
            break;
        case 6:
            controls =
                <IonRange value={props.value} min={10} max={30} pin color="secondary" onIonChange={updateDevice}>
                    <IonLabel slot="start"> 10 </IonLabel>
                    <IonLabel slot="end"> 30 </IonLabel>
                </IonRange>
            break;
    }

    return (

        <IonCard key={props.id}>

            <IonCardHeader>

                <IonCardSubtitle>{props.name}</IonCardSubtitle>
                <IonCardTitle>{props.type_name}</IonCardTitle>

                <IonCardContent>
                    { controls }
                    <IonButton size='small' fill='clear' shape='round' style={{ position: 'absolute', right: '-25px', top: '-60px' }}>
                        <IonIcon icon={bookmarkOutline}/>
                    </IonButton>
                </IonCardContent>
            </IonCardHeader>

        </IonCard>

    )

}


export default DeviceItem;