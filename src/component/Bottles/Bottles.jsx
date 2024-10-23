import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

import { addMyDataInLoaalStorage, localData } from '../../storeData/localStorage';
export default function Bottles() {
    let [myBottles, setBottles] = useState([]);
    let [countData, setData] = useState([])

    useEffect(() => {
        fetch('wacth.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);



    let getMyData = (item) => {
        countData = [...countData, item];
        setData(countData);
        addMyDataInLoaalStorage(item.id)

    }

    useEffect(()=>{
        let ourOldData =localData();

        let myAllData = [];
        
        for(let data of ourOldData){
            let allInfo = myBottles.find((items) => items.id === data);
            if(allInfo){
                myAllData.push(allInfo);
            }
        }
        console.log( "my data = " ,myAllData);
        setData(myAllData)
        
    },[myBottles])

    return (
        <div >
            <h1>Bottles : {countData.length}</h1>

            <div className='container' >
                {
                    countData.map((data) => <p className='container items-data' key={data.id}>{data.name} <br />{data.price}</p>)
                }
            </div>

            <div className='container'>
                {
                    myBottles.map(item => <Bottle key={item.id} getMyData={getMyData} data={item}></Bottle>)
                }
            </div>
        </div>
    )
}
