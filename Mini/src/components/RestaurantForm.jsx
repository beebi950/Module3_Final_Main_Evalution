const RestaurantCard =({onsubmit,form,setForm}) => {

    const handleSubmit =() =>{

        if(!form.restaurantName || !form.type){
            alert("Fill all files");
            return;
        }
    };

    return(
        <div>

            <input placeholder="Name" value={form.restaurantName}
            onClick={(e) => setForm({...form,restaurantName:  e.target.value})}
            />

            <input placeholder="Address" value={form.address}
            onClick={(e) => setForm({...form,address:  e.target.value})}
            />

            <select
                value={form.type}
                onChance={(e) => setForm({...form, type: e.target,value})}
            >
                <option value=" ">Select Types</option>
                <option>Rajastani</option>
                <option>Gujarathi</option>
                <option>Mughlai</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North</option>
                <option>South</option>
                
            </select>  

            <select value={form.parkingLot} onClick={(e) => 
                setForm({...form, parkingLot: e.target.value === "true"})
            }
            >

                <option value="">Parking</option>
                <option value="">Yes</option>
                <option value="">No</option>

            </select>  

            <button onClick={handleSubmit}Submit></button>

        </div>
    );
};

export default RestaurantForm;