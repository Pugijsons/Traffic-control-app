import React, { useState, useEffect } from 'react';

interface DataItem {
  licensePlate: string;
  speed: number;
  date: string;
}

interface FilteredTableProps {
  data: DataItem[];
}

export const FilteredTable: React.FC<FilteredTableProps> = ({ data }) => {
  const itemsPerPage: number = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<DataItem[]>([]);

  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    const newCurrentItems: DataItem[] = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(newCurrentItems);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="FilteredTable">
        <table>
          <thead>
            <tr>
              <th>License Plate</th>
              <th>Speed</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((val: DataItem, key: number) => {
              return (
                <tr key={key}>
                  <td>{val.licensePlate}</td>
                  <td>{val.speed}</td>
                  <td>{val.date.replace('T', ' ')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="Pagination">
  {Array.from({ length: totalPages }, (_, index: number) => {
    const page = index + 1;
    const startRange = Math.max(currentPage - Math.floor(10 / 2), 1);
    const endRange = Math.min(startRange + 10 - 1, totalPages);

    if (page >= startRange && page <= endRange) {
      return (
        <button key={index} onClick={() => handlePageChange(page)}>
          {page}
        </button>
      );
    }

    return null;
  })}
</div>
      </div>
    </div>
  );
};

export default FilteredTable;