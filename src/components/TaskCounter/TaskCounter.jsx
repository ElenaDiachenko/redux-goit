import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <p className={css.text}>Active: 0</p>
      <p className={css.text}>Completed: 0</p>
    </div>
  );
};
