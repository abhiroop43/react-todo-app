import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Button } from '@astryxdesign/core/Button';
import { VStack } from '@astryxdesign/core/Layout';

function App() {
  return (
    <VStack gap={2} className="flex flex-col justify-center gap-3 p-4">
      <Header title="TodoApp" subtitle="Learning React with Vite" />
      <main>
        <p>Go easy on me, as I am new to React</p>


        <div className="text-primary bg-surface rounded-container p-4 flex gap-3">
          <Button label="Save" variant="primary" />
          <Button label="Cancel" variant="secondary" />
        </div>
      </main>
      <Footer />
    </VStack>
  );
}

export default App;
