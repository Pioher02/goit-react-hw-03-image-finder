const { Component } = require('react');

class ImageGallery extends Component {
  

  render() {
    const { showImages } = this.props;
    return (
      <ul className="gallery">
        {showImages.map(showImage => (
          <li key={showImage.id}>
            <img src={showImage.webformatURL} alt={showImage.id} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
