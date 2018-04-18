# maze_js
**_maze_js_** is a javascript implementation of maze generation algorithm called **Hunt-and-Kill**.

The project contains the following files:
 - [README.md](./README.md) **&rarr;** Contains a description of the project and the algorithm.
 - [maze.js](./maze.js) **&rarr;** Contains the algorithm logic and some view logic.
 - [maze.html](./maze.html) **&rarr;** Contains a view of the algorithm process, where you can specify the dimension of the grid (square shape).
 - [maze.css](./maze.css) **&rarr;** Contains the styles of the view.

## Hunt-and-Kill algorithm

The **Hunt-and-Kill** algorithm is used for maze generation, and follows the next steps:
 1. Select a cell from grid as initial location.
 2. It's time to move randomly (**&uarr;**, **&darr;**,**&larr;**,**&rarr;**) from current cell to an unvisited neighbour cell, making a connection between cells, deleting the frontier between the cells, this step will be repeated until current cell hasn't unvisited neighbour cells.
 3. Turn to scan the grid looking for a unvisited cell adjacent to a visited cell. There are two possibilities at this point:
     - If an unvisited cell was found, then it's moment for randomly delete the frontier between this cell and one of the adjacents, and go to the step 2.
     - If none unvisited cell was found, then the maze generation is finished.

### TODO:
- [ ] Add image of html view.
- [ ] Add images of the algorithm process.
