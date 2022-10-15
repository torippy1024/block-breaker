import Ball from "../components/Ball";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        TopPage
        <Ball />
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;