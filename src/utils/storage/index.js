import AsyncStorage from "@react-native-async-storage/async-storage";

export const userData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        // saving error
    }
}