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
import DeviceControls from "./DeviceControls";

function DeviceItem({ id, type_id, type_name, value, name }) {

    return (

        <IonCard key={id}>

            <IonCardHeader>

                <IonCardSubtitle>{ name }</IonCardSubtitle>
                <IonCardTitle>{ type_name }</IonCardTitle>

                <IonCardContent>

                    <DeviceControls type_id={type_id} value={value} id={id}/>

                    <IonButton size='small' fill='clear' shape='round' style={{ position: 'absolute', right: '-25px', top: '-60px' }}>
                        <IonIcon icon={bookmarkOutline}/>
                    </IonButton>

                </IonCardContent>
            </IonCardHeader>

        </IonCard>

    )

}


export default DeviceItem;