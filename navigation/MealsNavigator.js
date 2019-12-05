import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import {Platform} from 'react-native';
import Colors from '../constants/colors';
import Category from '../models/category';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
},{ 
    // initialRouteName: 'Categories', // by default first screen name 
                                       //will be root screen as defined in create stack navigator first argument
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
    }
});

export default createAppContainer(MealsNavigator);