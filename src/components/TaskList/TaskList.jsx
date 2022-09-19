import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useVisibleTasks } from 'hooks/useVisibleTasks';

export const TaskList = () => {
  const visibleTasks = useVisibleTasks();

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
