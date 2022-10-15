import { css } from "@emotion/react";
import { useState, useEffect } from "react";

type BallType = {
  width: number;
  height: number;
};

export type Vector2Type = {
  x: number;
  y: number;
};

const Ball = ({width = 100, height = 120}: BallType) => {
  const posNow: Vector2Type = {x: 0, y: 0};
  const vector: Vector2Type = {x: 1, y: 1};
  const [pos, setPos] = useState<Vector2Type>(posNow);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pos.x <= 0) {
        vector.x = 1;
      }
      if (pos.x >= width) {
        vector.x = -1;
      }
      if (pos.y <= 0) {
        vector.y = 1;
      }
      if (pos.y >= height) {
        vector.y = -1;
      }
      posNow.x = pos.x + vector.x;
      posNow.y = pos.y + vector.y;
      setPos({x: posNow.x, y: posNow.y});
      console.log(posNow);
    }, 10);
    return () => clearInterval(interval);
  }, []);

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