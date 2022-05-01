import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, rocketOutline, linkOutline, bookmarkOutline } from "ionicons/icons";
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Room from './pages/Room';
import Devices from "./pages/Devices";
import Favorites from "./pages/Favorites";
import Macros from "./pages/Macros";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {useState} from "react";

setupIonicReact();

function App (props) {

    const [isAuth, setAuth] = useState(true);

    return (
        <IonApp>
            { isAuth ?
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>

                            <Route exact path="/login">
                                <Login/>
                            </Route>
                            <Route exact path="/home">
                                <Home/>
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/home"/>
                            </Route>
                            <Route exact path="/rooms/:roomId">
                                <Room/>
                            </Route>
                            <Route exact path="/devices">
                                <Devices/>
                            </Route>
                            <Route exact path="/favorites">
                                <Favorites/>
                            </Route>
                            <Route exact path="/macros">
                                <Macros/>
                            </Route>
                            <Route render={() => <Redirect to='/home'/>}/>
                        </IonRouterOutlet>

                        <IonTabBar slot="bottom">

                            <IonTabButton tab="home" href='/home'>
                                <IonIcon icon={homeOutline}/>
                                <IonLabel>Home</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="devices" href='/devices'>
                                <IonIcon icon={linkOutline}/>
                                <IonLabel>Devices</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="macros" href='/macros'>
                                <IonIcon icon={rocketOutline}/>
                                <IonLabel>Macros</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="favorites" href='/favorites'>
                                <IonIcon icon={bookmarkOutline}/>
                                <IonLabel>Favorites</IonLabel>
                            </IonTabButton>

                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
                : <Login/>
            }
        </IonApp>
    )
}

export default App;
