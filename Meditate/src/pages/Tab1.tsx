import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {}
        <IonCard>
          <IonCardHeader>
            <h3>Meditation Timer</h3>
          </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
          {}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;