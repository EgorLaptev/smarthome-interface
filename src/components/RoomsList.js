import React, {useEffect, useState} from 'react';
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonSpinner} from "@ionic/react";


function RoomsList(props) {

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [rooms, setRooms] = useState([]);

    useEffect(() => loadRooms() , []);

    async function loadRooms() {

        const url = `${api}/rooms`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const rooms = await fetch(url, { headers }).then(resp => resp.json())

        setRooms(rooms);

    }

    return rooms.map( ({ id, name, photo }) =>
        <IonCard routerLink={`/rooms/${ id }`} key={ id }>

            <img style={{maxHeight: '125px', width: '100%', objectFit: 'cover'}} src={photo} alt={'room\'s image'}/>

            <IonCardHeader>
                <IonCardSubtitle> Room </IonCardSubtitle>
                <IonCardTitle>{ name }</IonCardTitle>
            </IonCardHeader>

        </IonCard>
    );

}


export default RoomsList