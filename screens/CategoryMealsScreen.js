import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {

    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    const renderItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={displayedMeals}
                renderItem={renderItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

//navigation options takes a function also if your header configuration dynamically changes
//like in this title is changing on basis of selected category.
CategoryMealScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((category) => category.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
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


