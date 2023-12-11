const UserGreeting = ({username, onLogout}) => {
    return (
        <div>
            <p>Добро пожаловать, {username}!</p>
            <button onClick={onLogout}>Выйти</button>
        </div>
    );
}

export default UserGreeting;