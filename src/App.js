import "./App.css";
import BookDescription from "./BookDescription";

function App() {
  return (
    <div className="container">
      <BookDescription
        name={`ჰომო დეუსი`}
        author={`იუვალ ნოახ ჰარარი`}
        src={`/assets/homo.webp`}
        onClick={(name, author) => {
          console.log(name, author);
        }}
      />
    </div>
  );
}

export default App;
