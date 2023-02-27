import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import UserListItem from '@/components/UserListItem';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Search from '@/components/Search';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home(props) {
  const [users, setUsers] = useState(props.users);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(users.slice(0, 10));
  }, [users]);

  const handlePageChange = (event, page) => {
    setList(users.slice((page - 1) * 10, page * 10));
  };

  return (
    <>
      <Head>
        <title>GitHub Users</title>
      </Head>
      <main className={styles.main}>
        <Search setUsers={setUsers} />

        <div className={styles.userList}>
          {list.map((user, index) => (
            <UserListItem key={index} user={user} />
          ))}
        </div>

        <ThemeProvider theme={darkTheme}>
          <Pagination
            count={Math.ceil(users.length / 10)}
            onChange={handlePageChange}
          />
        </ThemeProvider>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await axios.get(`https://api.github.com/users?per_page=100`);

  return {
    props: {
      users: data.data,
    },
  };
};
