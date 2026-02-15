import { useState } from "react";

import './coutn.css'
export default function Counter() {

  const [count, setcount] = useState(0)


  const inc = () => {
    setcount(count + 1)

  }

  const dec = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  }

  const reset = () => {
    setcount(0)
  }


  return (<>


    <div className="counter-page">
      <div className="counter-box">
        <h1>Counter App</h1>
        <h2 className="count">{count}</h2>

        <div className="btn-group">
          <button onClick={inc}>+ Increase</button>
          <button onClick={dec} disabled={count === 0}>
            − Decrease
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>



  </>)
}