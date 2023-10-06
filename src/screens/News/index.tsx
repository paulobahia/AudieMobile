import { SearchNormal1 } from "iconsax-react-native";
import { useState } from "react";
import { TextInput, View } from "react-native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import useBottomTabAnimation from "../../hooks/useBottomTabAnimation";
import { News as NewsData } from "../../variables/data";
import FeedNews from "../../components/FeedNews";

type SearchScreenProps = {
  navigation: BottomTabNavigationProp<RootTabParamList, 'Search'>;

};

const News: React.FC<SearchScreenProps> = (props) => {

  const { navigation } = props
  const { isKeyboardOpen } = useBottomTabAnimation();

  const [searchText, setSearchText] = useState<string>('');
  const [filteredNews, setFilteredNews] = useState<News[]>(NewsData);

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filtered = NewsData.filter(
      (news) =>
        news.title.toLowerCase().includes(text.toLowerCase()) ||
        news.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  return (
    <View className={`bg-background-light flex flex-1 pt-3 px-5 items-center ${!isKeyboardOpen && 'pb-52'}`}>
      <View className="flex-row rounded-xl bg-[#215091] items-center justify-center mt-3">
        <View className="pl-2">
          <SearchNormal1 size={25} color='white' variant='Bulk' />
        </View>
        <TextInput
          className="flex-1 bg-[#215091] p-2 rounded-r-xl text-xs text-white"
          onChangeText={handleSearch}
          value={searchText}
          placeholderTextColor='white'
          placeholder="Pesquise pelo título ou pela categorias..."
        />
      </View>
      <FeedNews navigation={navigation} News={filteredNews} />
    </View>
  )
}

export default News