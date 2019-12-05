import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import Colors  from '../constants/colors';
import CATEGORIES from '../data/dummy-data';
const CategoryMealScreen = props => {

    const categoryId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((category)=>category.id === categoryId);
    
    return (
        <View style={styles.screen}>
            <Text>this is category meal screen</Text>
    <Text>selected category title :- {selectedCategory.id}</Text>
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

//navigation options takes a function also if your header configuration dynamically changes
//like in this title is changing on basis of selected category.
CategoryMealScreen.navigationOptions = (navigationData)=>{
    console.log(navigationData);
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((category)=>category.id === categoryId);
    return {
        headerTitle:  selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});

export default CategoryMealScreen;


