import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="background-image2">
        <IonHeader class="icon">
          <IonToolbar>
            <IonTitle>Sound Effects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" shape="round" color="dark">Sound one</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound two</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound three</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound four</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound five</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound six</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound seven</IonButton>
        <IonButton expand="full" shape="round" color="dark">Sound eight</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
