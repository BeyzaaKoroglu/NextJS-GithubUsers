import styles from '@/styles/Search.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Search = ({ setUsers }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleClick = () => {
    if (searchKey !== '')
      axios
        .get(`https://api.github.com/search/users?q=${searchKey}&per_page=100`)
        .then((res) => {
          setUsers(res.data.items);
        });
    else
      axios.get(`https://api.github.com/users?per_page=100`).then((res) => {
        setUsers(res.data);
      });
  };

  return (
    <div className={styles.searchArea}>
      <input
        className={styles.searchInput}
        value={searchKey}
        onChange={handleChange}
      />
      <button className={styles.searchBtn} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
