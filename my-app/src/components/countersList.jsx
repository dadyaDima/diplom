import React,{useState} from "react"
import Counter from './counter'

const CountersList = () => {
    const initialState = [
        {id: 0, value: 10, name: 'ненужная вещь', price: '200'}, 
        {id: 1, value: 20, name: 'ложка'},
        {id: 2, value: 30, name: 'вилка'},
        {id: 3, value: 40, name: 'тарелка'},
        {id: 4, value: 50, name: 'набор минималиста'}
    ]
   
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        setCounters(counters.filter((count)=>count.id !== id))
    }
    const handleReset = () => {
        setCounters(initialState)
    }

    // решение № 1
    // const handleIncrement = (id) => {
    //     const newCounters = counters.map((count)=>{
    //         if(count.id === id) count.value++
    //         return count
    //     })
    //     setCounters(newCounters)
    // }

    // Решение №2 (код в 2 функциях идентичен и дублируется - создаем 1 функцию с параметром (increment/decrement))

    const handleChangeCount = (id, operation) => {
        const newCounters = counters.map((count)=>{
            if(operation === 'increment' && count.id === id) count.value++
            if(operation === 'decrement' && count.id === id  && count.value > 0 ) count.value--
            return count
        })
        setCounters(newCounters)
    }

    // const handleIncrement = (id) => {
    //     const elementIndex = counters.findIndex((count)=>count.id === id)
    //     const newCounters = [...counters]
    //     newCounters[elementIndex].value++
    //     setCounters(newCounters)
    // }
    // const handleDecrement = (id) => {
    //    const elementIndex = counters.findIndex((count)=>count.id === id)
    //    const newCounters = [...counters]
    //    newCounters[elementIndex].value--
    //    setCounters(newCounters)
    // }

    return <>
        {counters.map((counter) => {
            return <Counter
                key={counter.id}                                                                                     
                onDelete={handleDelete}
                onChangeCount={handleChangeCount}
                {...counter}   
            />
        })}
        <button onClick={handleReset}>Reset</button>
    </>

}

export default CountersList