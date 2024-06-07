import AsyncStorage from "@react-native-async-storage/async-storage";

export interface StorageResponse {
  token: string | undefined;
}
export const useStorage = () => {
  const configInit: StorageResponse = {
    token: undefined,
  };

  const getConfigApp = async (): Promise<StorageResponse> => {
    try {
      const value = await AsyncStorage.getItem("@config");
      if (value !== null) {
        return JSON.parse(value);
      }
      return {} as StorageResponse;
    } catch (e) {
      console.error("🚀 ~ getConfigApp ~ e:", e);
      return {} as StorageResponse;
    }
  };

  const getConfigAppAttribute = async (attribute: keyof StorageResponse) => {
    try {
      const value = await AsyncStorage.getItem("@config");
      if (value !== null) {
        let data = JSON.parse(value);
        return data[attribute] || null;
      }
      return null;
    } catch (e) {
      console.error("🚀 ~ getConfigAppAttribute ~ e:", e);
    }
  };

  const setConfigApp = async (value: any, attribute: keyof StorageResponse) => {
    try {
      const storage = await AsyncStorage.getItem("@config");
      let data = storage ? JSON.parse(storage) : configInit;
      data[attribute] = value;
      await AsyncStorage.setItem("@config", JSON.stringify(data));
    } catch (e) {
      console.error("🚀 ~ setConfigApp ~ e:", e);
    }
  };

  const clearConfigApp = async () => {
    try {
      await AsyncStorage.setItem("@config", JSON.stringify(configInit));
    } catch (e) {
      console.error("🚀 ~ clearConfigApp ~ e:", e);
    }
  };
  return {
    getConfigApp,
    getConfigAppAttribute,
    setConfigApp,
    clearConfigApp,
  };
};
