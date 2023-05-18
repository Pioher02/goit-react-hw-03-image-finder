import { Component } from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';
import ImageGallery from './ImageGallery';

const fetchImages = async (search, currentPage) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=36466872-8cd7f36167ccc00ecda2aa8fc&q=${search}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

class App extends Component {
  state = {
    search: '',
    images: [],
  };

  searchWord = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.setState({ search: form.elements.search.value, images: [] });
    this.searchImages();
  };

  searchImages = async () => {
    const request = await fetchImages(this.state.search);
    const newImages = request.map(function (image) {
      var nImg = {};
      nImg.id = image.id;
      nImg.largeImageURL = image.largeImageURL;
      nImg.webformatURL = image.webformatURL;
      return nImg;
    });
    this.setState(({ images }) => ({
      images: [...images, ...newImages],
    }));
  };

  render() {
    return (
      <div>
        <Searchbar searchWord={this.searchWord} />
        <ImageGallery showImages={this.state.images} />
      </div>
    );
  }
}

export default App;
