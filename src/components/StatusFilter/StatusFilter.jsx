import { FilterButton } from 'components/FilterButton/FilterButton';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  return (
    <div className={css.wrapper}>
      <FilterButton>All</FilterButton>
      <FilterButton>Active</FilterButton>
      <FilterButton>Completed</FilterButton>
    </div>
  );
};
