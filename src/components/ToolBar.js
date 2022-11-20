const ToolBar = ({
  searchContent,
  setSearchContent,
  placeholder,
  limit,
  setLimit,
  skip,
  setSkip,
  data,
  count,
  suggestions,
  setSuggestions,
}) => {
  const onSuggestHandler = (searchContent) => {
    setSearchContent(searchContent);
    setSuggestions([]);
  };
  // console.log(count);
  return (
    <div className="search-bar-n-pagination">
      <div className="autocomplete-toolbar">
        <input
          type="text"
          placeholder={placeholder}
          value={searchContent}
          className="search-bar"
          onChange={(event) => {
            let matches = [];
            if (searchContent.length > 0) {
              matches = data.filter((item) => {
                const regex = new RegExp(`${searchContent}`, "gi");
                if (item.name) {
                  return item.name.match(regex);
                } else if (item.title) {
                  return item.title.match(regex);
                } else {
                  return null;
                }
              });
            }
            // console.log("matches : ", matches);
            setSuggestions(matches);
            setSearchContent(event.target.value);
            setSkip(0);
          }}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
        {suggestions.length > 0 && (
          <div className="autocomplete-suggestions">
            {suggestions &&
              suggestions.map((suggestion, index) => {
                if (suggestion.title) {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        onSuggestHandler(suggestion.title);
                      }}
                    >
                      {suggestion.title}
                    </div>
                  );
                } else if (suggestion.name) {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        onSuggestHandler(suggestion.name);
                      }}
                    >
                      {suggestion.name}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        )}
      </div>
      <div className="items-per-page">
        <div>Nombre par page</div>
        <div>
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
        </div>
      </div>
      <div className="page-nav">
        <button
          onClick={() => {
            skip !== 0 && setSkip(Number(skip) - Number(limit));
            //   console.log(typeof skip, typeof limit);
          }}
          className={skip === 0 ? "disabled" : ""}
        >
          Previous
        </button>
        <span>
          {Number(skip) / Number(limit) + 1}/{Math.ceil(count / limit)}
        </span>
        <button
          onClick={() => {
            Number(count) - Number(skip) > limit &&
              setSkip(Number(skip) + Number(limit));
            //   console.log(typeof skip, typeof limit);
          }}
          className={Number(count) - Number(skip) < limit ? "disabled" : ""}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ToolBar;
