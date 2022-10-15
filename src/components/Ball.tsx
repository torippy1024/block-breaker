import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import useInterval from "./useInterval";

type BallType = {
  width: number;
  height: number;
};

export type Vector2Type = {
  x: number;
  y: number;
};

const Ball = ({width = 100, height = 120}: BallType) => {
  const [pos, setPos] = useState<Vector2Type>({x: 0, y: 0});
  const [vector, setVector] = useState<Vector2Type>({x: 1, y: 1});

  useInterval(() => {
    console.log(pos, vector);
    if (pos.x <= 0) {
      setVector(vector => ({...vector, x: 1}));
    }
    if (pos.x >= width) {
      setVector(vector => ({...vector, x: -1}));
    }
    if (pos.y <= 0) {
      setVector(vector => ({...vector, y: 1}));
    }
    if (pos.y >= height) {
      setVector(vector => ({...vector, y: -1}));
    }
    setPos(pos => ({x: pos.x + vector.x, y: pos.y + vector.y}));
  }, 10);

  return (
    <div>
      <div css={styles.ball(pos.y, pos.x)} className={`relative`}>
        ●{pos.x + pos.y}
      </div>
    </div>
  );
}

const styles = {
  ball: (y: number, x: number) => css({
    top: y,
    left: x,
  })
}

export default Ball;