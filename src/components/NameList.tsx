import React from 'react'
import { NameListProps } from '../types/NameList.types'
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