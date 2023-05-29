import { FC } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from 'utils/constants';
import styles from './index.module.scss';

export const GoBackButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.MAIN);
  };

  return (
    <button className={styles.go_back_btn} onClick={handleClick} type="button">
      Go Back
    </button>
  );
};
