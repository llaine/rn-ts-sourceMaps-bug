import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { avatar } from 'resources/images/index';

interface Props {
}

export default class Button extends Component<Props, void> {
    render() {
        return (
            <View>
                <Image source={avatar} />
                <Text>Button</Text>
            </View>
        );
    }
}