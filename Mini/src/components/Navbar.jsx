import {useEffect,useRef} from "react";

const Navbar=({serach,setSearch,filter,setFilter}) => {

    const searchRef =useRef();

    useEffect(() => {

        searchRef.current.focus();   
    },[]);

    return(
        <div className="navbar">

            <input ref={searchRef} placeholder="Search name or Address"
            value={serach} onClick={(e) => setSearch(e.target.value)}
            />

            <select onClick={(e) => setFilter({...filter, type: e.target.value})}
            >

                <option value="">All Types</option>
                {[
                    "Rajasthani",
                    "Gujarati",
                    "Mughlai",
                    "Jain",
                    "Thai",
                    "North Indian",
                    "South Indian",
                ].map((t) => (
                    <option key={t}></option>
                ))}
            </select>   

            <select onClick={(e) => 
                setFilter({...filter, parking: e.target.value})
            }
            >

                <option value=" ">All Parking</option>
                <option value="true">Parking</option>
                <option value="false">No Parking</option>

            </select> 
        </div>
    );
};

export default Navbar;