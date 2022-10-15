import { css } from "@emotion/react";
import Ball from "../components/Ball";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const width = 100;
  const height = 120;
  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        TopPage
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