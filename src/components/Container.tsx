import React from 'react'
type ContainerProps = {
    styles: React.CSSProperties
}
const Container = ({styles}:ContainerProps) => {
  return (
    <div style={styles}>
        Content Goes Here!
    </div>
  )
}

export default Container