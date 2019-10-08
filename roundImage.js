import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, ViewPropTypes, View, ImageBackground } from 'react-native';
import Icon from './images/icon_default_logo.png'

class RoundImage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoadError: false
        }
    }

    render() {
        const {isLoadError} = this.state
        const props = this.props;
        return(
            <View
        style={[
                styles,
        { height: props.size, width: props.size, backgroundColor: 'white' },
        props.rounded && { borderRadius: props.size / 2, borderWidth: 0 },
            props.style
    ]}
    >

        <Image
            {...props}
            style={[
                    // styles,
                    { height: props.size, width: props.size },
                props.rounded && { borderRadius: props.size / 2, borderWidth: 0 },
            // props.style
        ]}
            source={
                props.source.uri
                ? props.source
                : require('./images/icon_default_logo.png')
        }
            resizeMode={props.resizeMode}
            defaultSource={Icon}
            />

    </View>
    )
    }
}

// const Avatar = props => (
//
// );

RoundImage.defaultProps = {
    size: 55,
    rounded: false,
    resizeMode: 'contain'
};

RoundImage.propTypes = {
    size: PropTypes.number,
    style: ViewPropTypes.style,
    source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    rounded: PropTypes.bool,
    resizeMode: PropTypes.string
};

const styles = {
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
    // alignSelf: 'flex-start',
    // marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
    overlayColor: 'white',
    overflow: 'hidden'
};

export default RoundImage
