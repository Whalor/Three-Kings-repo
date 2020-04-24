import { IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
         } from '@ionic/react';
import React from 'react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Peace of Mind</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">
                  <h3>Home Page</h3>
                </IonTitle>
              </IonToolbar>
            </IonHeader>
          </IonContent>
      </IonPage>
  );
};

export default Home;
