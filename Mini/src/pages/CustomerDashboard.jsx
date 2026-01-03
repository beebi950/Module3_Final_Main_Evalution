import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ type: "", parking: "" });

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("evalData")) || []);
  }, []);

  const filteredData = data.filter((r) => {
    return (
      (r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
        r.address.toLowerCase().includes(search.toLowerCase())) &&
      (!filters.type || r.type === filters.type) &&
      (!filters.parking || String(r.parkingLot) === filters.parking)
    );
  });

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="grid">
        {filteredData.map((r) => (
          <RestaurantCard key={r.restaurantID} data={r} />
        ))}
      </div>
    </>
  );
};

export default CustomerDashboard;