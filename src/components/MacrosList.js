import React, {useEffect, useState} from 'react';
import {
    IonFabButton, IonFab, IonIcon
} from "@ionic/react";
import {addOutline} from "ionicons/icons";
import MacroItem from "./MacroItem";


function MacrosList(props) {

    const api = 'http://127.0.0.1:8000/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Credentials': 'include',
        'Origin': 'http://localhost:8101',
    }

    const [macros, setMacros] = useState([]);

    useEffect(() => {
        loadMacros();
    }, []);

    async function loadMacros() {

        const url = `${api}/macros`;

        const macros = await fetch(url, { headers }).then(resp => resp.json());

        setMacros(macros);

    }

    async function createMacro() {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Origin': 'http://192.168.56.1:3000',
        }

        const url = `${api}/macros`;

        const method = 'POST';

        const macro = await fetch(url, { method, headers }).then(resp => resp.json());

        setMacros([...macros, macro]);

    }

    const macrosList = macros.map( item =>
        <MacroItem key={item.id} macro={item}/>
    );

    return  (
        <>
            { macrosList }

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={createMacro}>
                    <IonIcon icon={addOutline}/>
                </IonFabButton>
            </IonFab>
        </>
    )



}


export default MacrosList;