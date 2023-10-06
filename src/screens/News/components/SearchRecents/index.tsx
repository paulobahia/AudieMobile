import { X } from "lucide-react-native"
import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native"


export const SearchRecents: React.FC = () => {

    const { colorScheme } = useColorScheme();

    return (
        <View className="flex mt-3 w-full">
            <View className="flex flex-row justify-between">
                <Text className="text-background-dark font-bold text-sm ">
                    Pesquisas recentes
                </Text>
                <TouchableOpacity>
                    <Text className="text-blue-600">
                        Ver tudo
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="h-[50%] w-full justify-center gap-y-3 mt-1 flex">
                <TouchableOpacity className="flex items-center flex-row justify-between">
                    <Text className="text-xs font-normal text-gray-500">Twitter X</Text>
                    <TouchableOpacity>
                        <X size={18} color={colorScheme === 'dark' ? 'grey' : 'black'} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center flex-row justify-between">
                    <Text className="text-xs font-normal text-gray-500">oppenheimer</Text>
                    <TouchableOpacity>
                        <X size={18} color={colorScheme === 'dark' ? 'grey' : 'black'} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center flex-row justify-between">
                    <Text className="text-xs font-normal text-gray-500">twitter x</Text>
                    <TouchableOpacity>
                        <X size={18} color={colorScheme === 'dark' ? 'grey' : 'black'} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center flex-row justify-between">
                    <Text className="text-xs font-normal text-gray-500">copa feminina</Text>
                    <TouchableOpacity>
                        <X size={18} color={colorScheme === 'dark' ? 'grey' : 'black'} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center flex-row justify-between">
                    <Text className="text-xs font-normal text-gray-500">Presidente Lula</Text>
                    <TouchableOpacity>
                        <X size={18} color={colorScheme === 'dark' ? 'grey' : 'black'} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
} 