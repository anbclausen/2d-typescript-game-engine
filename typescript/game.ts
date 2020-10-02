class Game {
    // let's define an x coordinate for something we want to draw
    x: number;

    constructor() {

        this.x = 100;
    }

    public draw = (_g: Graphics): void => {
        // setting color of future elements drawn to the canvas
        _g.setColor("#bbbbbb");

        // drawing a string a with x-position this.x
        _g.drawString("Press the right arrow key!", this.x, 100);
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

    mouseClicked(e: MouseEvent, x: number, y: number) {
        // writing the clicked location to the console
        console.log("Mouse clicked at " + x + ", " + y);
    }

    mouseMoved(e: MouseEvent, x: number, y: number) {

    }
}