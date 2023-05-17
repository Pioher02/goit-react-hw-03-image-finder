const { Component } = require('react');

class Searchbar extends Component {
  static defaultProps = { searchImage: 0 };
  render() {
    const { searchImage } = this.props;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={searchImage}>
          
          <button type="submit" className="button" >
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
