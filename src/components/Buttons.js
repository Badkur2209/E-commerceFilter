import React from "react"

function Buttons({onClickHandler , value , title}) {
  return (
    <button onClick={onClickHandler} value={value} className="btns">{title}</button>
  )
}
export default Buttons