import React, {useEffect, useState} from 'react';
import {
    IonList, IonItem, IonNote,
    IonLabel,
    IonToolbar, IonTitle,
    IonButton, IonButtons,
    IonContent,
    IonIcon,
    IonRange,
    IonCard, IonCardSubtitle, IonCardContent, IonCardHeader, IonSelect, IonSelectOption
} from "@ionic/react";
import {addOutline} from "ionicons/icons";


function MacroModal({ onDismiss, macro }) {

    const [devices, setDevices] = useState([]);

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

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

                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Light</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>Target</IonLabel>
                                <IonSelect value='off'>
                                    <IonSelectOption value='on'> On </IonSelectOption>
                                    <IonSelectOption value='off'> Off </IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Thermostat</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>Target</IonLabel>
                                <IonRange min={10} max={30} pin={true} color="secondary">
                                    <IonLabel slot="start">10</IonLabel>
                                    <IonLabel slot="end">30</IonLabel>
                                </IonRange>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonButton expand='block' fill='clear' size='large'>Link Device</IonButton>

            </IonContent>


        </>
    )
}


export default MacroModal;
