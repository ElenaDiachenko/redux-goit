import { FilterButton } from 'components/FilterButton/FilterButton';
import { useDispatch } from 'react-redux';

export const Actions = () => {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <FilterButton>Mark all completed</FilterButton>
      <FilterButton>Clear all completed</FilterButton>
    </div>
  );
};
