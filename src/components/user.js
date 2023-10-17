import React from 'react';

function User(props) {
    return (
        <div>
            <h2>Пользователь</h2>
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
        </div>
    );
}

export default User;
