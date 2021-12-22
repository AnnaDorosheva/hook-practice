import React, {useEffect, useState} from 'react';

const Search = (props) => {
  const [tempSearch, setTemlSearch] = useState(props.value);

  useEffect(() => {
    setTemlSearch(props.value)
  }, [props.value]);

  return (
    <>
      <input
      value={tempSearch}
        onChange={(e) => {
          return setTemlSearch(e.target.value);
        }}
        placeholder="search..."
      ></input>
      <button onClick={() => props.onSubmit(tempSearch)}>Find</button>
    </>
  )
};

export default Search;
