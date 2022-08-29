// import { ReactTooltip } from "react-tooltip";
import { usePagination, useTable } from "react-table";

export const AllTable = ({columns,data}) => {

 
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

  } = useTable({
    columns,
    data,
    initialState: {
      pageIndex: 0, pageSize: 2
    }
  },
  usePagination,
  );
const {pageIndex, pageSize}= state
    return(
        <>

        <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="pagination">
            <button onClick={(e) => {e.preventDefault();gotoPage(0)}} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={(e) => {e.preventDefault(); previousPage()}} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={(e) => {e.preventDefault(); nextPage()} }disabled={!canNextPage}>
          {">"}
        </button>{" "}
            <button
              onClick={(e) => {e.preventDefault(); gotoPage(pageCount - 1)}}
              disabled={!canNextPage}
            >
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <span>
              | Go to page:{' '}
              <input
                type="number"
                value={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: '100px' }}
              />
            </span>{' '}
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
          </div>

        </>
    )
}