///<reference path="manager.ts"/>
///<reference path="graphics.ts"/>

class Game {
    // images are represented as HTMLImageElements
    image: HTMLImageElement;

    // let's define an x coordinate for something we want to draw
    x: number;

    constructor() {
        // using the loadImg method in manager.ts to load typescript.png from your local server
        this.image = loadImg("http://0.0.0.0:8000/typescript.png");

        this.x = 100;
    }

    public draw = (_g: Graphics): void => {
        // setting color of future elements drawn to the canvas
        _g.setColor("#bbbbbb");

        // drawing a string a with x-position this.x
        _g.drawString("Press the right arrow key!", this.x, 100);

        // drawing an image from your local server
        _g.drawImage(this.image, 100, 200);
    }

    public update = (): void => {

    }

    keyPressed(e: KeyboardEvent) {
        // do something if the right arrow key is pressed
        if (e.key == "ArrowRight") {
            this.x += 5;
        }
    }

    keyReleased(e: KeyboardEvent) {

    }
}