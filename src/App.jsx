import './App.css'

function App() {
    let games = ['Minecraft', 'No Man\'s Sky', 'Terraria', 'Spore'];
    return (
        <div>
            <p>Games:</p>
            <ul>
                {games.map((game) => <li>{game}</li>)}
            </ul>
        </div>
        )
}

export default App
