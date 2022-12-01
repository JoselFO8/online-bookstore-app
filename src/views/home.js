import React, { useEffect, useState } from "react";
import { Text, View, TouchableHighlight, FlatList } from "react-native";
import BookListItem from "../components/Book/BookListItem";

const BOOK_LIST = [
    {
        _id: 1,
        title: 'Libro 1',
        cover: 'http://res.cloudinary.com/dhx65bkff/image/upload/v1669865096/otnwljgqaetaeckg1h4d.jpg'
    },
    {
        _id: 2,
        title: 'Libro 2',
        cover: 'https://picsum.photos/200'
    },
]

export default function Home({navigation}) {
    const [ books, setBooks ] = useState(null)

    function handleOnClick() {
        navigation.navigate('Library')
    }

    useEffect(function() {
        const getBooks = async () => {
            const response = await fetch('http://localhost:3001/bookstore-books');
            const json = await response.json();
            console.log('Prueba getBooks', json);
            setBooks(json.books)
        }
        getBooks();
    }, [])

    console.log(books);

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
                    data={books}
                    renderItem={ ({item}) => 
                        <BookListItem 
                            book={item}
                            onClick={handleOnClick}
                        />
                    }
                    keyExtractor={item => item._id}
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