import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'

type Props = {}

const PreviewZone = (props: Props) => {

  const { formState } = useContext(GlobalContext)

  return (
    <>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  )
}

export default PreviewZone