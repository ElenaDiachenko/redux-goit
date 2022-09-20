import { FilterButton } from 'components/FilterButton/FilterButton';
// import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <FilterButton
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </FilterButton>
      <FilterButton
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </FilterButton>
      <FilterButton
        selected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
        Completed
      </FilterButton>
    </div>
  );
};
