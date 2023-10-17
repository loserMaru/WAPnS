import React, {useState} from 'react';

function List(props) {
    const [filter, setFilter] = useState('');
    const [sortCriteria, setSortCriteria] = useState('name');

    const filteredList = props.items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase()) || item.age.toString().toLowerCase().includes(filter.toLowerCase());
    });

    const sortedList = filteredList.sort((a, b) => {
        if (sortCriteria === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortCriteria === 'age') {
            return a.age - b.age;
        }

    });

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Фильтр"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
                <select
                    value={sortCriteria}
                    onChange={e => setSortCriteria(e.target.value)}
                >
                    <option value="name">По имени</option>
                    <option value="age">По возрасту</option>
                </select>
            </div>
            <ul>
                {sortedList.map((item, index) => (
                    <li key={index}>{item.name} {item.age}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
