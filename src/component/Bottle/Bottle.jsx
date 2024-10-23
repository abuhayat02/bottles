import "./bottle.css"
export default function Bottle({data , getMyData}) {
    const { name, img, price} = data;
    return (
        <div className="card">
            <img src={img} alt="" />
            <hr />
            <div className="items-data">
                <p>Name : {name}</p>
                <p>Price : {price}</p>
                <div className="btn-container">
                   <button onClick={()=> getMyData(data)} > Buy Now</button>
                </div>
            </div>
        </div>
    )
}



