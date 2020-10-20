import React, {useState} from 'react'
import './grinder.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Grinder = ({id, brand, model, grinderGrinds, deleteFunction}) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(prevState => !prevState)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    if(deleteFunction){
      deleteFunction(id)
    }
  }

  return (
    <>
      <div className='grinder' key={id} onClick={handleExpand}>
        <span>{id}</span>
        <span>{brand}</span>
        <span>{model}</span>
        <span>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className={`rating__item--delete-button fas fa-trash-alt`}
                onClick={handleDelete}
              /></span>
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