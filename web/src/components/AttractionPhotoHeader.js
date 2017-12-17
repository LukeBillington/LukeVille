import React, { Component } from 'react';
import { View, Image } from '../styles';
import './AttractionPhotoHeader.css';

class AttractionPhotoHeader extends Component {

  render() {
    return (
      <View
        classes='AttractionPhotoHeader_Container'
      >
        <Image
          classes='AttractionPhotoHeader_Image'
          source={'http://localhost:8000' + this.props.photo_path}
        />
      </View>
    )
  }

}

export default AttractionPhotoHeader;
