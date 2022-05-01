import React, {useEffect, useState} from 'react';
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";


function RoomsList(props) {

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        loadRooms();
    }, []);

    function loadRooms() {

        const url = `${api}/rooms`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { headers })
            .then(resp => resp.json())
            .then(rooms => setRooms(rooms));

    }

    return rooms.map( item =>
        <IonCard routerLink={`/rooms/${item.id}`} key={item.id}>
            <IonImg src="https://img.vini-pol.ru/files/1/3701/12480117/original/vodostojkij-laminat-na-kuhne-v-sovremennom-stile.jpg" alt={'kitchen'}/>

            <IonCardHeader>
                <IonCardSubtitle>Room</IonCardSubtitle>
                <IonCardTitle>{item.name}</IonCardTitle>
            </IonCardHeader>

        </IonCard>
    );

}


export default RoomsList