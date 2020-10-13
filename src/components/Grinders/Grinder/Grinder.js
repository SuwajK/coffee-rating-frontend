import React, { useState } from 'react'

const Grinder = ({ id, brand, model, grinderGrinds }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(prevState => !prevState)
  }
  return (
    <>
      <tr key={id} onClick={handleExpand}>
        <td>{brand}</td>
        <td>{model}</td>
      </tr>
      {isExpanded && (
        <>
          <tr><td>Clicks</td><td>Grind</td></tr>
          {grinderGrinds.map(grind => <tr key={grind.id}>
            <td>{grind.clicks}</td>
            <td>{grind.grindId.caption}</td>
          </tr>
          )}
        </>)
      }
    </>
  )
}

Grinder.defaultProps = {
  id: 0,
  brand: 'None',
  model: 'None',
  grinderGrinds: { clicks: 0, griderGrinds: [{ grindId: { caption: 'None' } }] }
}

export default Grinder