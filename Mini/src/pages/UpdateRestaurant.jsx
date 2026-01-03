import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantForm from "../components/RestaurantForm";

const UpdateRestaurant = () => {
  const navigate = useNavigate();
  const item = JSON.parse(localStorage.getItem("updateItem"));
  const [form, setForm] = useState(item);

  const update = () => {
    if (!confirm("Are you sure you want to update?")) return;
    const data = JSON.parse(localStorage.getItem("evalData"));
    const updated = data.map((r) =>
      r.restaurantID === item.restaurantID ? form : r
    );
    localStorage.setItem("evalData", JSON.stringify(updated));
    alert("Updated Successfully");
    navigate("/admin/dashboard");
  };

  return <RestaurantForm onSubmit={update} form={form} setForm={setForm} />;
};

export default UpdateRestaurant;