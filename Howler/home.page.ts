import { Howl } from 'howler';
import {component} from '@angular/core':

export interface Track {
	name: string;
	path: string;
}
@Component ({
	selector: 'app-home',
	templateURL: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	playlist: Track[] = [
	{
		name: 'A new beginning',
		path: './assets/mp3/bensound-anewbeginning.mp3'
	},
	{
		name: 'Creative Minds',
		path: './assets/mp3/...'
	},
	{
		name: 'Summer',
		path: './assets/mp3/...'
	}
	];
	
	activeTrack: Track = null;
	player: Howl = null;
	isPlaying = false;
	progress = 0;
	@ViewChild('range', {static:false}) range: IonRange;

constructor() {}

start (track: Track) {
	if (this.player) {
		this.player.stop();
	}
	this.player = new Howl({
		src: [track.path],
		html5: true,
		onplay: () => (
		console.log('onplay');
		this.isPlaying = true;
		this.activeTrack = track;
		this.updateProgress();
	},
	onend: () => {
		console.log('onend');
	}
	});
	this.player.play();
}

togglePlayer(pause) {
	this.isPlaying = !pause;
	if (pause) {
		this.player.pause();
	} else {
		this.player.play();
	}	
}

next() {
	let index = this.playlist.indexOf(this.activeTrack);
	if (index != this.playlist.length - 1) {
		this.start(this.playlist[index + 1]);
	} else {
		this.start(this.playlist[0]);
	}

}

prev() {
	let index = this.playlist.indexOf(this.activeTrack);
	if (index > 0) {
		this.start(this.playlist[index - 1 ]);
	} else {
		this.start(this.playlist[this.playlist.length - 1]);
	}
}

seek() {
	let newValue = +this.range.value;
	let duration = this.player.duration();
	this.player.seek(duration * (newValue / 100));
}

updateProgress () {
	let seek = this.player.seek();
	this.progress = (seek / this.player.duration()) * 100 || 0;
	setTimeout(() => {
		this.updateProgress();
	}, 1000)
}




















