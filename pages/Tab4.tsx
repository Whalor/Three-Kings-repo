import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';

interface ContainerProps {
  name: string;
}

const Tab4: React.FC<ContainerProps> = ({name}) => {
  return (
    
    <IonPage>
      <IonContent class="background-image5">
      <IonHeader> 
        <IonToolbar>
          <IonTitle><div className="container">
      <strong>{name}</strong>
      <p>Click below to start Meditation :)</p>
      <button className="button4" type="button"><a target="" rel="noopener noreferrer" href="http://localhost:8101/tab1">Click Me!</a></button>
      </div>   </IonTitle>
        </IonToolbar>
      </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;