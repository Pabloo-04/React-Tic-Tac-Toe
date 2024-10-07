const TURNS ={
  X: 'x',
  O: 'o'
};


const board = Array(9).fill(null);

const Square = ({children, updateBoard, index}) =>{
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App(){
  <main className = 'board'>
      <h1>Tic tac Toe</h1>
        <section classname='game'>
          {
            board.map(( index) =>{
              return (
                <Square 
                key = {index}
                index={index}
                >
                  {index}
                </Square>
            )})
          }   
          </section>
  </main>
}