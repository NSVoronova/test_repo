import React, { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import { avatarVariables, friendsVariables, privateVariables } from './data';

interface IFilter {
  type: 'color' | 'private' | 'friends';
  filter: string;
  filterChange: Dispatch<SetStateAction<string>>;
}

const filterVariables = {
  color: avatarVariables,
  private: privateVariables,
  friends: friendsVariables,
}
const Filter: FC<IFilter> = ({ type, filter, filterChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(filter);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    filterChange(event.target.value);
  };

  return (
    <select name={type} id={type} value={selectedValue} onChange={handleChange}>
      {filterVariables[type] && filterVariables[type].map((item) => (
         <option value={item.value} key={item.name}>{item.name}</option>
      ))}
    </select>
  )
}

export default Filter
