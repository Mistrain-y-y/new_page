import React from 'react'
import { Skeleton } from 'antd'

const Loading = () => {
  return (
    <>
      <Skeleton avatar paragraph={{ rows: 15 }} />
    </>
  )
}

export default Loading