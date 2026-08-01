import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Button} from '@astryxdesign/core/Button';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<string[]>([]);

    return (
        <VStack
            gap={5}
            padding={4}
            width="100%"
            align="center"
            justify="center"
            className="my-5"
        >
            <Header title="TodoApp" subtitle="Learning React with Vite"/>
            <main>
                <p className="my-8">Items Stored: {todos.length}</p>
                <HStack gap={3}>
                    <Button label="Save" variant="primary" onClick={() => {
                        setTodos(currentTodos => [...currentTodos, "hello"])
                    }}/>
                    <Button label="Reset" variant="secondary" onClick={() => {
                        setTodos([])
                    }}/>
                </HStack>
            </main>
            <Footer/>
        </VStack>
    );
}

export default App;
