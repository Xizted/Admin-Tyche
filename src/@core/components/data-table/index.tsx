import { Fragment, useState } from 'react';
import DataTableCustom from 'react-data-table-component';
import { ChevronDown } from 'react-feather';
import {
  Card,
  CardHeader,
  CardTitle,
} from 'reactstrap';

import CustomPagination from './CustomPagination';

const DataTable = ({ columns, data, title }: any) => {
  const [currentPage, setCurrentPage] = useState(0);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>{ title }</CardTitle>
        </CardHeader>
        <div className='react-dataTable react-dataTable-selectable-rows'>
          <DataTableCustom
            noHeader
            pagination
            columns={columns}
            paginationPerPage={5}
            className='react-dataTable'
            onRowClicked={(row) => console.log(row)}
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={() => (
              <CustomPagination
                currentPage={currentPage}
                handlePagination={handlePagination}
                data={data}
              />
            )}
            paginationDefaultPage={currentPage + 1}
            data={data}
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default DataTable;
