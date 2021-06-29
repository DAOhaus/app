import { useState, useEffect } from "react";

const useData = (url, defaultData) => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch(url)
        let dataJson = await data.json()
        setData(dataJson)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  },[url])

  return data;
};

export default useData;
