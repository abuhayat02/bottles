import "./wacth.css"
export default function Wacth({ data }) {
    const { name, img, price } = data;
    return (
        <div className="card">
            <img src={img} alt="" />
            <hr />
            <div className="items-data">
                <p>Name : {name}</p>
                <p>Price : {price}</p>
            </div>
        </div>
    )
}



