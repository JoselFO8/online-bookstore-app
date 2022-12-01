import React from "react";
import { Text, View, TouchableHighlight, FlatList } from "react-native";
import BookListItem from "../components/Book/BookListItem";

const BOOK_LIST = [
    {
        id: 1,
        title: 'Libro 1',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 2,
        title: 'Libro 2',
        cover: 'https://picsum.photos/200'
    },
]

export default function Home({navigation}) {
    function handleOnClick() {
        navigation.navigate('Library')
    }

    return (
        <View>
            <Text>Desde home</Text>
            {/* Library es el name del Stack.Screen */}
            <TouchableHighlight
                onPress={() => navigation.navigate('Library') }
            >
                <Text>Ir a la libreria</Text>
            </TouchableHighlight>

            <View>
                {/* Agregar cabecera mediante */}
                <FlatList
                    data={BOOK_LIST}
                    renderItem={ ({item}) => 
                        <BookListItem 
                            book={item}
                            onClick={handleOnClick}
                        />
                    }
                    keyExtractor={item => item.id}
                    ListHeaderComponent={
                        <View>
                            <Text>Mi lista de libros:</Text>
                        </View>
                    }
                />
            </View>
        </View>
    )
}