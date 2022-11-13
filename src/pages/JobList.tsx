import React, { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import Card from "../components/card/Card";

import { useJobContext } from "../context/contextHooks";

const itemsPerPage = 15;

const JobList: FC = () => {
  const { jobList } = useJobContext();
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = jobList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobList.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % jobList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="bg-[#e6e9f2] flex-column gap-6 md:gap-12">
        <ul className="m-auto max-w-[1400px] pt-3 md:pt-7 mx-2">
          {currentItems.map((job) => (
            <Link key={job.id} to={`/jobboard/${job.id}`}>
              <Card job={job} />
            </Link>
          ))}
        </ul>
        <ReactPaginate
          breakLabel="..."
          nextLabel="| >"
          previousLabel="< |"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          containerClassName="flex-container bg-white w-fit rounded-lg shadow-md mb-4"
          pageClassName="px-3 py-2"
          activeClassName="border-b-2 border-blue-400 text-blue-400"
          previousClassName="px-5 text-gray-300 text-3xl -mt-1 tracking-[5px]"
          nextClassName="px-5 text-gray-300 text-3xl -mt-1 tracking-[5px]"
        />
      </div>
    </>
  );
};

export default JobList;
