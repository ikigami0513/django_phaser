import { Scene } from 'phaser';
import { getBaseUrl } from '../utils/urls';

export class Boot extends Scene {
    constructor () {
        super('Boot');
    }

    preload () {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.setBaseURL(`${getBaseUrl()}/static/assets/`);
        this.load.image('background', 'bg.png');
    }

    create () {
        this.scene.start('Preloader');
    }
}
