import { Infocard } from "./Infocard/Infocard";
import { Charts } from "./Chart/Charts";
import { Piechart } from "./Piechart/Piechart";
import { Table } from "../Table/Table";

export const Home = () => {
    // alert(showSidebar)
    return (
        <>
            <Infocard />
            <Charts />
            <Piechart />
           <Table />
        </>
    );
};
