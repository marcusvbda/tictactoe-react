import "./Styles.scss";
import ResultOverflow from '../ResultOverflow/Component'
import SquareSection from '../SquareSection/Component'



function GameBoard() {
    const matrix = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]
    
    const renderSquares = () => {
        return matrix.map((row,i) => (
            <div className="gameboard--row" key={i}>
                {row.map((col,y) => (<SquareSection  row={i} column={y} key={`${i}_${y}`} />) )}
            </div>
        ))
    }
    
    return (
        <>
            <ResultOverflow />
            <div className="gameboard">
                {renderSquares()}
                <div className="gameboard--playername">
                    <b>Próximo Jogador : </b> teste
                </div>
            </div>
        </>
    );
}

export default GameBoard;