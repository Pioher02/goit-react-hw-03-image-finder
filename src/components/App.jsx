import { Component } from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    search: '',
    images: [],
  };

  searchImage = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.setState({ search: form.elements.search.value, images: [] });
  };

  async componentDidUpdate() {
    const key = '?key=36466872-8cd7f36167ccc00ecda2aa8fc';
    let page = 1;
    if (this.state.images.length === 0) {
      page = 1;
    } else {
      page = page + 1;
    }
    const response = await axios.get(
      key +
        '&q=' +
        this.state.search +
        '&page=' +
        page +
        '&image_type=photo&orientation=horizontal&per_page=12'
    );

    page = 1
      ? this.setState({ images: JSON.stringify(response.data.hits) })
      : this.setState({
          images: [...this.state.images, JSON.stringify(response.data.hits)],
        });
    console.log(this.state.images);
  }

  render() {
    return (
      <div>
        <Searchbar searchImage={this.searchImage} />
      </div>
    );
  }
}

export default App;
