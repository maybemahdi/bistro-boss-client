import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/menu`);
        setMenu(data);
        setLoading(false);
      };
      fetchData();
    }, []);
    return {menu, loading}
};

export default useMenu;