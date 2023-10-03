function User(props) {
  return (
    <div>
      <h2>Имя пользователя: {props.name}</h2>
      <p>Возраст: {props.age}</p>
    </div>
  );
}
export default User;
