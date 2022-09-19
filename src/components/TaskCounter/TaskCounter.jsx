import css from './TaskCounter.module.css';
import { useTaskCount } from 'hooks/useTaskCount';

export const TaskCounter = () => {
  const { active, completed } = useTaskCount();

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
