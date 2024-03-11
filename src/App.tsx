import React, { useEffect, useState } from 'react';
import './App.css';
import GroupCard from './components/GroupCard';
import Filter from './components/Filter';
import getMockData from './api/api';

const App: React.FC = () => {
  const [groupsArray, setGroupsArray] = useState<Group[]>([]);
  const [filterColor, setFilterColor] = useState('');
  const [filterPrivate, setFilterPrivate] = useState('');
  const [filterFriends, setFilterFriends] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMockData();
      if (data.result === 1 && data.data) {
        setGroupsArray(data.data);
      } else {
        console.error('Ошибка получения данных');
        setGroupsArray([]);
      }
    };

    fetchData();
  }, []);

  const applyFilters = (group: Group) => {
    return (
      (filterColor === '' ||
        filterColor === group.avatar_color ||
        (filterColor === 'none' && !group.avatar_color)) &&
      (filterPrivate === '' ||
        (filterPrivate === 'closed' && group.closed) ||
        (filterPrivate === 'opened' && !group.closed)) &&
      (filterFriends === '' || (filterFriends === 'friends' && group.friends))
    );
  };

  const renderFilters = () => (
    <>
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
    </>
  );

  return (
    <div>
      <h1>Список групп</h1>
      {renderFilters()}
      {groupsArray.length ? (
        <div>
          {groupsArray.filter(applyFilters).map((group) => (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
