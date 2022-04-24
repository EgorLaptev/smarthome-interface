import {IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonButton} from "@ionic/react";
import React, {useEffect, useState} from "react";
import './css/Room.css';
import {useParams} from "react-router";
import DevicesList from "../components/DevicesList";


function Room() {

    const {roomId} = useParams();
    const [room, setRoom] = useState([]);

    const api = 'http://smart-house/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    useEffect(() => {

        const headers = {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(`http://smart-house/api/rooms/${roomId}`, { headers })
            .then(resp => resp.json())
            .then(room => setRoom(room));

    }, []);

    return (
        <IonPage>
            <IonContent>

                <IonToolbar>

                    <IonButtons slot="start">
                        <IonButton href={'home'}> Back </IonButton>
                    </IonButtons>

                    <IonTitle>{room.name}</IonTitle>

                </IonToolbar>

                <DevicesList room={roomId}/>

            </IonContent>
        </IonPage>
    );
}

export default Room;
