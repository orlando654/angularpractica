export interface CountryI{
  id:number
  name:string;
}

export interface CityI{
  id:number;
  countryId:number;
  name:string;
}

export interface Tipe3I{
  id:number;
  cityId:number;
  name:string;
}