import React from "react";
import {IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonHeader, IonCard, IonCardContent} from "@ionic/react";
import DeviceControls from "./DeviceControls";


function DeviceModal({ device, onDismiss }) {

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color='danger'> Delete </IonButton>
                    </IonButtons>
                    <IonTitle>{ device.type_name }</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onDismiss}> Close </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                <IonCard>

                    <IonCardContent>
                        <DeviceControls type_id={device.type_id} value={device.value} id={device.id}/>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </>
    )

}


export default DeviceModal;