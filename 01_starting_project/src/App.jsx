import componentsImg from './assets/Components.png';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    console.log(EXAMPLES[selectedTopic]);
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].title}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].title}</code>
        </pre>
      </div>);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          {[<p>Hello</p>, <p>World</p>]}
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} /> )}
            <CoreConcept title="components" description="Component Description" img={componentsImg} />
            <CoreConcept title="jsx" description="Component 11Description" img={componentsImg} />
            <CoreConcept title="props" description="Component 22Description" img={componentsImg} />
            <CoreConcept title="state" description="Component 33Description" img={componentsImg} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>React</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {!selectedTopic ? <p>Please select a topic.</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].title}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].title}</code>
              </pre>
            </div>)
          }
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;