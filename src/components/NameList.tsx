import React from 'react'
type NameListProps = {
    nameList: {
        first: string,
        last: string
    }[]
}
const NameList = (props:NameListProps) => {
  return (
    <div>
        {
            props.nameList.map((name) => {
                return (
                    <h1 key={name.first}>
                        {name.first} {name.last}
                    </h1>
                )
            })
        }
    </div>
  )
}

export default NameList