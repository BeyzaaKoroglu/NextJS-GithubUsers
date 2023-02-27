import styles from '@/styles/UserListItem.module.css';
import Link from 'next/link';

const UserListItem = ({ user }) => {
  return (
    <div className={styles.user}>
      <Link href={`/${user.login}`}>
        <img className={styles.userAvatar} src={user.avatar_url} />
      </Link>
      <div>
        <h1 className={styles.userName}>
          <Link href={`/${user.login}`}>{user.login}</Link>
        </h1>
        <Link className={styles.link} href={user.html_url}>
          View GitHub profile
        </Link>
      </div>
    </div>
  );
};

export default UserListItem;
