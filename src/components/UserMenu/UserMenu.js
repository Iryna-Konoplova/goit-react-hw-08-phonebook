// Модули
import { useDispatch, useSelector } from 'react-redux';

// Компоненты
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
// import defaultAvatar from './default-avatar.png';

// Стили
import styles from '../UserMenu/UserMenu.module.css';

// const styles = {
//   avatar: {
//     marginRight: 4,
//   },
// }

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span className={styles.name}>Добро пожаловать, {name}</span>

      <Button
        variant="contained"
        // color="primary"
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
      {/* <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button> */}
    </div>
  );
}
