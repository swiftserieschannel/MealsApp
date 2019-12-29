import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import { Platform } from 'react-native';
import Colors from '../constants/colors';
import Category from '../models/category';
import { createDrawerNavigator } from '';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import FavouriteScreen from '../screens/FavouriteScreen';
import FilterScreen from '../screens/FiltersScreen'

const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
}


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    // initialRouteName: 'Categories', // by default first screen name 
    //will be root screen as defined in create stack navigator first argument
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
    }
});

const FavNavigation = createStackNavigator({
    Favorites: FavouriteScreen,
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'Categories', // by default first screen name 
    //will be root screen as defined in create stack navigator first argument
    defaultNavigationOptions: defaultStackNavigationOptions
});


const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor //only for android and effects if shifting is true
        }
    },
    Favorites: {
        screen: FavNavigation, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMeaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: Colors.accentColor, shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor
    }
})
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
        }
    });

    const FiltersNavigator = createStackNavigator({
        Filters: FilterScreen,
    });


const MainNavigator =  createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator
})
export default createAppContainer(MainNavigator);