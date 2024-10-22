import { useEffect } from 'react';
import { useState } from 'react';
import Wacth from '../wacth/wacth';
import "./wacths.css"
export default function Wacths() {
    let [myWacth, setWacth] = useState([]);

    useEffect(() => {
        fetch('wacth.json')
            .then(res => res.json())
            .then(data => setWacth(data))
    }, [])

    return (
        <div >
            <h1>Bottles</h1>
            <div className='container'>
                {
                    myWacth.map(item => <Wacth key={item.id} data={item}></Wacth> )
                }
            </div>
        </div>
    )
}
