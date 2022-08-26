import { CSVLink, CSVDownload } from "react-csv";

export const ReactCSV = (props) => {
    const csvData = [
        {
            "firstname": "Chandani",
            "lastname":  "Lama",
            "email":"chandanilama@gmail.com",
        },
        {
            "firstname": "Ashish",
            "lastname":  "Khinju",
            "email":"ashishkhinju@gmail.com",
        },
        {
            "firstname": "Krishna",
            "lastname":  "Thapa",
            "email":"krishnathapa@gmail.com",
        },
    ];
    return(
        <div>
          <CSVLink data={csvData}>{props.name}</CSVLink>
        </div>
    )
}