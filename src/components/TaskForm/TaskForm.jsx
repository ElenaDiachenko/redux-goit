import { FilterButton } from 'components/FilterButton/FilterButton';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
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
