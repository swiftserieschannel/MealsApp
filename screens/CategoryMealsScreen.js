import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>this is category meal screen</Text>
            <Button title="Go To Meal Details" onPress={() => {
                // props.navigation.navigate({routeName:'MealDetail'});
                // props.navigation.navigate('MealDetail'); // alternate of above
                props.navigation.push('MealDetail'); // alternate of above
            }} />

            <Button title="Go Back To Categories" onPress={() => {
                // props.navigation.goBack();
                props.navigation.pop();//alternative of above
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});

export default CategoryMealScreen;


