import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonItem } from '@ionic/react';
import './Tab1.css';
import { attachProps } from '@ionic/react/dist/types/components/utils';

interface Props {
  startTimeInSeconds: number;
}

interface State {
  timeRemainingInSeconds: number;
}

function startClick() {
  
}

class CountdownTimer extends React.Component<Props, State> {
  private timer: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      timeRemainingInSeconds: props.startTimeInSeconds
    };
  }

  decrementTimeRemaining = () => {
    if (this.state.timeRemainingInSeconds > 0) {
      this.setState({
        timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1
      });
    } else {
      clearInterval(this.timer!);
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.decrementTimeRemaining();
    }, 1000);
  }

  render() {
    return (
      <IonCard class="customItem">
      <IonItem>
    <div className="countdown-timer">
      <div className="countdown-timer__circle">
        <svg>
          <circle
            r="100"
            cx="105"
            cy="105"
            style={{
              animation: `countdown-animation ${this.props
                .startTimeInSeconds}s linear`
            }}
          />
        </svg>
      </div>
      <div className="countdown-timer__text">
        {this.state.timeRemainingInSeconds}s
      </div>
    </div>
    </IonItem>
    </IonCard>
    );
  }
};

class Tab1 extends React.Component<Props, State> {


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
            <CountdownTimer startTimeInSeconds={60} />
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab1;