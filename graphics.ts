/**
 * This class keeps track of the CanvasRenderingContext2D, which is used for drawing on the HTML canvas.
 * This class also contains a lot of useful rendering methods.
 */
class Graphics {
    ctx: CanvasRenderingContext2D;

    /**
     * Constructs a Graphics object. This object keeps track of the CanvasRenderingContext2D, which is used for drawing on the HTML canvas.
     * This object also contains a lot of useful rendering methods.
     * @param ctx The initial CanvasRenderingContext2D.
     */
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    /**
     * Sets the color of future objects being drawn on the canvas.
     * @param color A string specifying the color. This can either be the hex for the color or the name of the color.
     * 
     * Example: ```setColor("#ffffff")``` or ```setColor("white")```
     */
    setColor(color: string) {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
    }

    /**
     * Fills a rectangle with the given dimensions at the given position.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     * @param w The width of the rectangle in pixels.
     * @param h The height of the rectangle in pixels.
     */
    fillRect(x: number, y: number, w: number, h: number) {
        this.ctx.fillRect(x, y, w, h);
    }

    /**
     * Draws a rectangle at the given position with an optional specified line width.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     * @param w The width of the rectangle in pixels.
     * @param h The height of the rectangle in pixels.
     * @param thickness An optional parameter specifying the line width.
     */
    drawRect(x: number, y: number, w: number, h: number, thickness?: number) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, w, h);
        if (thickness == null) {
            this.ctx.lineWidth = 2;
        } else {
            this.ctx.lineWidth = thickness;
        }
        this.ctx.stroke();
    }

    /**
     * Draws the given string at the given position with an optional CanvasTextAlign argument.
     * @param s The string you want to draw.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     * @param position Optional value specifying how the string is drawn relative to the given coordinate. Default value "start".
     * 
     * Example: ```drawString("Hello, World!", 100, 100, "center");```
     */
    drawString(s: string, x: number, y: number, position?: CanvasTextAlign) {
        if (position) {
            this.ctx.textAlign = position;
        }
        this.ctx.fillText(s, x, y);
        if (position) {
            this.ctx.textAlign = "start";
        }
    }

    /**
     * Draws an image on the specified x and y location.
     * @param img The image you want to draw.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     */
    drawImage(img: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, x: number, y: number) {
        this.ctx.drawImage(img, x, y);
    }

    /**
     * Draws a specific sprite from a sprite sheet.
     * @param img The image element containing the sprite sheet.
     * @param xpos The x coordinate the sprite is drawn to on the canvas.
     * @param ypos The y coordinate the sprite is drawn to on the canvas.
     * @param cols The number of coloumns of sprites in the spritesheet.
     * @param rows The number of rows of sprites in the spritesheet.
     * @param spritex The column number of the sprite you wish to draw - starting from 0.
     * @param spritey The row number of the sprite you wish to draw - starting from 0.
     * 
     * Example: 
     * 
     * You want to draw a sprite from the spitesheet ```sheet```. This sprite sheet contains 4(coloumns)x3(rows) sprites.
     * You want to draw the sprite at position 2,1 in the sprite sheet. You want to draw this at position 100, 100 on the canvas.
     * 
     * ```drawSprite(sheet, 100, 100, 4, 3, 2, 1);```
     */
    drawSprite(img: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, xpos: number, ypos: number, cols: number, rows: number, spritex: number, spritey: number) {
        let spriteWidth: number = img.width / cols;
        let spriteHeight: number = img.height / rows;
        this.ctx.drawImage(img,
            spritex * spriteWidth,
            spritey * spriteHeight,
            spriteWidth,
            spriteHeight,
            xpos,
            ypos,
            spriteWidth,
            spriteHeight
        );
    }

    /**
     * Scales the view of the CanvasRenderingContext2D element.
     * @param multiplier The amount you want to scale. 1 represents no scaling.
     * 
     * Example: ```scale(2);```
     * 
     * Beware that this affects the coordinates of your elements. If x position 800 was at the right of your canvas before, x position 400 will now be after ```scale(2)```.
     */
    scale(multiplier: number) {
        this.ctx.scale(multiplier, multiplier)
    }

    /**
     * Sets the opacity of future items drawn on canvas.
     * @param alpha An alpha value between 0 and 1. 0 represents complete transparency, 1 complete opaqueness.
     * 
     * Example: ```setAlpha(0.5);```
     */
    setAlpha(alpha: number) {
        this.ctx.globalAlpha = alpha;
    }

    /**
     * Sets the font for the graphics context.
     * @param s String reprensting both font size and font-family. This string can contain either text size, font-family or both.
     * 
     * Example: ```setFont("10px Arial");```
     */
    setFont(s: string) {
        if (s.indexOf(' ') != -1) {
            this.ctx.font = s;
        } else {
            this.ctx.font = s + ' ' + this.ctx.font.split(' ')[this.ctx.font.split(' ').length - 1];
        }
    }
}

