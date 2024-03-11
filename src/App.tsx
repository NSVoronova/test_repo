import { useEffect, useState } from 'react';
import { groups } from './mocks/groups';
import './App.css';
import GroupCard from './components/GroupCard';
import Filter from './components/Filter';

const App: React.FC = () => {
  const [filterGroups, setFilterGroups] = useState(groups);
  const [filterColor, setFilterColor] = useState('');
  const [filterPrivate, setFilterPrivate] = useState('');
  const [filterFriends, setFilterFriends] = useState('');

  useEffect(() => {
    const newGroups = groups
      .filter((group) => {
        if (
          group.avatar_color === filterColor ||
          filterColor === '' ||
          (filterColor === 'none' && !group.avatar_color)
        ) {
          return true;
        }
      })
      .filter((group) => {
        if (
          filterPrivate === '' ||
          (filterPrivate === 'closed' && group.closed) ||
          (filterPrivate === 'opened' && !group.closed)
        ) {
          return true;
        }
      })
      .filter((group) => {
        if (
          filterFriends === '' ||
          (filterFriends === 'friends' && group.friends)
        ) {
          return true;
        }
      });
    setFilterGroups(newGroups);
  }, [filterColor, filterPrivate, filterFriends]);

  return (
    <div>
      <h1>Список групп</h1>
      <label>Фильтровать по: </label>
      <Filter type='color' filter={filterColor} filterChange={setFilterColor} />
      <Filter
        type='private'
        filter={filterPrivate}
        filterChange={setFilterPrivate}
      />
      <Filter
        type='friends'
        filter={filterFriends}
        filterChange={setFilterFriends}
      />
      <div>
        {filterGroups.map((group) => (
          <GroupCard
            closed={group.closed}
            id={group.id}
            members_count={group.members_count}
            name={group.name}
            avatar_color={group.avatar_color}
            friends={group.friends}
            key={group.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
