import React from "react";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Swiper from 'react-native-swiper';
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import { News, SwiperData } from "../../variables/data";
import FeedNews from "../../components/FeedNews";
import { Notification } from "iconsax-react-native";
import { SaveNews } from "../../components/SaveNews";

type HomeScreenProps = {
    navigation: BottomTabNavigationProp<RootTabParamList, 'Home'>;
};

const Home: React.FC<HomeScreenProps> = (props) => {
    const { navigation } = props

    const goTo = (news: News) => {
        if (news.category == 'Promoção') {
            console.log('AQUI')
        }
        else {
            navigation.navigate('SheetNews', { news })
        }
    }

    return (
        <ScrollView className="bg-background-light">
            <View className="flex flex-1 pb-36 pt-3 px-5 items-center">
                <View className="flex w-full">
                    <View className="flex flex-row items-center justify-between">
                        <View className="flex">
                            <Image className="w-36 h-10" source={require("../../../assets/logoPlaylist.png")} />
                        </View>
                        <TouchableOpacity className="flex-row flex items-start">
                            <Notification size="24" color='black' variant="TwoTone" />
                            {/* Bolinha de Notificação */}
                            {/* <View className="p-1 bg-red-500 rounded-full absolute right-1" /> */}
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View className="h-[350] mt-3">
                            <Swiper showsButtons={false} showsPagination={false} showsHorizontalScrollIndicator={false}>
                                {SwiperData.map((item, index) => (
                                    <TouchableOpacity onPress={() => goTo(item)} key={index} className="flex flex-1">
                                        <Image source={{ uri: item.imagePath }} className="w-full h-full rounded-3xl bg-cover" />
                                        {
                                            item.category == 'Promoção' ?
                                                <View className="flex absolute w-full h-full bg-slate-600/20 rounded-3xl bottom-0">
                                                    <View className="shadow-2xl absolute right-0 rounded-tr-2xl rounded-bl-2xl bg-red-600 px-6 py-1">
                                                        <Text className="text-white font-semibold text-base">{item.category}</Text>
                                                    </View>
                                                </View>
                                                :
                                                <View className="absolute flex w-full h-full bg-slate-600/20 rounded-3xl bottom-0">
                                                    <View className="absolute p-6 flex top-0 w-full h-full items-end">
                                                        <SaveNews news={item as News} />
                                                    </View>
                                                    <View className="flex absolute bottom-0 gap-y-3 rounded-b-3xl p-6 w-full">
                                                        <View className="flex items-center gap-x-2 justify-start flex-row">
                                                            <View className="shadow-2xl rounded-md bg-slate-800/70 px-4 py-0.5 transition-colors">
                                                                <Text className="text-white font-semibold text-sm">{item.category}</Text>
                                                            </View>
                                                            <View>
                                                                <Text className="text-white font-light text-xs">
                                                                    5 min de leitura
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <Text numberOfLines={3} ellipsizeMode="tail" className="text-white font-robotoSerif-medium text-xl">
                                                                {item.title}
                                                            </Text>
                                                            <View className="flex items-end">
                                                                <Text className="text-white font-robotoSerif-regular text-xs">
                                                                    {item.dateReleased}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                        }
                                    </TouchableOpacity>
                                ))}
                            </Swiper>
                        </View>
                    </View>
                </View>
                <FeedNews navigation={navigation} News={News} />
            </View>
        </ScrollView>
    )
}

export default Home;