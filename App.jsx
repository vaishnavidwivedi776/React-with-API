import { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30"
    );

    setUserData(response.data);
    console.log(response.data);
  };

  let printUserData = "No user available";

  if (userData.length > 0) {
    printUserData = userData.map((elem) => {
      return (
        <div key={elem.id} className="w-44">
          <div className="h-40 w-44 bg-white overflow-hidden rounded">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
              alt={elem.author}
            />
          </div>

          <h2 className="mt-2 text-center text-sm font-semibold">
            {elem.author}
          </h2>
        </div>
      );
    });
  }

  return (
    <div className="bg-black min-h-screen p-5 text-white">
      <button
        onClick={getData}
        className="bg-green-600 px-5 py-2 rounded active:scale-95"
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-4 mt-5">
        {printUserData}
      </div>
    </div>
  );
};

export default App;