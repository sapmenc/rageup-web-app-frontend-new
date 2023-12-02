import { useState, useEffect } from "react";
import useFields from "./useFields";

const useShouldAllow = () => {
  const [shouldAllow, setShouldAllow] = useState(false);
  const { isMadatoryFilled } = useFields();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual logic from useFields()
        const res = await isMadatoryFilled();
        setShouldAllow(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return shouldAllow;
};

export default useShouldAllow;
