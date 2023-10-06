import useBottomTabAnimation from "../../hooks/useBottomTabAnimation";
import FeedPromotion from "../../components/FeedPromotions";
import { Promotions as DataPromotions } from "../../variables/data";

import { SearchNormal1 } from "iconsax-react-native";
import { useState } from "react";
import { TextInput, View } from "react-native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type PromotionScreenProps = {
    navigation: BottomTabNavigationProp<RootTabParamList, 'Search'>;
};

const Promotions: React.FC<PromotionScreenProps> = (props) => {

    const { navigation } = props
    const { isKeyboardOpen } = useBottomTabAnimation();
    const [searchText, setSearchText] = useState<string>('');

    return (
        <View className={`bg-background-light flex flex-1 pt-3 transition-transform ease-in delay-0 px-5 items-center ${!isKeyboardOpen && 'pb-52'}`}>
            <View className="flex-row rounded-xl bg-[#215091] items-center justify-center mt-3">
                <View className="pl-2">
                    <SearchNormal1 size={25} color='white' variant='Bulk' />
                </View>
                <TextInput
                    className="flex-1 bg-[#215091] p-2 rounded-r-xl text-xs text-white"
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholderTextColor='white'
                    placeholder="Pesquise por título ou nível..."
                />
            </View>
            <FeedPromotion navigation={navigation} Promotions={DataPromotions} />
        </View>

    )
}

export default Promotions