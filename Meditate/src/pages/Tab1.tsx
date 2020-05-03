import React, {Component} from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonItem } from '@ionic/react';
import './Tab1.css';
import '../theme/variables.css';
import Countdown from "../components/Countdown";

class Tab1 extends React.Component {

  render() {
    return (
      <IonPage>
        <IonContent class="background-image1">
          <IonHeader class="icon" >
            <IonToolbar >
              <IonTitle  size="large"/>
            </IonToolbar>
          </IonHeader>
          <IonCard color="dark">
            <IonCardHeader class="background-image1">
              <h3>Click the Start buttong below to begin meditation.</h3>
            </IonCardHeader>
          </IonCard>
          <IonCard class="background-image1">
            <div className="App">
              <div className="Timers">
                <Countdown/>
              </div>
            </div>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab1;