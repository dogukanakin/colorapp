import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./MainContext";
import BrandsData from "./brand.json";
import { useEffect, useState } from "react";
import Copied from "./components/Copied";
import Collection from "./components/Collection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { forceCheck } from "react-lazy-load";

function App() {
  let brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });



  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    if (search.length > 0) {
      const filteredBrands = brandsArray.filter((brand) => {
        return brand.title.toLowerCase().includes(search.toLowerCase());
      });
      setBrands(filteredBrands);
    } else {
      setBrands(brandsArray);
    }
  }, [search]);
   

 
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };


 return (
		<>
			<MainContext.Provider value={data}>
				{copied && <Copied color={copied}/>}
				<Sidebar />
				<Router>
					<Switch>
						<Route path="/" exact>
							<Content />
						</Route>
						<Route path="/collection/:slugs">
							<Collection />
						</Route>
					</Switch>
				</Router>
			</MainContext.Provider>
		</>
	);
}

export default App;
