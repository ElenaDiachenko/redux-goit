import { FilterButton } from 'components/FilterButton/FilterButton';
import css from './StatusFilter.module.css';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);

  return (
    <div className={css.wrapper}>
      <FilterButton selected={filter === statusFilters.all}>All</FilterButton>
      <FilterButton selected={filter === statusFilters.active}>
        Active
      </FilterButton>
      <FilterButton selected={filter === statusFilters.completed}>
        Completed
      </FilterButton>
    </div>
  );
};
