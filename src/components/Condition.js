function Condition({condition,children}) {
    return (<>{condition ? children : null}</>)
}

export default Condition;