import React from "react"

const data = {
    number: 123,
    text: "Context API..."
}

const DataContext = React.createContext(data)

export {data, DataContext}
export default DataContext