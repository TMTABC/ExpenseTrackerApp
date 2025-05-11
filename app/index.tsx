import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from "react-native";
import {colors} from "@/constants/theme";
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=>{
            router.push("/(auth)/welcome");
        },2000)
    },[])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.neutral900} barStyle="light-content" />
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require("../assets/images/splashImage.png")}
            />
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral900
    },
    logo:{
        height: "20%",
        aspectRatio: 1,
    }
});