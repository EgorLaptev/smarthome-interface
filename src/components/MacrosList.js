import React, {useEffect, useState} from 'react';
import {
    IonFabButton, IonFab, IonIcon
} from "@ionic/react";
import {addOutline} from "ionicons/icons";
import MacroItem from "./MacroItem";


function MacrosList(props) {

    const api = 'http://smart-house/api';
    const token = 'a5k0GRDG3Gn5oBxc3ne8OvGntri2BCuN';

    const [macros, setMacros] = useState([]);

    useEffect(() => {
        loadMacros();
    }, []);

    function loadMacros() {

        const url = `${api}/macros`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        fetch(url, { headers })
            .then(resp => resp.json())
            .then(macros => setMacros(macros));

    }

    function newMacro() {

    }

    const macrosList = macros.map( item =>
        <MacroItem key={item.id} macro={item}/>
    );

    return  (
        <>
            { macrosList }

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={newMacro}>
                    <IonIcon icon={addOutline}/>
                </IonFabButton>
            </IonFab>
        </>
    )



}


export default MacrosList;