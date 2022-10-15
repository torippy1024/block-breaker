import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import useInterval from "./useInterval";

type BallType = {
  pos?: Vector2Type;
  vector?: Vector2Type;
  width?: number;
  height?: number;
};

export type Vector2Type = {
  x: number;
  y: number;
};

const Ball = ({pos = {x: 0, y: 0}, vector = {x: 1, y: 1}, width = 100, height = 120}: BallType) => {
  const [posBall, setPosBall] = useState<Vector2Type>(pos);
  const [vectorBall, setVectorBall] = useState<Vector2Type>(vector);

  useInterval(() => {
    if (posBall.x <= 0) {
      setVectorBall(vectorBall => ({...vectorBall, x: vector.x}));
    }
    if (posBall.x >= width) {
      setVectorBall(vectorBall => ({...vectorBall, x: -vector.x}));
    }
    if (posBall.y <= 0) {
      setVectorBall(vectorBall => ({...vectorBall, y: vector.y}));
    }
    if (posBall.y >= height) {
      setVectorBall(vectorBall => ({...vectorBall, y: -vector.y}));
    }
    setPosBall(posBall => ({x: posBall.x + vectorBall.x, y: posBall.y + vectorBall.y}));
  }, 10);

  return (
    <div>
      <div css={styles.ball(posBall.y, posBall.x)} className={`relative`}>
        ●
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