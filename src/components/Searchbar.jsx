const { Component } = require('react');

class Searchbar extends Component {
  static defaultProps = { searchWord: 0 };
  render() {
    const { searchWord } = this.props;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={searchWord}>
          
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
