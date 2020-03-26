# 2D TypeScript Game Engine

This is a simple 2D game engine written in TypeScript.

Feel free to use this code for any personal, educational or commercial matter.

I would be glad to be included in credits and/or take a look at the project you've used this engine for.

Good luck and happy coding!

## Getting Started

### Prerequisites

To get started working with this game engine you need TypeScript (and Python 3 to setup a local HTML server). 

#### Using Arch/pacman

Installing TypeScript, open your terminal and type in 

```
sudo pacman -S typescript
```

For Python type in

```
sudo pacman -S python
```

You're now good to go.

#### Any other OS

Please refer to [TypeScript's official download page](https://www.typescriptlang.org/index.html#download-links) and [Python's official download page](https://www.python.org/downloads/).

### Using the game engine

Navigate to the folder where you've placed the engine in your terminal and write 

```
python3 corsserver.py
```

This is your local server. Keep this running.

Now open up *game.ts* in your favorite text editor, and start coding!

### Compiling TypeScript

Use the command

```
tsc filename.ts
```

in your terminal to compile from TypeScript to JavaScript.

Alternatively just run the command

```
tsc --watch
```

in the folder where your TypeScript code is. This compiles as soon as any changes are detected in your TypeScript code.

### Running the game

For running the game simply open the test.html file in a browser. This file should be self-explanatory and can be edited for your liking.

### Tips

[Visual Studio Code](https://code.visualstudio.com/) is great for writing TypeScript.

## Authors

* **Anders B. Clausen** - [anbclausen](https://github.com/anbclausen)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Code for python server is directly taken from [this](https://stackoverflow.com/a/21957017) stackoverflow answer.
