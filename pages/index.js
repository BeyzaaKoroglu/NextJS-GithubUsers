import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import UserListItem from '@/components/UserListItem';

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>GitHub Users</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.userList}>
          {users.map((user, index) => (
            <UserListItem key={index} user={user} />
          ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await axios.get(`https://api.github.com/users`);

  return {
    props: {
      users: data.data,
    },
  };
};
