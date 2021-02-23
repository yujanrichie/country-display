export interface CountryInfo
{
    alphaCode: string;
    flagURL: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomains: string[];
    currencies: CurrencyInfo[];
    languages: LanguageInfo[];
    borders: string[];
}

export interface CurrencyInfo
{
    code: string;
    name: string;
    symbol: string;
}

export interface LanguageInfo
{
    name: string;
    nativeName: string;
}