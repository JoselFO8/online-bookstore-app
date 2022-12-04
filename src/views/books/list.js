import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Text, View, TouchableHighlight, FlatList } from "react-native";
import BookListItem from "../../components/Book/BookListItem";

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

// const queryClient = new QueryClient()

const GET_BOOKS = 'GET_BOOKS'

const getBooks = async () => {
    const response = await fetch('https://online-bookstore-api.vercel.app/bookstore-books');
    const json = await response.json();
    console.log('Prueba getBooks', json);
    return json
}

export default function List({navigation}) {
    // const [ books, setBooks ] = useState(null)

    function handleOnClick() {
        navigation.navigate('Detail')
    }

    // Tomar respuesta de la API con useState y fetch
    /*
    useEffect(function() {
        const getBooks = async () => {
            const response = await fetch('http://localhost:3001/bookstore-books');
            const json = await response.json();
            console.log('Prueba getBooks', json);
            setBooks(json.books)
        }
        getBooks();
    }, [])
    */

    const { isLoading, status, data, error} = useQuery(GET_BOOKS, getBooks)
    
    console.log('useQuery getBooks', status, data);

    // if (isLoading) return 'Loading...'
 
    // if (error) return 'An error has occurred: ' + error.message

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
                    data={status === 'success' ? data.books : []}
                    // data={BOOK_LIST}
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
                    ListEmptyComponent = {
                        <View>
                            { status === 'loading' && <Text>Cargando libros...</Text> }
                        </View>
                    }
                />
            </View>
        </View>
    )
}