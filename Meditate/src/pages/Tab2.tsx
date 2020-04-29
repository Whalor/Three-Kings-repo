import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sound Effects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" shape="round" color="light">Sound one</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound two</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound three</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound four</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound five</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound six</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound seven</IonButton>
        <IonButton expand="full" shape="round" color="light">Sound eight</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
