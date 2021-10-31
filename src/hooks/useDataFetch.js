import { useEffect, useState } from "react";
import fetchingData from "../API";

export const useDataFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [err, setErr] = useState(false);
  const [errText, setErrText] = useState("");
  const [requestName, setRequestName] = useState("");

  const fetchBriefData = async () => {
    try {
      setErr(false);
      setLoading(true);
      let searchCity = requestName || "London";
      const data = await fetchingData.Current(searchCity);
      if (data.location.name === requestName) return;
      setData(data);
      setRequestName('');
    } catch (error) {
      setErr(true);
      setErrText(error);
      console.log(errText);
    }
    setLoading(false);
  };

  const fetchSearchData = async (search) => {
    if (search === "") return;
    try {
      setErr(false);
      let data = await fetchingData.Search(search);
      setSearchResult(data);
    } catch (error) {
      setErr(true);
      setErrText(error);
      console.log(errText);
    }
  };

  useEffect(() => fetchBriefData(), [requestName]);

  useEffect(() => fetchSearchData(search), [search]);

  return {
    data,
    setLoading,
    loading,
    searchResult,
    setSearch,
    search,
    err,
    errText,
    setRequestName,
  };
};
