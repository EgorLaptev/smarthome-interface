import React, {useEffect, useState} from 'react';
import DeviceItem from "./DeviceItem";


function DevicesList(props) {

    const api = 'http://smart-house/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        loadDevices();
    }, []);

    function loadDevices() {

        const url = `${api}/rooms/${props.room}/devices`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { headers })
            .then(resp => resp.json())
            .then(devices => setDevices(devices));

    }

    return devices.map( item =>
        <DeviceItem key={item.id} id={item.id} name={item.name} type_id={item.type_id} type_name={item.type_name} value={item.value}/>
    );

}


export default DevicesList;