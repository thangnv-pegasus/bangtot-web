import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'
import { useEffect, useState } from "react"

const Revenue = ({name = 'Doanh thu', labelType = 'day', data = []}) => {
    const [type, setType] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
    
    useEffect(()=>{
        if(labelType === 'month'){
            setType([1,2,3,4,5,6,7,8,9,10,11,12])
        }
    },[])

    return (
        <Bar 
            data={{ 
                labels: type,
                datasets: [
                    {
                        label: name,
                        data: data

                    }
                ],
             }}
        />
    )
}

export default Revenue