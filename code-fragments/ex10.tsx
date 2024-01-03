<div className="row">
{top.map((l) => <button onClick={() => setText( text + l)}>{l}</button>)}
  </div>
  <div className="row">
 {middle.map((l) => <button onClick={() => setText( text + l)}>{l}</button>)}  
   </div>
   <div className="row">
  {bottom.map((l) => <button onClick={() => setText( text + l)}>{l}</button>)}