import React from 'react';
import './App.css';
import {ShopComponent} from './components/shopComponent/ShopComponent'
import ToDoComponent from './components/toDoComponent/toDoComponent';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
function App() {
    return (
        // <ShopComponent/>
        <div style={{margin:'auto'}}>
            <DndProvider backend={HTML5Backend}>
                <ToDoComponent />
            </DndProvider>
        </div>
    )
}

export default App;