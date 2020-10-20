import React, {useState} from 'react'
import './grinder.css'

const Grinder = ({id, brand, model, grinderGrinds}) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(prevState => !prevState)
  }
  return (
    <>
      <div className='grinder' key={id} onClick={handleExpand}>
        <span>{id}</span>
        <span>{brand}</span>
        <span>{model}</span>
        {isExpanded && (
          <div className='grinder--details'>
            <div className='grinder--details__header'>
              <span>Clicks</span>
              <span>Grind</span>
            </div>
            {grinderGrinds.map(grind =>
              <div className='grinder--details__element' key={grind.id}>
                <span>{grind.clicks}</span>
                <span>{grind.grindId.caption}</span>
              </div>
            )}
          </div>)
        }
      </div>
    </>
  )
}

Grinder.defaultProps = {
  id: 0,
  brand: 'None',
  model: 'None',
  grinderGrinds: {clicks: 0, griderGrinds: [{grindId: {caption: 'None'}}]}
}

export default Grinder