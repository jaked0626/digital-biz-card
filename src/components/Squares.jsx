export default function Squares() {
    let numSquares = 12;
    let squares = [];
    for (let i = 0; i < numSquares; ++i) {
        squares.push( <li /> )
    }
    return (
        <>
            <ul className="shooting-squares">
                {squares}
            </ul>
        </>
    )
}