import React from "react";
import {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonFabButton,
    IonFab,
    IonIcon
} from "@ionic/react";
import MacrosList from "../components/MacrosList";
import {addOutline} from "ionicons/icons";
import './css/Macros.css';


function Macros(props) {
    return (
        <IonPage>
            <IonToolbar>

                <IonTitle> Macros </IonTitle>

                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home"/>
                </IonButtons>

            </IonToolbar>
            <IonContent>

                <MacrosList/>

            </IonContent>
        </IonPage>
    )
}


export default Macros;