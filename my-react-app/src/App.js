import "./App.css";

function App() {
  const name = "BLACKBOXAI";

  const welcomeText = "Ласкаво просимо до нашого сайту!";

  const imageSrc =
    "https://via.placeholder.com/400x200/FF6B6B/FFFFFF?text=React+Image";
  const imageAlt = "Зображення для React додатку";

  const favoriteSite = {
    назва_сайту: "GitHub",
    url: "https://www.github.com/",
  };

  const number1 = 15;
  const number2 = 25;
  const sum = number1 + number2;

  const colors = ["Червоний", "Синій", "Зелений", "Жовтий"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>{welcomeText}</p>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ maxWidth: "400px", height: "auto" }}
        />
        <p>
          Сума чисел {number1} + {number2} = {sum}
        </p>
        <a
          className="App-link"
          href={favoriteSite.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {favoriteSite.назва_сайту}
        </a>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
