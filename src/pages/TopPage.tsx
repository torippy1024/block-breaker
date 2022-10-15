import { css } from "@emotion/react";
import Ball from "../components/Ball";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRef, useState, useEffect } from "react";

const TopPage = () => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    setWidth(fieldRef.current?.clientWidth ?? 100);
    setHeight(fieldRef.current?.clientHeight ?? 120);
  }, []);

  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div ref={fieldRef} className="grow container mx-auto my-4 px-4">
        <div css={styles.ballField(width, height)} className="bg-base-300">
          <Ball width={width} height={height} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  ballField: (y: number, x: number) => css({
    width: y,
    height: x,
  })
};

export default TopPage;