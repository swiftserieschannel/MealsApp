import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Platform, TouchableNativeFeedback } from "react-native";

var TouchableCmp = TouchableOpacity;
if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
}

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableCmp onPress={props.onSelect} style={{ flex: 1, }}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden', 
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 10,
        elevation: 3,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }, title: {
        fontFamily: 'latoBold',
        fontSize: 16,
        textAlign: "right",
    }
});

export default CategoryGridTile;