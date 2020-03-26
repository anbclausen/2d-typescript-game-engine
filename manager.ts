/**
 * Loads an image from the given source and returns it.
 * @param src The URL of the source file. Beware that you'll have to setup the correct CORS configuration on the server the source URL points.
 */
function loadImg(src: string) {
    var img = new Image();
    img.src = src;
    return img;
}

/**
 * Loads a file from the given source and returns it.
 * @param src The URL of the source file. Beware that you'll have to setup the correct CORS configuration on the server the source URL points.
 */
function loadFile(src: string) {
    var result = '';
    var client = new XMLHttpRequest();
    client.open('GET', src, false);
    client.onreadystatechange = function () {
        result = client.responseText;
        return result;
    }
    client.send();
    return result;
}