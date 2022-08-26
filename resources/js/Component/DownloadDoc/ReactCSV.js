import axios from "axios";
import { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

export const ReactCSV = (props) => {
    const [csvData, setcsvData] = useState([]);
    useEffect(()=>{

        fetchtablelist();
    },[]) 

   const fetchtablelist = () =>{
       axios.get('/api/tablelist').then(({data})=>{
        setcsvData(data);
       })
    }
    return(
        <div>
          <CSVLink data={csvData}>{props.name}</CSVLink>
        </div>
    )
}