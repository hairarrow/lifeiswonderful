# A simple Express + React App

## Setup

```
$ git clone https://github.com/hairarrow/express-plate
$ cd express-plate
$ yarn && cd client; yarn
$ yarn start:dev
```

## Notes

A couple of considerations and possible optimizations

- I had to decide if I wanted to go pixel perfect to the specifications in the sketch file (1440 width x 1024 height), but instead designed it with my 15" Macbook monitor in mind (1440 width x 900 height). This forced me to make the cubes on the home page a bit smaller to give the headline some breathing room.
- Improve passing coordinates in a cubemap

```js
const cmap = [
  {
    coords: [...{col, row, cube, side }, {}]
    style: { type: "transparent" }
  }
];
```

- write a utility to fetch all assets and pass them to the main component
- optimize animation orchestration with onAnimationEnd
