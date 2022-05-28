import React from "react";
import {
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonButton, IonIcon, useIonModal
} from "@ionic/react";
import {bookmarkOutline} from "ionicons/icons";
import DeviceControls from "./DeviceControls";
import DeviceModal from "./DeviceModal";

function DeviceItem({device}) {

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    const [presentModal, dismissModal] = useIonModal(DeviceModal, {
        device,
        onDismiss() {
            dismissModal()
        }
    });

    function openDevice(e) {
        e.stopPropagation();
        presentModal({
            initialBreakpoint: .4
        })
    }

    function onUpdate(e) {

        const url = `${api}/devices/${device.id}`;

        const method = 'PATCH';

        const body = JSON.stringify({
            'value': e.detail.value
        });

        fetch(url, { method, headers, body });

    }


    return (

        <IonCard key={device.id}>

            <IonCardHeader>

                <IonCardSubtitle>{ device.name }</IonCardSubtitle>
                <IonCardTitle>{ device.type_name }</IonCardTitle>

                <IonCardContent>

                    <DeviceControls type_id={device.type_id} value={device.value} id={device.id} onUpdate={onUpdate}/>

                    <IonButton size='small' fill='clear' shape='round' style={{ position: 'absolute', right: '-25px', top: '-60px' }}>
                        <IonIcon icon={bookmarkOutline}/>
                    </IonButton>

                </IonCardContent>
            </IonCardHeader>

        </IonCard>

    )

}


export default DeviceItem;