import GUY1 from "./img/guy6.png";
import GIRL1 from "./img/girl4.png";

const bigSquareMap = [
  {
    coords: {
      col: 0,
      row: [0, 2, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 0,
      row: 1,
      cube: 1,
      side: 1
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 0,
      row: 1,
      cube: [0, 2, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1
    },
    style: {
      type: "default"
    }
  },
  {
    coords: {
      col: 1,
      row: [0, 1],
      cube: [0, 1]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1,
      row: 0,
      cube: 2,
      side: 0
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1,
      row: 3,
      cube: 0
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1,
      row: [2, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 2,
      row: [0, 1, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 2,
      row: 2,
      cube: [2, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 2,
      row: 2,
      cube: [0, 1],
      side: [0, 1]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 3
    },
    style: {
      type: "transparent"
    }
  },

  {
    coords: {
      col: 1,
      row: 0,
      cube: 3,
      side: [1, 2]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1,
      row: 1,
      cube: [0, 1, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1,
      row: 1,
      cube: [0, 1, 3]
    },
    style: {
      type: "transparent"
    }
  },
  {
    coords: {
      col: 1,
      row: 2,
      cube: 1,
      side: 2
    },
    style: {
      type: "default"
    }
  },
  {
    coords: {
      col: 3,
      row: 1,
      cube: 2,
      side: 1
    },
    style: {
      type: "default"
    }
  },
  {
    coords: {
      col: 0,
      row: 1,
      cube: 1,
      side: 0
    },
    style: {
      type: "img",
      content: GUY1
    }
  },
  {
    coords: {
      col: 3,
      row: 1,
      cube: 2,
      side: 2
    },
    style: {
      type: "img",
      content: GIRL1
    }
  }
];

export default bigSquareMap;
