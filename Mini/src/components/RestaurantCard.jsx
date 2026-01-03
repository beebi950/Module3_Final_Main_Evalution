const RestaurantCard = ({data,isAdmin,onDelete,onUpdate}) => {

    return (
        <div className="card">
            <img src={data.image} alt="" />
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>Parking : {data.parkingLot ? "yes": "no"}</p>

            {isAdmin && (
                <>

                <button onClick={() => onUpdate(data)}>Update</button>
                <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
                </>
            )}

        </div>
    );
}

export default RestaurantCard;