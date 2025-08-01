import { useState } from "react";
import {
  CareerCard,
  FilterBar,
  useCareers,
} from "../../features/admin/careerlist";

const PAGE_SIZE = 5;

const CareerListPage = () => {
  const { careers } = useCareers();
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter careers by department
  const filtered = filter === "All" ? careers : careers.filter((c) => c.department === filter);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedCareers = filtered.slice(start, start + PAGE_SIZE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">New Job Vacancies</h1>


      <FilterBar selected={filter} onChange={(val) => {
        setFilter(val);
        setCurrentPage(1); // Reset to first page on filter change
      }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCareers.map((career) => (
          <CareerCard key={career.id} {...career} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 text-sm rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 text-sm rounded ${
                currentPage === page ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 text-sm rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CareerListPage;
