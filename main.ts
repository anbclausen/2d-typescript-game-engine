/* This simple game engine was made by @anbclausen (GitHub).
 * Feel free to use this code for any personal, educational or commercial matter.
 * I would be glad to be included in credits and/or take a look at the project
 * you've used this engine for.
 * 
 * Good luck and happy coding!
 */

//The only thing you should edit in this class
{
    //width and height for canvas in browser
    var WIDTH: number = 1365;
    var HEIGHT: number = 805;

    //frames per second of the game (60 is about max, but it's unstable), go for 30-55
    var fps: number = 30;

    //how much do you want to scale the window (multiplier)
    var scale: number = 2;

    //turn interpolation on or off (pixelate or not)
    var interpolation: boolean = false;
}

/// <reference path="graphics.ts"/>
/// <reference path="game.ts"/>

var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D;

var _g: Graphics;
var frameCount: number = 0;
var fpsInterval: number;
var startTime: number;
var now: number;
var then: number;
var elapsed: number;


class Main {
    game: Game;

    constructor() {
        this.game = new Game();
    }

    public draw = (): void => {
        _g.setColor("black");
        _g.fillRect(0, 0, WIDTH, HEIGHT);
        this.game.draw(_g);
    }

    public update = (): void => {
        this.game.update();
    }

    keyPressed(e: KeyboardEvent) {
        this.game.keyPressed(e);
    }

    keyReleased(e: KeyboardEvent) {
        this.game.keyReleased(e);
    }

    mouseClicked(e: MouseEvent) {
        let x = e.offsetX / scale;
        let y = e.offsetY / scale;
        this.game.mouseClicked(e, x, y);
    }

    mouseMoved(e: MouseEvent) {
        let x = e.offsetX / scale;
        let y = e.offsetY / scale;
        this.game.mouseMoved(e, x, y);
    }
}

// This line starts it all.
var main = new Main();


function startGameloop(fps: number) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    gameLoop();
}

function gameLoop() {
    requestAnimationFrame(gameLoop);

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {

        then = now - (elapsed % fpsInterval);

        main.draw();
        main.update();
        var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
        //console.log(currentFps + " fps.");

    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    context = canvas.getContext("2d");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    context.imageSmoothingEnabled = interpolation;

    _g = new Graphics(context);
    _g.setScale(scale);
    startGameloop(fps);

    addEvents();
}

function addEvents(){
    addKeyDownEvent();
    addKeyUpEvent();
    addMouseDownEvent()
    addMouseMoveEvent();
}

function addKeyDownEvent(){
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }
    
        main.keyPressed(event);
    
        event.preventDefault();
    }, true);
}

function addKeyUpEvent(){
    window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
            return;
        }
    
        main.keyReleased(event);
    
        event.preventDefault();
    }, true);
}

function addMouseDownEvent(){
    canvas.addEventListener("mousedown", function (event) {
        if (event.defaultPrevented) {
            return;
        }
    
        main.mouseClicked(event);
    
        event.preventDefault();
    }, true);
}

function addMouseMoveEvent(){
    canvas.addEventListener("mousemove", function (event) {
        if (event.defaultPrevented) {
            return;
        }
    
        main.mouseMoved(event);
    
        event.preventDefault();
    }, true);
}