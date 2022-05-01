import {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle
} from '@ionic/react';
import React from "react";
import RoomsList from "../components/RoomsList";
import './css/Home.css';


function Home() {

    return (
        <IonPage>

            <IonToolbar>
                <IonTitle> Rooms </IonTitle>
            </IonToolbar>

            <IonContent>

                <RoomsList/>

            </IonContent>
        </IonPage>
    );
}


export default Home;
