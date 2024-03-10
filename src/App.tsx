import { useState } from 'react';
import { groups } from './mocks/groups';
import './App.css';
import GroupCard from './components/GroupCard';

const App: React.FC = () => {

  return (
    <div>
      <h1>Список групп</h1>
      <div>
        {groups.map((group) => (
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
