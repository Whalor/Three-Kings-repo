import React, {Component} from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonItem } from '@ionic/react';
import './Tab1.css';
import '../theme/variables.css';
import Countdown from "../components/Countdown";

class Tab1 extends React.Component {

  render() {
    return (
      <IonPage>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle size="large">Meditate</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardHeader>
              <h3>Meditate for how long?</h3>
            </IonCardHeader>
          </IonCard>
          <IonCard>
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