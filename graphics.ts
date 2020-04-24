/**
 * This class keeps track of the CanvasRenderingContext2D, which is used for drawing on the HTML canvas.
 * This class also contains a lot of useful rendering methods.
 */
class Graphics {
    private ctx: CanvasRenderingContext2D;
    private rotation: number;
    private translation: [number, number];

    /**
     * Constructs a Graphics object. This object keeps track of the CanvasRenderingContext2D, which is used for drawing on the HTML canvas.
     * This object also contains a lot of useful rendering methods.
     * @param ctx The initial CanvasRenderingContext2D.
     */
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.ctx.lineWidth = 2;
        this.ctx.textAlign = "start";
        this.rotation = 0;
        this.translation = [0, 0];
    }

    /**
     * Sets the color of future objects being drawn on the canvas.
     * @param color A string specifying the color. This can either be the hex for the color or the name of the color.
     * 
     * Example: ```setColor("#ffffff")``` or ```setColor("white")```
     */
    public setColor(color: string): void {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
    }

    /**
     * Sets the line width of future elements drawn to the canvas.
     * @param linewidth 
     */
    public setLineWidth(linewidth: number): void {
        this.ctx.lineWidth = linewidth;
    }

    /**
     * Sets the position value that refers to what strings are drawn relative to.
     * @param position Value specifying how future strings are drawn in relative to the given coordinates.
     * 
     * Example: ```setStringRelativePosition("center");```. The x coordinate of future strings now refers to
     * where the center of the string is placed on the canvas.
     */
    public setStringRelativePosition(position: CanvasTextAlign): void {
        this.ctx.textAlign = position;
    }

    /**
     * Scales the view of the CanvasRenderingContext2D element.
     * @param multiplier The amount you want to scale. 1 represents no scaling.
     * 
     * Example: ```setScale(2);```
     * 
     * Beware that this affects the coordinates of your elements. If x position 800 was at the right of your canvas before, x position 400 will now be after ```scale(2)```.
     */
    public setScale(multiplier: number): void {
        this.ctx.scale(multiplier, multiplier)
    }

    /**
     * Sets the opacity of future items drawn on canvas.
     * @param alpha An alpha value between 0 and 1. 0 represents complete transparency, 1 complete opaqueness.
     * 
     * Example: ```setAlpha(0.5);```
     */
    public setAlpha(alpha: number): void {
        this.ctx.globalAlpha = alpha;
    }

    /**
     * Sets the font for the graphics context.
     * @param s String reprensting both font size and font-family.
     * 
     * Example: ```setFont("italic small-caps bold 12px arial");```
     */
    public setFont(s: string): void {
        this.ctx.font = s;
    }

    /**
     * Adds to the current translation to all drawn shapes.
     * @param x The amount to translate along the x-axis.
     * @param y The amount to translate along the y-axis.
     */
    public addTranslation(x: number, y: number): void {
        this.ctx.translate(x, y)
        this.translation[0] += x;
        this.translation[1] += y;
    }

    /**
     * Sets the translation to a fixed coordinate.
     * @param x The x coordinate of the fix translation.
     * @param y The y coordinate of the fix translation.
     */
    public setTranslation(x: number, y: number): void {
        this.resetTranslation();
        this.addTranslation(x, y);
    }

    /**
     * Resets the translation back to the start [0, 0].
     */
    public resetTranslation(): void {
        this.ctx.translate(-this.translation[0], -this.translation[1]);
        this.translation = [0, 0];
    }

    /**
     * Returns the translation coordinates as a tuple of numbers.
     */
    public getTranslation(): [number, number] {
        return this.translation;
    }

    /**
     * Adds to the current rotation and affects all drawn elements.
     * @param v The angle to change the roation by in radians.
     */
    public addRotation(v: number): void {
        this.ctx.rotate(v);
        this.rotation += v;
        this.rotation %= 2 * Math.PI; // wrap
    }

    /**
     * Set the rotation to a fixed angle.
     * @param v The angle to set the roation to in radians.
     */
    public setRotation(v: number): void {
        this.resetRotation();
        this.addRotation(v);
    }

    /**
     * Resets the rotation to the 0.
     */
    public resetRotation(): void {
        this.ctx.rotate(-this.rotation);
        this.rotation = 0;
    }

    /**
     * Returns the current rotation.
     */
    public getRotation(): number {
        return this.rotation;
    }

    /**
     * Converts degrees to radians.
     * @param v The angle in degrees.
     */
    public degToRad(v: number): number {
        return v / 360 * 2 * Math.PI;
    }

    /**
     * Converts radians to degrees.
     * @param v The angle in radians.
     */
    public radToDeg(v: number): number {
        return v / (2 * Math.PI) * 360;
    }

    /**
     * Fills a rectangle with the given dimensions at the given position.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     * @param w The width of the rectangle in pixels.
     * @param h The height of the rectangle in pixels.
     */
    public fillRect(x: number, y: number, w: number, h: number): void {
        this.ctx.fillRect(x, y, w, h);
    }

    /**
     * Draws a rectangle at the given position.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     * @param w The width of the rectangle in pixels.
     * @param h The height of the rectangle in pixels.
     */
    public drawRect(x: number, y: number, w: number, h: number): void {
        this.ctx.strokeRect(x, y, w, h);
    }

    /**
     * Fills a circle with the given radius at the given position.
     * @param x The x coordinate for the center of the circle.
     * @param y The y coordinate for the center of the circle.
     * @param r The radius of the circle.
     */
    public fillCircle(x: number, y: number, r:number): void {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill(); 
    }

    /**
     * Draws a circle with the given radius at the given position.
     * @param x The x coordinate for the center of the circle.
     * @param y The y coordinate for the center of the circle.
     * @param r The radius of the circle.
     */
    public drawCircle(x: number, y: number, r:number): void {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.stroke(); 
    }

    /**
     * Fills an arc at the given coordinates with the given radius and angles.
     * @param x The x coordinate for the center of the arc.
     * @param y The y coordinate for the center of the arc.
     * @param r The radius for the arc.
     * @param sa The start angle for the arc, in radians.
     * @param ea The end angle for the arc, in radians.
     */
    public fillArc(x: number, y: number, r:number, sa:number, ea: number): void {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, sa, ea);
        this.ctx.fill(); 
    }

    /**
     * Draws an arc at the given coordinates with the given radius and angles.
     * @param x The x coordinate for the center of the arc.
     * @param y The y coordinate for the center of the arc.
     * @param r The radius for the arc.
     * @param sa The start angle for the arc, in radians.
     * @param ea The end angle for the arc, in radians.
     */
    public drawArc(x: number, y: number, r:number, sa:number, ea: number): void {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, sa, ea);
        this.ctx.stroke(); 
    }

    /**
     * Fills a polygon at the given coordinates with the radius and number of sides specified.
     * @param x The x coordinate for the center of the polygon.
     * @param y The y coordinate for the center of the polygon.
     * @param r The radius of the polygon.
     * @param n The number of sides in the polygon
     * @param v The rotation of the polygon in radians.
     */
    public fillPolygon(x: number, y: number, r: number, n: number, v: number): void {
        this.makePolygon(x, y, r, n, v, true);
    }

    /**
     * Draws a polygon at the given coordinates with the radius and number of sides specified.
     * @param x The x coordinate for the center of the polygon.
     * @param y The y coordinate for the center of the polygon.
     * @param r The radius of the polygon.
     * @param n The number of sides in the polygon
     * @param v The rotation of the polygon in radians.
     */
    public drawPolygon(x: number, y: number, r: number, n: number, v: number): void {
        this.makePolygon(x, y, r, n, v, false);
    }

    /**
     * The actual implementation of the making of the polygon. Draws the polygon, and fills it if specified.
     * @param x The x coordinate for the center of the polygon.
     * @param y The y coordinate for the center of the polygon.
     * @param r The radius of the polygon.
     * @param n The number of sides in the polygon
     * @param v The rotation of the polygon in radians.
     * @param fill A boolean indicating if the polygon should be filled.
     */
    private makePolygon(x: number, y: number, r: number, n: number, v: number, fill: boolean): void {
        let ang = Math.PI * 2 / n;
        this.addTranslation(x, y);
        this.addRotation(v + Math.PI);
        this.ctx.beginPath();
        this.ctx.moveTo(Math.sin(ang) * r, Math.cos(ang) * r);
        for (let i = 0; i <= n; i++) {
            this.ctx.lineTo(Math.sin(ang * i) * r, Math.cos(ang * i) * r);
        }
        if (fill) {
            this.ctx.fill();
        }
        else {
            this.ctx.stroke();
        }
        this.addRotation(-(v + Math.PI));
        this.addTranslation(-x, -y);
    }

    /**
     * Fills a custom shape specified by array of coordinate points.
     * @param ps The array containing tuples of coordinate points.
     */
    public fillShape(ps: [number, number][]): void {
        this.makeShape(ps, true);
    }

    /**
     * Draws a custom shape specified by array of coordinate points.
     * @param ps The array containing tuples of coordinate points.
     */
    public drawShape(ps: [number, number][]): void {
        this.makeShape(ps, false);
    }

    /**
     * The actial implementation that makes the custom shape, and fills it if specified.
     * @param ps The array containing tuples of coordinate points.
     * @param fill A boolean indicating if the shape should be filled.
     */
    private makeShape(ps: [number, number][], fill: boolean): void {
        this.ctx.beginPath();
        this.ctx.moveTo(ps[0][0], ps[0][1]);
        ps.forEach(p => {
            this.ctx.lineTo(p[0], p[1]);
        });
        if (fill) {
            this.ctx.fill();
        }
        else {
            this.ctx.stroke();
        }
    }

    /**
     * Draws a line from one point to another.
     * @param x1 The x coordinate for the first point.
     * @param y1 The y coordinate for the first point.
     * @param x2 The x coordinate for the second point.
     * @param y2 The y coordinate for the second point.
     */
    public drawLine(x1: number, y1: number, x2: number, y2: number): void {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    /**
     * Draws the given string at the given position.
     * @param s The string you want to draw.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     */
    public drawString(s: string, x: number, y: number): void {
        this.ctx.fillText(s, x, y);
    }

    /**
     * Draws an image on the specified x and y location.
     * @param img The image you want to draw.
     * @param x The x coordinate the sprite is drawn to on the canvas.
     * @param y The y coordinate the sprite is drawn to on the canvas.
     */
    public drawImage(img: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, x: number, y: number): void {
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
    public drawSprite(img: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, xpos: number, ypos: number, cols: number, rows: number, spritex: number, spritey: number): void {
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
}

