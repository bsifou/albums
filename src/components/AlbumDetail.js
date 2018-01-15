import React from 'react';
import { Text, View, Image, Linking } from 'react-native';


import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

const AlbumDtail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const { 
        thumnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
     } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumnailStyle} source={{ uri: thumbnail_image }} />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    thumnailStyle: {
        height: 50,
        width: 50
    },

    thumbnailContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },

    headerTextStyle: {
        fontSize: 20
    }, 

    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    }
};

export default AlbumDtail;
