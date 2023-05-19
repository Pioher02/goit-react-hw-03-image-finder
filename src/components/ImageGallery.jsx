const { Component } = require('react');

class ImageGallery extends Component {
  render() {
    const { showImages } = this.props;
    return (
      <ul className="gallery">
        {showImages.map(showImage => (
          <li key={showImage.id} className="galleryItem">
            <img
              src={showImage.webformatURL}
              alt={showImage.id}
              className="galleryItem-image"
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
