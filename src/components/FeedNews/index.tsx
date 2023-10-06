import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { NavigationProp } from "@react-navigation/native";

import { categoryNews } from "../../variables/data";
import { formatDate } from "../../utils/methods";

type FeedNewsProps = {
    navigation: NavigationProp<RootTabParamList>;
    News: News[]
};

const FeedNews: React.FC<FeedNewsProps> = ({ navigation, News }) => {

    const [category, setCategory] = useState('Novidades')
    const [data, setData] = useState(News)

    const setCategoryFeed = (item: string) => {
        setCategory(item)
        if (item != 'Novidades') {
            return setData(News.filter(e => e.category === item))
        }
        setData(News)
    }

    useEffect(() => {
        setData(News)
    }, [News])


    return (
        <View className="flex">
            <View>
                <View>
                    <ScrollView showsHorizontalScrollIndicator={false} className="py-3 flex gap-x-2 shadow-black shadow-2xl" horizontal={true}>
                        {categoryNews.map((item, index) => (
                            <TouchableOpacity key={index} disabled={item.name == category} onPress={() => setCategoryFeed(item.name)} className={`${category == item.name && 'bg-[#215091]'}  shadow-2xl rounded-md px-4 py-0.5 transition-colors `}>
                                <Text className={`${category == item.name ? 'text-white font-bold' : 'font-medium text-gray-300'}`}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {data.map((news, index) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('SheetNews', { news })} key={index} className="my-1 flex flex-row rounded-xl bg-slate-300/50 shadow-black shadow-2xl">
                                <Image source={{ uri: news.imagePath }} className="w-24 h-24 m-3 rounded-xl" />
                                <View className="items-start gap-y-2 pt-5 flex pr-5 flex-1">
                                    <View className="flex items-center gap-x-2 flex-row">
                                        <View className="px-2 py-0.5 bg-slate-600 rounded-md">
                                            <Text className="text-xs text-white font-bold">{news.category}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-black font-light text-[10px]">
                                                {news.timeToRead} de leitura
                                            </Text>
                                        </View>
                                    </View>
                                    <View className="mr-1">
                                        <Text numberOfLines={2} ellipsizeMode="tail" className="text-xs text-black font-robotoSerif-medium">
                                            {news.title}
                                        </Text>
                                    </View>
                                    <View className="flex w-full items-end">
                                        <Text className="text-[10px] font-robotoSerif-regular text-neutral-800">{formatDate(news.dateReleased)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default FeedNews