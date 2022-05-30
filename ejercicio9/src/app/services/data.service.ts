import { Injectable } from '@angular/core';
import { CountryI, CityI } from '../models/models.interface';



@Injectable()
export class DataService {
  private countries: CountryI[] =[
    {
      id: 1,
      name: "Brazil"
    },

    { id: 2,
      name: "España"

    },

    { id: 3,
      name: "Peru"

    },

    { id: 4,
      name: "Argentina"

    },

    { id: 5,
      name: "Republica Dominicana"

    },
  ];

  private cities: CityI[] = [

  {
    id: 1,
    countryId: 1,
    name:"Sao Paulo",
  },

  {
    id: 2,
    countryId: 1,
    name:"Brasilia",
  },

  {
    id: 3,
    countryId: 2,
    name:"Barcelona",
  },

  {
    id: 4,
    countryId: 2,
    name:"Madrid",
  },

  {
    id: 5,
    countryId: 3,
    name:"Lima",
  },

  {
    id: 6,
    countryId: 3,
    name:"Trujillo",
  },


  {
    id: 7,
    countryId: 4,
    name:"Buenos Aires",
  },

  {
    id: 8,
    countryId: 4,
    name:"La Plata",
  },

  {
    id: 9,
    countryId: 5,
    name:"La Romana",
  },

  {
    id: 10,
    countryId: 5,
    name:"Santiago",
  },
  ];

  getCountries(): CountryI[]{
    return this.countries;

  }
  getCities(): CityI[]{
    return this.cities;
  }
  
}
