import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Animated, Image, Text } from 'react-native';
import { Setting2, Home, DiscountShape, Notepad2, PlayCircle } from 'iconsax-react-native';
import useBottomTabAnimation from '../../hooks/useBottomTabAnimation';
import Modal from "react-native-modal";
import { useState } from "react";

export function BottomTab(props: BottomTabBarProps) {
    const { navigation, state } = props
    const imageURL = 'https://1.bp.blogspot.com/-cae5mWLe4Jg/VazohfjE8BI/AAAAAAAA21o/3c6VBxw07B8/s1600/daniblackdiluviocapa.png'

    const [isShowPlayer, setShowPlayer] = useState(false);

    const handlerPlayer = () => {
        setShowPlayer(!isShowPlayer);
    };

    type RouteName = 'Home' | 'Promotions' | 'Live' | 'News' | 'Settings' | 'Play';

    const { translateValue } = useBottomTabAnimation();

    const getIconComponent = (routeName: RouteName, isCurrentRoute: boolean) => {
        switch (routeName) {
            case 'Home':
                return <Home size={30} color={isCurrentRoute ? '#215091' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Promotions':
                return <DiscountShape size={30} color={isCurrentRoute ? '#215091' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Play':
                return <PlayCircle className="absolute -top-8" size={65} color={isCurrentRoute ? '#215091' : 'grey'} variant={'Bold'} />;
            case 'News':
                return <Notepad2 size={30} color={isCurrentRoute ? '#215091' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Settings':
                return <Setting2 size={30} color={isCurrentRoute ? '#215091' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Animated.View style={{ transform: [{ translateY: translateValue }] }} className="absolute border-gray-100/50 bg-white bottom-2 left-3 right-3 rounded-2xl h-36 shadow-2xl shadow-slate-500">
                <TouchableOpacity onPress={() => handlerPlayer()} activeOpacity={1} className="w-full h-20 px-3 mb-1 flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                        <View >
                            <Image className="w-12 h-12 rounded-md transition-all ease-in" source={{ uri: imageURL }} />
                        </View>
                        <View className="ml-2">
                            <Text className="text-sm font-medium">Dani Black - Dilúvio (Oficial)</Text>
                            <Text className="text-xs font-normal text-gray-500">Música</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <PlayCircle size="35" color="#0009" variant="Bulk" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View className="flex-1 border-t border-gray-100/50 justify-around h-16 flex-row items-center">
                    {state.routes.map((route, index) => {
                        const isCurrentRoute = state.index === index;
                        return (
                            <View className="relative" key={route.key}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(route.name)}
                                    className="items-center justify-center flex-1"
                                >
                                    {getIconComponent(route.name as RouteName, isCurrentRoute)}
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </Animated.View>
            <Modal backdropTransitionOutTiming={0} onBackdropPress={handlerPlayer} onSwipeComplete={handlerPlayer} onBackButtonPress={handlerPlayer} isVisible={isShowPlayer} swipeDirection="down" className="m-0">
                <View className='bg-background-light gap-y-3 flex flex-1 p-5 h-[100%] justify-center items-center'>
                    <Image className="w-72 h-72 flex rounded-md transition-all ease-in" source={{ uri: imageURL }} />
                    <View className="flex justify-center items-center">
                        <Text className="text-xl font-semibold text-gray-800">Dani Black</Text>
                        <Text className="text-sm font-normal text-gray-500">Dilúvio (Oficial)</Text>
                    </View>
                </View>
            </Modal>
        </>
    );
};