//csv 
import { ReactCSV } from "../DownloadDoc/ReactCSV";
// import { ReactTooltip } from "react-tooltip";
//react table
import { usePagination, useTable } from "react-table";
//pdf
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake';
import ReactToPdf from 'react-to-pdf';
//print
import React, { useEffect, useRef , useState} from 'react';
// import ReactToPrint from 'react-to-print';
import { useReactToPrint } from "react-to-print";

//css
import "../Table/Table.scss";
export const AllTable = ({ columns, data ,searchdata}) => {
      //search in table mileko xaina
    // const [searchVal, Setsearchdata] = useState('');
    // const inputhandler = (e) => {
    //   // const searchdata=e.target.value;
    //   Setsearchdata(e.target.value);
    //   const filterData = data.filter((c_name)=> {
    //     return (
    //       e.target.value===data.customer_name
    //     )
    //   })
    //   console.log(filterData, "hi")
    // }
    //search end table code end
   //this is for pdf 
   const ref = React.createRef();
  //  const pdfDocument = ()=> {
  //   //const input = document.getElementById('divToPrint');
  
  //       const doc = new jsPDF();
       
  //       //get table html
  //       const pdfTable = document.getElementById('divToPrint');
  //       //html to pdf format
  //       var html = htmlToPdfmake(pdfTable.innerHTML);
      
  //       const documentDefinition = { content: html };
  //       pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //       pdfMake.createPdf(documentDefinition).open();
      
  // }
//pdf code end
//print 
const dataToPrintRef = useRef();
const handlePrint = useReactToPrint({
  content: () => dataToPrintRef.current
});


const options = {
  orientation: 'landscape',
  unit: 'in',
  // format: [10,10]
};
//print end
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        page, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setPageSize,
        previousPage,
        pageOptions,
        canPreviousPage,
        nextPage,
        canNextPage,
        gotoPage,
        state,
    } = 
    useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 2,
            },
        },
        usePagination
    );

    const { pageIndex, pageSize } = state;
    return (
        <>
            <div className="same-bg">
           
                <form ref={ref} >
                    <div className="d-flex search-content">
                        <div className="select form-group d-flex">
                            <select
                                value={pageSize}
                                onChange={(e) => {
                                    setPageSize(Number(e.target.value));
                                }}
                            >
                                {[3, 5, 10].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                            <span>
                            Entries:{" "}
                            <input
                                type="number"
                                value={pageIndex + 1}
                                onChange={(e) => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                    gotoPage(page);
                                }}
                                style={{ width: "100px" }}
                            />
                        </span>{" "}
                        </div>
                        <div className="form-group d-flex search">
                            <label>Search:</label>
                            {/* <input  onChange={(e) => Setsearchdata(e.target.value)} value={searchVal} */}
                            <input  onChange={(e) => {
                              searchdata(e.target.value)
                            //   console.log(page)
                            }} 
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                            />
                        </div>
                        <ul className="download-doc form-group">
                            <li className="item">
                                <ReactCSV name="CSV" />
                            </li>
                            <ReactToPdf targetRef={dataToPrintRef} filename="manage sale.pdf" options={options} scale={.9}>
                            {({toPdf}) =>  (
                                
                                <li className="item" onClick={toPdf}>PDF</li>
                            )}
                        </ReactToPdf>
                            {/* <li className="item" onClick={pdfDocument}>PDF</li> */}
                            <li className="item"onClick={handlePrint} >
                              Print</li>
                        </ul>
                    </div>
                </form>
      
   
                <table {...getTableProps()} className="table cl-table" id="divToPrint" ref={dataToPrintRef}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="pagination cl-pagination">
                    <div className="page-result">
                        <span>
                            Showing{" "}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{" "}
                        </span>
                    </div>
                    <div className="page-button ml-auto ">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                gotoPage(0);
                            }}
                            disabled={!canPreviousPage}
                        >
                            {"Previous"}
                        </button>{" "}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                previousPage();
                            }}
                            disabled={!canPreviousPage}
                        >
                            {"<"}
                        </button>{" "}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                nextPage();
                            }}
                            disabled={!canNextPage}
                        >
                            {">"}
                        </button>{" "}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                gotoPage(pageCount - 1);
                            }}
                            disabled={!canNextPage}
                        >
                            {"Next"}
                        </button>{" "}
                    </div>
                </div>
            </div>
        </>
    );
};
