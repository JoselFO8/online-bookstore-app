import {
    Image, 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-ionicons";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 15,
        paddingVertical: 15,
        paddingLeft: 15,
        paddingRight: 15,

        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    image: {
        height: 50,
        width: 40,
        resizeMode: "cover",
    },
    icon: {
        color: "#000",
        marginLeft: "auto",
    }
})

export default function BookListItem({book, onClick}) {
    return (
        <TouchableOpacity onPress={onClick} >
            <View style={styles.container} >
                <Image
                    source={{uri: book.cover}}
                    style={styles.image}
                />
                <Text>{book.title}</Text>
                <Icon 
                    name="add-circle"
                    style={styles.icon}
                />
            </View>
        </TouchableOpacity>
    )
}