import { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native"
import { NavigationProp } from "@react-navigation/native";
import { tierPromotions } from "../../variables/data";
import { formatDate } from '../../utils/methods';
import useBottomTabAnimation from '../../hooks/useBottomTabAnimation';

type FeedPromotionProps = {
    navigation: NavigationProp<RootTabParamList>;
    Promotions: Promotion[]
};

const FeedPromotion: React.FC<FeedPromotionProps> = ({ navigation, Promotions }) => {

    const [tier, setTier] = useState('Todos')
    const [data, setData] = useState(Promotions)
    const { isKeyboardOpen } = useBottomTabAnimation();
    const setPromotionsFeed = (item: string) => {
        setTier(item)
        if (item != 'Todos') {
            return setData(Promotions.filter(e => e.Level.name === item))
        }
        setData(Promotions)
    }

    return (
        <>
            <View>
                <View className='max-h-12'>
                    <ScrollView showsHorizontalScrollIndicator={false} className="py-3 flex w-full gap-x-2 shadow-black shadow-2xl" horizontal={true}>
                        {tierPromotions.map((item, index) => (
                            <TouchableOpacity key={index} disabled={item.name == tier} onPress={() => setPromotionsFeed(item.name)} className={`${tier == item.name && 'bg-[#215091]'}  shadow-2xl rounded-md px-4 py-0.5 transition-colors `}>
                                <Text className={`${tier == item.name ? 'text-white font-bold' : 'font-medium text-gray-300'}`}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
                    <View className='flex gap-y-2 mb-2'>
                        {data.map((promo, index) => {
                            return (
                                <TouchableOpacity key={index} className="flex flex-row shadow-black relative shadow-2xl">
                                    <Image source={{ uri: promo.imagePath }} className="w-full h-44 rounded-xl z-0" />
                                    <View className='absolute px-2 py-1 bg-red-500 right-0 rounded-tr-xl rounded-bl-xl'>
                                        <Text className='text-white font-bold text-sm'>
                                            Promoção
                                        </Text>
                                    </View>
                                    {promo.dateReleased && <View className="absolute flex flex-row items-center bottom-0 right-0 bg-slate-800/60 rounded-br-xl rounded-tl-xl px-3 py-1.5">
                                        <Text className="text-xs font-robotoSerif-regular text-white">{promo.dateReleased}</Text>
                                    </View>}
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default FeedPromotion