import {
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonToolbar,
    IonSegment, IonSegmentButton
} from '@ionic/react';
import React, {useEffect, useState} from "react";
import './css/Home.css';
import DevicesList from "../components/DevicesList";


function Home() {

    const api = 'http://smart-house/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [rooms, setRooms] = useState([]);
    const [devices, setDevices] = useState([]);
    const [filter, setFilter] = useState('rooms');

    useEffect(() => {
        loadRooms();
    }, []);

    function loadRooms() {

        const url = 'http://smart-house/api/rooms';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { headers })
            .then(resp => resp.json())
            .then(rooms => setRooms(rooms));

    }

    const roomsList = rooms.map( item =>
        <IonCard href={`/rooms/${item.id}`} key={item.id}>
            <img src="https://img.vini-pol.ru/files/1/3701/12480117/original/vodostojkij-laminat-na-kuhne-v-sovremennom-stile.jpg" />

            <IonCardHeader>
                <IonCardSubtitle>Комната</IonCardSubtitle>
                <IonCardTitle>{item.name}</IonCardTitle>
            </IonCardHeader>

        </IonCard>
    );

    function doFilter(ev) {
        setFilter(ev.target.value);
    }

    return (
        <IonPage>
            <IonContent>

                <IonToolbar>
                    <IonSegment value={filter}>
                        <IonSegmentButton value="rooms" onClick={doFilter}>Rooms</IonSegmentButton>
                        <IonSegmentButton value="favorites" onClick={doFilter}>Favorites</IonSegmentButton>
                        <IonSegmentButton value="devices" onClick={doFilter}>Devices</IonSegmentButton>
                    </IonSegment>
                </IonToolbar>

                { filter === 'rooms'
                    ? roomsList
                    : <DevicesList room={390}/>
                }

            </IonContent>
        </IonPage>
    );
}

export default Home;
