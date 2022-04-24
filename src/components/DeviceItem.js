import React from "react";
import {
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonSegment,
    IonSegmentButton, IonLabel, IonRange
} from "@ionic/react";

function DeviceItem(props) {

    return (
        <IonCard key={props.id}>

            <IonCardHeader>

                <IonCardSubtitle>{props.name}</IonCardSubtitle>
                <IonCardTitle>{props.type_name}</IonCardTitle>

                <IonCardContent>
                    {[1, 4].includes(props.type_id)
                    ? (
                        <IonSegment value={props.value}>
                            <IonSegmentButton value='close'>
                                <IonLabel>Close</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='open'>
                                <IonLabel>Open</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>)
                    : [2, 3].includes(props.type_id)
                        ? (
                            <IonSegment value={props.value}>
                                <IonSegmentButton value='off'>
                                    <IonLabel>Off</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='on'>
                                    <IonLabel>On</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>)
                        : props.type_id === 6
                        ? (
                            <IonRange value={props.value} min={10} max={30} pin color="secondary">
                                <IonLabel slot="start"> 10 </IonLabel>
                                <IonLabel slot="end"> 30 </IonLabel>
                            </IonRange>
                        ) : props.value
                    }
                </IonCardContent>
            </IonCardHeader>

        </IonCard>
    )

}


export default DeviceItem;