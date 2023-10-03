// Задание 5-6
// Изменены <h1>{person}</h1> на <h1>{person.name}</h1>
// Добавлен imageUrl
const person = {
    name: 'Брендан Эйх',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
    },
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg"
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name} – создатель языка программирования JS</h1>
        <img
          className="avatar"
          src={person.imageUrl}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fueled engine</li>
        </ul>
      </div>
    );
  }
