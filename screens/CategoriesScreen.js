import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = props => {
    // console.log(CATEGORIES);
    // console.log(props);
    const renderGridItem = (itemData) => {
        return (
           <CategoryGridTile title={itemData.item.title} onSelect={()=>{
            props.navigation.navigate({
                routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id,
                }
            });
           }} color = {itemData.item.color} />
        );
    };
    

    return (
        <FlatList
            keyExtractor = {(item,index)=>item.id}
            numColumns={2}
            data={CATEGORIES}
            renderItem= {renderGridItem}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    
});

export default CategoriesScreen;


