import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from "react-lazy-load";
import Download from "./Download";
import Loader from "./Loader";

function Content() {
  const { brands, selectedBrands } = useContext(MainContext);
  const rowRender = (key, index) => {
    return (
      <Brand key={key} brand={brands[index]} />
    );
  };

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length >0  && <Download />}
      </header>
      <section className="brands">
        {brands.map((brand) => (
          <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader />}>
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
  
}

export default Content;
