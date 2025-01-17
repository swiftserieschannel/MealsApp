import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return (
       <MealList listData = {displayedMeals } navigation={props.navigation} />
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

export default CategoryMealScreen;


