import instance from "../../axios/config";

const Pagination = ({
  currentPage = 1,
  lastPage = 1,
  setData,
  setPage,
  setProducts,
}) => {
  const page = [];
  for (let i = 1; i <= lastPage; i++) {
    page[i - 1] = i;
  }

  const fetchData = async (page) => {
    const { data } = await instance.get(`products?page=${page}`);
    setProducts(data.products.data);
    setData(data.products.data);
    console.log(data)
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex justify-end">
          <li>
            <button
              className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {page.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={`relative block rounded px-3 py-1.5 mx-2 text-base transition-all duration-300 ${
                    item === currentPage
                      ? "bg-baseColor text-white hover:bg-baseBg"
                      : "bg-transparent text-neutral-600 hover:bg-neutral-100"
                  }`}
                  onClick={() => {
                    setPage((pre) => ({
                      ...pre,
                      current_page: item,
                    }));
                    fetchData(item);
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
          <li>
            <button
              className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
