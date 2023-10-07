import {
    ArrowRight2,
    Award,
    BookSaved,
    DiscountShape,
    Global,
    Moon,
    Security,
    Warning2,
} from "iconsax-react-native";
import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

const Settings: React.FC = () => {
    const [isDarkSettingsVisible, setDarkSettingsVisible] = useState(false);

    const showDarkSettings = () => {
        setDarkSettingsVisible(true);
    };

    const closeDarkSettings = () => {
        setDarkSettingsVisible(false);
    };

    return (
        <>
            <View className="flex h-screen pb-[170px] relative pt-3 px-5 bg-background-light">
                <ScrollView className=" " showsVerticalScrollIndicator={false}>
                    <View className="bg-white  shadow-black rounded-xl w-full flex py-5 justify-start">
                        <View className="flex items-center justify-center gap-y-2">
                            {/* <View className="bg-black/20 p-4 mb-3 rounded-full">
                              <User size="50" className="text-white" variant="Bulk" />
                          </View> */}
                            {/* <View className="w-full p-1 rounded-full max-w-[200px] bg-black/60" />
                              <View className="w-full p-1 rounded-full max-w-[120px] bg-black/60" /> */}
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                }}
                                className="w-20 h-20 rounded-full"
                            />
                            <View className="flex justify-center items-center">
                                <View>
                                    <Text className="text-lg font-bold text-black">
                                        Ricardo Monteiro
                                    </Text>
                                </View>
                                <View>
                                    <Text className="text-md font-normal text-gray-300">
                                        rick.dev@gmail.com
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="mt-5 flex justify-center items-center">
                            {/* <TouchableOpacity className="flex justify-center w-full rounded-md items-center py-1.5 bg-neutral-600 max-w-[150px]">
                              <Text className="text-white font-extrabold text-sm">
                                  Login/Cadastro
                              </Text>
                          </TouchableOpacity> */}
                            <TouchableOpacity className="flex flex-row justify-center gap-x-2 w-full max-w-[130px] rounded-md items-center py-1.5 bg-[#215091]">
                                <View>
                                    <Text className="text-white font-extrabold text-sm">
                                        Editar Perfil
                                    </Text>
                                </View>
                                <View>
                                    <ArrowRight2 size="22" color="#ffff" variant="Bulk" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="w-full gap-y-2 mt-2">
                        <View className="w-full shadow-xl shadow-black">
                            <View className="bg-neutral-200 p-2 rounded-t-md">
                                <Text className="text-gray-300 text-xs font-bold">
                                    MEUS ITENS
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                className="bg-white py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <BookSaved size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">
                                            Notícias Salvas
                                        </Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                className="bg-white rounded-b-md py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <DiscountShape size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">Promoçõs</Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View className="w-full shadow-xl shadow-black">
                            <View className="bg-neutral-200 p-2 rounded-t-md">
                                <Text className="text-gray-300 text-xs font-bold">OUTROS</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                className="bg-white py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <Award size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">
                                            Gerenciar Nível
                                        </Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => showDarkSettings()}
                                className="bg-white py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <Moon size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">Dark Mode</Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                className="bg-white py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <Global size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">Redes Sociais</Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                className="bg-white py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <Warning2 size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">FAQ Suporte</Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                className="bg-white rounded-b-md py-2 px-3"
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-x-2">
                                        <Security size="25" color="#0009" variant="Bulk" />
                                        <Text className="text-sm font-semibold">
                                            Política de Privacidade
                                        </Text>
                                    </View>
                                    <View>
                                        <ArrowRight2 size="25" color="#0006" variant="Bulk" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Modal
                backdropTransitionOutTiming={0}
                onBackdropPress={closeDarkSettings}
                onSwipeComplete={closeDarkSettings}
                onBackButtonPress={closeDarkSettings}
                isVisible={isDarkSettingsVisible}
                swipeDirection="down"
                className="m-0 flex-1 justify-end"
            >
                <View className="rounded-t-3xl bg-background-light transition-colors delay-100 ease-in flex h-[60%]">
                    <View className="w-full absolute top-2 flex justify-center items-center">
                        <View className="p-[2px] bg-gray-300 w-7 rounded-full" />
                    </View>
                    <View className="mt-5 p-3 w-full">
                        <Text className="text-xl font-bold">Modo escuro</Text>
                    </View>
                    <View className="p-[0.2px] bg-gray-200" />
                    <View className="p-5 flex flex-col gap-y-4">
                        <TouchableOpacity>
                            <Text className="text-xl font-normal">Desativado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-xl font-normal">Ativado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-xl font-normal">
                                Usar as configurações do sistema
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="p-[0.2px] bg-gray-200" />
                    <View className="p-3 w-full">
                        <Text className="text-xl font-bold">Tema escuro</Text>
                    </View>
                    <View className="p-5 flex flex-col gap-y-4">
                        <TouchableOpacity>
                            <Text className="text-xl font-normal">Desativado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-xl font-normal">Ativado</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default Settings;
