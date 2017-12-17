import React from 'react';
import { Dimensions, Image } from 'react-native';

class AttractionPhotoHeader extends React.Component {

  render() {
    return (
      <Image
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width * .6}}
        source={{uri: 'http://localhost:8000' + this.props.photo_path}}
      />
    )
  }

}

export default AttractionPhotoHeader;
