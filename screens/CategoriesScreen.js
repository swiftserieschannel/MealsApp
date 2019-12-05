import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CATEGORIES from '../data/dummy-data'



const CategoriesScreen = props => {
    // console.log(CATEGORIES);
    // console.log(props);
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate({routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id,
                }});
            }} style={styles.gridItem}>
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
            </TouchableOpacity>
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
    gridItem:{
        flex: 1, 
        margin: 15,  
        height: 150,     
    }
});

export default CategoriesScreen;


