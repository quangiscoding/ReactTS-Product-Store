import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/search/searchSlice.ts";
import type { RootState } from "../../app/store.ts";

const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="input input-search"
      value={query}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
};

export default SearchBox;
