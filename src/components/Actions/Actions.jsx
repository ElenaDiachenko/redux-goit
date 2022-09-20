import { FilterButton } from 'components/FilterButton/FilterButton';
import { useDispatch } from 'react-redux';
import { toggleAllCompleted, deleteAllCompleted } from 'redux/actions';

export const Actions = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <FilterButton onClick={() => dispatch(toggleAllCompleted())}>
        Mark all completed
      </FilterButton>
      <FilterButton onClick={() => dispatch(deleteAllCompleted())}>
        Clear all completed
      </FilterButton>
    </div>
  );
};
