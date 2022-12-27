import BoxData from './components/BoxData'
import Box from './components/Box'
import { useState } from 'react';
import './App.css';

function App() {

	const [box, setBox] = useState(BoxData)

	function toggle(id){
		setBox(prevBox => {
			return prevBox.map(item => {
				return item.id === id ? {...item, on: !item.on} : item
			})
		})
	}


	const boxElements = box.map(boxData => {
		return 	<Box 
					key = {boxData.id}
					handleClick = {() => toggle(boxData.id)}
					on =  {boxData.on}
				/>
	})

	return (
		<div>
			{boxElements}
		</div>
	);
}

export default App;
