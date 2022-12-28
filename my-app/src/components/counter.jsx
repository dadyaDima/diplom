import React from "react"

const Counter = (props) => {
    const {onChangeCount, ...rest} = props

    const formatValue = () => {
        return rest.value === 0 ? <span>empty</span> : rest.value
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        return classes += rest.value === 0 ? 'bg-warning' : 'bg-primary'
    }

    return (
        <div>
            {<span>{rest.name}</span>}
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary m-2 btn-sm" onClick={()=>onChangeCount(rest.id, 'increment')}>+</button>
            <button className="btn btn-primary m-2 btn-sm" onClick={()=>onChangeCount(rest.id, 'decrement')}>-</button>
            <button className="btn btn-outline-danger m-2 btn-sm" onClick={()=> rest.onDelete(rest.id)}>Delete</button>
        </div>
        
        
    )
}

export default Counter