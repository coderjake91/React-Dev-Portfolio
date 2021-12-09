import './App.css';
import React, { useState } from 'react';
import Header  from './components/Header'
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: 'Projects I have completed in this coding bootcamp' },
    { name: 'Resume', description: 'Delicious delicacies' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
