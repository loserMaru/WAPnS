// Задание 10

export default function Signup() {
    function handleSubmit(e) {
      e.preventDefault();
      alert('Submitting!');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input />
        <button type="submit">Send</button>
      </form>
    );
  }
  