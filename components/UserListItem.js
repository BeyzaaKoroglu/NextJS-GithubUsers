import styles from '@/styles/UserListItem.module.css';
import Link from 'next/link';

const UserListItem = ({ user }) => {
  return (
    <div className={styles.user}>
      <img className={styles.userAvatar} src={user.avatar_url} />
      <div>
        <h1>{user.login}</h1>
        <Link href={user.html_url}>View GitHub profile</Link>
      </div>
    </div>
  );
};

export default UserListItem;
