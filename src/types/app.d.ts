/// <reference types="nativewind/types" />

type RootTabParamList = {
    Home: undefined;
    Search: undefined;
    Profile: undefined;
    Settings: undefined;
    SheetNews: { news: News };
    SheetPromotion: undefined;
};

type News = {
    id: int;
    title: string;
    category: string;
    imagePath: string;
    dateReleased: string;
    timeToRead?: string;
};

type Promotion = {
    id: int;
    title: string;
    imagePath: string;
    Level: Level
    dateReleased?: string;
}

interface UserPreferences {
    themeReading: ThemeReading
    savedNews: News[];
    firstAccess: boolean;
    darkMode: boolean;
}

interface ThemeReading {
    background: string;
    brightest: number;
    fontSize: number;
}

type Level = {
    id: int,
    name: string,
    imagePath: string
}