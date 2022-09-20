import { useDispatch } from 'react-redux';
import { FilterButton } from 'components/FilterButton/FilterButton';
import css from './TaskForm.module.css';
import { addTask } from 'redux/actions';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <FilterButton type="submit">Add task</FilterButton>
    </form>
  );
};
