import styles from '@/styles/User.module.css';
import axios from 'axios';
import Link from 'next/link';

const User = ({ user }) => {
  console.log(user);
  return (
    <>
      <Link href="/">Go Back</Link>
      <div className={styles.main}>
        <img className={styles.userAvatar} src={user.avatar_url} />
        <div>
          <div className={styles.userName}>
            <h1>{user.name ? user.name : '-'}</h1>
            <span>
              ({' '}
              <Link className={styles.link} href={user.html_url}>
                {user.login}
              </Link>{' '}
              )
            </span>
          </div>

          <p className={styles.userBio}>{user.bio}</p>
          <p>
            {user.followers} Followers, Following {user.following}
          </p>
          <p>{user.public_repos} Public Repos</p>
          <p>{user.company ? 'Company: ' + user.company : ''}</p>
          <p>{user.location ? 'Location: ' + user.location : ''}</p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { login } = context.query;
  const data = await axios.get(`https://api.github.com/users/${login}`);

  return {
    props: {
      user: data.data,
    },
  };
};

export default User;
