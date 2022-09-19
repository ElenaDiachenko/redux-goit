import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getTasks, getFilter } from 'redux/selectors';

export const useVisibleTasks = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);

  switch (filter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
