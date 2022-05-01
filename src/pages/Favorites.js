import React from "react";
import {IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonBackButton} from "@ionic/react";


function Favorites(props) {
    return (
        <IonPage>
            <IonToolbar>

                <IonTitle> Favorites </IonTitle>

                <IonButtons slot="start">
                    <IonBackButton defaultHref="home"/>
                </IonButtons>

            </IonToolbar>
            <IonContent>
            </IonContent>
        </IonPage>
    )
}


export default Favorites;