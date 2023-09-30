import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Earrorpage from "./components/Earrorpage";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [Courses, Setcouses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category, setCatagory] = useState(filterData[0].title);
  const [error, seterror] = useState(false);

  async function fetchData(params) {
    setloading(true);

    try {
      let Responce = await fetch(apiUrl);
      let Output = await Responce.json();

      Setcouses(Output.data);
    } catch (error) {
      toast.error("network error");
      seterror(true);
    }

    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className=" bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCatagory={setCatagory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {error ? (
                <Earrorpage />
              ) : (
                <Cards courses={Courses} category={category} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
