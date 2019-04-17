import AsyncStorage from "@react-native-community/async-storage";

export const saveStorage = async state => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem("@state", serializedState);
  } catch (error) {
    console.log(error);
  }
};

export async function getItem(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log("Error " + error);
    return null;
  }
}
