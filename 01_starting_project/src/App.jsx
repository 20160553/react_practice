import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/Components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <imag src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept title="Components" description="Component Description" img={componentsImg} />
            <CoreConcept title="Components1" description="Component 11Description" img={componentsImg} />
            <CoreConcept title="Components2" description="Component 22Description" img={componentsImg} />
            <CoreConcept title="Components3" description="Component 33Description" img={componentsImg} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;