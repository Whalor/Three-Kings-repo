import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonButton, IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonItem, IonRippleEffect, IonRouterOutlet } from '@ionic/react';
import './Tab4.css';
import Tab1 from './Tab1';

interface ContainerProps {
  name: string;
}

const Tab4: React.FC<ContainerProps> = ({name}) => {
  return (
    
    <IonPage >
      <IonContent class="background-image5">
        <IonRouterOutlet>
        <Route path="/tab1" component={Tab1}/>
        </IonRouterOutlet>
      <IonHeader class="icon"> <p></p>
        <IonToolbar><p></p>
          <IonTitle><p>Welcome, to Meditate With Me :)</p> </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButton color="medium" size="large" href="/tab1" className="ion-activatable ripple-parent container4" expand="block">
            <div className="begin-button">Click here to begin.</div>
            <IonRippleEffect></IonRippleEffect>
      </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Tab4;