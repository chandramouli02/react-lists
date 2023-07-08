import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {item} = this.props
    //  console.log(item)
    const {name, imgUrl} = item
    return (
      <li className="item-container">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
