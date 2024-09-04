import React, { useEffect, useState } from "react";
import axios from "axios";

export const CatAxios = () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  const [cat, setCat] = useState({});
  const [search, setSearch] = useState(false);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setCat(res.data[0]);
    })
    .catch((error)=>{console.error(error)});
  }, [search]);

  return <div>
    <img src={cat.url} alt="cat" />
    <button onClick={()=>{setSearch(!search)}}>Cargar Otra imagen</button>
  </div>;
};
