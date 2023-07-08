import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredDestinationsList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    let outputList
    switch (searchInput) {
      case '':
        outputList = destinationsList
        break

      default:
        outputList = filteredDestinationsList
        break
    }
    return (
      <div className="main-container">
        <h1>Destination Search</h1>
        <div className="search-input">
          <input
            onChange={this.onChangeSearchInput}
            type="search"
            value={searchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {outputList.map(item => (
            <DestinationItem
              key={item.id}
              item={item}
              searchInput={searchInput}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
