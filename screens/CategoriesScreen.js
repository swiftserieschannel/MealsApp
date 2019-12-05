import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Text>this is categories screen</Text>
            <Button title="Go To Meals!" onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' });
            }} />

            {/* basically below code will start another stack by making CategoryMeals as root screen! */}
            <Button title="Go To Meals By Create Another Stack!" onPress={() => {
                props.navigation.replace({ routeName: 'CategoryMeals' });
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

export default CategoriesScreen;


