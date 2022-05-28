import React, {useEffect, useState} from 'react';
import {useIonLoading} from "@ionic/react";
import DeviceItem from "./DeviceItem";


function DevicesList() {

    const api = 'https://smarthouse-api.herokuapp.com/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [devices, setDevices] = useState([]);
    const [presentLoading, dismissLoading] = useIonLoading();

    useEffect(() => {

        presentLoading({
            message: 'Loading...',
            spinner: 'crescent'
        });

        loadRooms()

    }, []);

    function loadRooms() {

        const url = `${api}/rooms`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { headers })
            .then(resp => resp.json())
            .then(rooms => loadDevices(rooms));

    }

    async function loadDevices(rooms) {

        const devices = [];

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        for (const { id } of rooms) {
            const url = `${api}/rooms/${id}/devices`;
            const roomDevices = await fetch(url, { headers }).then(resp => resp.json())
            devices.push(...roomDevices);
        }

        setDevices(devices);

        dismissLoading();

    }

    return devices.map( device =>
        <DeviceItem key={device.id} device={device}/>
    );

}


export default DevicesList;