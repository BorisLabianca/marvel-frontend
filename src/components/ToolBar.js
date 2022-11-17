const ToolBar = ({
  searchContent,
  setSearchContent,
  placeholder,
  limit,
  setLimit,
  skip,
  setSkip,
}) => {
  return (
    <div className="search-bar-n-pagination">
      <input
        type="text"
        placeholder={placeholder}
        value={searchContent}
        className="search-bar"
        onChange={(event) => {
          setSearchContent(event.target.value);
        }}
      />
      <select
        name="limit"
        id="limit"
        onChange={(event) => {
          setLimit(Number(event.target.value));
          setSkip(0);
        }}
      >
        <option value={0}>--</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <button
        onClick={() => {
          skip !== 0 && setSkip(Number(skip) - Number(limit));
          //   console.log(typeof skip, typeof limit);
        }}
        className={skip === 0 ? "disabled" : ""}
      >
        Previous
      </button>
      <span>1</span>
      <button
        onClick={() => {
          setSkip(Number(skip) + Number(limit));
          //   console.log(typeof skip, typeof limit);
        }}
      >
        Next
      </button>
    </div>
  );
};
export default ToolBar;
