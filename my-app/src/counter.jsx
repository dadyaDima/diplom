import React, {useState} from "react"

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

    const formatCount = () => {
        return count === 0 ? <span>empty</span> : count
    }
    const getBadgeClasses = () => {
        let classes = 'badge bg-primary m-2 '
        return count === 0 ? classes + 'bg-warning' : classes
    }
    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        if(count === 0) return
        setCount(count-1)
    }
    const handleTagChange = (id) => {
        setTags((prevTags) => prevTags.filter((tag) => tag !== id))
    }
    const renderTags = () => {
        return  tags.map((tag) => (
            <li key={tag} className="list-group-item" onClick={() => handleTagChange(tag)}>{tag}</li>
        ))
    }

    return (
        <div className="test">
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className="btn btn-primary m-2 btn-sm" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary m-2 btn-sm" onClick={handleDecrement}>-</button>

            <ul className="list-group">
                {
                    tags.length !== 0 && renderTags()
                }
            </ul>
        </div>
        
        
    )
}

export default Counter