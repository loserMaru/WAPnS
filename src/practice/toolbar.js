// Задание 11

export default function Toolbar() {
    function handleToolbarClick() {
      alert('You clicked on the toolbar!');
    }
  
    return (
      <div className="Toolbar" onClick={handleToolbarClick}>
        <button onClick={(e) => { e.stopPropagation(); alert('Playing!'); }}>
          Play Movie
        </button>
        <button onClick={(e) => { e.stopPropagation(); alert('Uploading!'); }}>
          Upload Image
        </button>
      </div>
    );
  }
  