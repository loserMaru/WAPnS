import React from "react";
const MySelect = ({ options, defaultValue, value, sortPosts }) => {
    return (
        <select value={value} onChange={e => sortPosts(e.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {
                options.map(option =>
                    <option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
    )
}
export default MySelect;