import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantForm from "../components/RestaurantForm";
import { stringify } from "querystring";

const AdminDashboard =() => {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    const [filters,setFilters] = useState("");
    const navigate =useNavigate();

    const [form,setForm] =useState({

        "restaurantID": 26,
    "restaurantName": "1135 AD",
    "address": "Jaipur, Amber Fort, Rajasthan",
    "type": "Rajasthani",
    "parkingLot": true,
    "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("evalData"))|| []);
    },[]);

    const addRestaurant = () => {
        const newData ={...form,restaurantID: DataTransfer.now(),
        };

        const updated=[...data,newData];
        localStorage.setItem(evalData,JSON,stringify(updated));
        setData(updated);
        alert("Restaurant Added");
        setForm({
            "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"


        });
    };


    const deleteRestaurant =(id) => {
        if(!confirm("Areyou sure want to delete")) return ;
        const update=data.filter((r) => r.restaurantID !== id);
        localStorage.setItem("evalData",JSON.stringify(update));
        setData(update);
        alert("delete sucessful")
    };

    const filteredData =data.filter((r) => {
        returtn(

            (r.restaurantName.toLowerCases().includes(search.toLocaleLowerCase()) ||
              r.address.toLowerCases().includes(search.toLocaleLowerCase())  ) &&
              (!filters.type|| r.types === filters.type) &&
              (!filters.parking || String(r.parkingLot)===filters.parking)

        );
    });


    return(

        <>
            <Navbar
            search={search}
            setSearch={setSearch}
            filter={setFilters}
            />

            <div className="layout">
                <RestaurantForm onSubmit={addRestaurant} form={form} setForm={setForm} />
            </div>

            <div className="grid">
                {filteredData.map((r)=> (
                    <RestaurantCard key={r.restaurantID} data={r} isAdmin
                    onDelete={deleteRestaurant}
                    onUpdate={updatedRestaura}
                    />
                
                ))}

            </div>
        </>
    )

};

export default AdminDashboard;