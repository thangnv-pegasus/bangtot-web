import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  CLOSE_SEARCH,
  OPEN_SEARCH,
} from "../../redux/slices/search-modal-slice";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputRef.current.value}`);
    dispatch(CLOSE_SEARCH())
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-50 flex items-center justify-center animate-enlarge">
      <button
        className="absolute top-0 right-0 text-white text-4xl px-4 py-2"
        onClick={() => dispatch(CLOSE_SEARCH())}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <form
        action=""
        method="post"
        className="flex w-3/5 relative"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          name="searchValue"
          id=""
          placeholder="Nhập tên sản phẩm"
          className="block flex-1 px-10 py-2 outline-none bg-transparent border-b-[1px] border-solid border-white placeholder:text-center text-white text-center"
          ref={inputRef}
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-0 text-white px-2 py-1"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Search;
