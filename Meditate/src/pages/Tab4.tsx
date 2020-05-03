import React from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonItem } from '@ionic/react';
import './Tab4.css';

interface ContainerProps {
  name: string;
}

const Tab4: React.FC<ContainerProps> = ({name}) => {
  return (
    
    <IonPage >
      <IonContent class="background-image5">
      <IonHeader class="icon"> <p></p>
        <IonToolbar><p></p>
          <IonTitle><p>Welcome, to Meditate With Me :)</p> </IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonCard >
            <IonCardHeader >
              <h3>Tap the Yellow Button to Open App</h3>
            </IonCardHeader>
            
          </IonCard>
          
          <div className="container4">
          <strong>{name}</strong>
          <button className="button4" type="button"><a target="" rel="noopener noreferrer" href="http://localhost:8100/tab1">__</a></button>
          </div> 
      </IonContent>
      
    </IonPage>
  );
};

export default Tab4;