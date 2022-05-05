import {IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonBackButton} from "@ionic/react";
import React, {useEffect, useState} from "react";
import './css/Room.css';
import {useParams} from "react-router";
import DevicesList from "../components/DevicesList";
import DeviceItem from "../components/DeviceItem";


function Room() {

    const {roomId} = useParams();
    const [room, setRoom] = useState([]);
    const [devices, setDevices] = useState([]);

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const headers = {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
    }

    useEffect(async () => {
        loadDevices(roomId);
        loadRoom();

    }, []);

    async function loadRoom() {
        const room = await fetch(`${api}/rooms/${roomId}`, { headers }).then(resp => resp.json())
        setRoom(room);
    }

    async function loadDevices(id) {

        const url = `${api}/rooms/${id}/devices`;
        const devices = await fetch(url, { headers }).then(resp => resp.json())

        setDevices(devices);

    }

    const devicesList = devices.map( ({ id, name, type_id, type_name, value }) =>
        <DeviceItem key={id} id={id} name={name} type_id={type_id} type_name={type_name} value={value}/>
    );
    
    return (
        <IonPage>
            <IonContent>

                <IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton defaultHref={'/home'}/>
                    </IonButtons>

                    <IonTitle>{room.name}</IonTitle>

                </IonToolbar>

                {
                    devicesList
                }

            </IonContent>
        </IonPage>
    );
}

export default Room;
