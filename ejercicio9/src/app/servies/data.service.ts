import { Injectable } from '@angular/core';
import { CountryI,CityI,  Tipe3I } from '../models/models.interface';

@Injectable()

export class DataService {

  private countries : CountryI[]=[
    {
      id:1,
      name:'Sopa'
    },
    {
      id:2,
      name:'Chatarra'
    },
    {
      id:3,
      name:'Postre'
    },
    {
      id:4,
      name:'Segundo'
    }
  ]
  private cities: CityI[]=[
    
    {
      id:1,
      countryId:1,
      name:'Pollo'
    },
    {
      id:2,
      countryId:1,
      name:'Verduras'
    },
    {
      id:3,
      countryId:1,
      name:'Fideo'
    },
    {
      id:4,
      countryId:1,
      name:'Arroz'
    },
    {
      id:5,
      countryId:2,
      name:'Hamburguesa'
    },
    {
      id:6,
      countryId:2,
      name:'Pizza'
    },
    {
      id:7,
      countryId:2,
      name:'Salchipapa'
    },
    {
      id:8,
      countryId:3,
      name:'Chantillin'      
    },
    {
      id:9,
      countryId:3,
      name:'Fruta'
    },
    {
      id:10,
      countryId:3,
      name:'Gelatina'
    },
    {
      id:11,
      countryId:3,
      name:'Budin'
    },
    {
      id:12,
      countryId:3,
      name:'Pastel'
    },
    {
      id:13,
      countryId:3,
      name:'cupcake'
    },
    {
      id:14,
      countryId:4,
      name:'Sajta de Pollo'
    },
    {
      id:15,
      countryId:4,
      name:'Pique Macho'
    },
    {
      id:16,
      countryId:4,
      name:'Chuleta de Res'
    },
    {
      id:17,
      countryId:4,
      name:'Lasagña'
    },
    {
      id:18,
      countryId:4,
      name:'Albondigas'
    }
  ]
  private tipes3: Tipe3I[]=[
    {
      id:18,
      cityId:1,
      name:'Pollo...'
    },
    {
      id:19,
      cityId:1,
      name:'Papa...'
    },
    {
      id:20,
      cityId:1,
      name:'Arroz...'
    },
    {
      id:21,
      cityId:2,
      name:'Verduras'
    },
    {
      id:22,
      cityId:2,
      name:'Arroz'
    },
    {
      id:23,
      cityId:2,
      name:'Papa'
    },
    {
      id:24,
      cityId:2,
      name:'Carne Roja'
    },
    {
      id:25,
      cityId:3,
      name:'Fideo'
    },
    {
      id:26,
      cityId:3,
      name:'Papa'
    },
    {
      id:27,
      cityId:3,
      name:'Carne Roja'
    },
    {
      id:28,
      cityId:4,
      name:'Arroz'
    },
    {
      id:29,
      cityId:4,
      name:'Papa'
    },
    {
      id:30,
      cityId:4,
      name:'Carne Roja'
    },
    {
      id:31,
      cityId:4,
      name:'Verduras'
    },
    {
      id:32,
      cityId:5,
      name:'Carne de Res'
    },
    {
      id:33,
      cityId:5,
      name:'Pan'
    },
    {
      id:34,
      cityId:5,
      name:'Tomate'
    },
    {
      id:35,
      cityId:5,
      name:'Cebolla'
    },
    {
      id:36,
      cityId:5,
      name:'Lechuga'
    },
    {
      id:37,
      cityId:5,
      name:'Mayonesa'
    },
    {
      id:38,
      cityId:5,
      name:'Ketchup'
    },
    {
      id:39,
      cityId:5,
      name:'Mostaza'
    },
    {
      id:40,
      cityId:6,
      name:'Tomate'
    },
    {
      id:41,
      cityId:6,
      name:'Carne de Res'
    },
    {
      id:42,
      cityId:6,
      name:'Queso'
    },
    {
      id:43,
      cityId:7,
      name:'Salchicha'
    },
    {
      id:44,
      cityId:7,
      name:'Papas'
    },
    {
      id:45,
      cityId:7,
      name:'Mayonesa'
    },
    {
      id:46,
      cityId:7,
      name:'Ketchup'
    },
    {
      id:47,
      cityId:7,
      name:'Mostaza'
    },
    {
      id:48,
      cityId:8,
      name:'Leche'
    },
    {
      id:49,
      cityId:8,
      name:'Platano'
    },
    {
      id:50,
      cityId:8,
      name:'Gelatina'
    },
    {
      id:51,
      cityId:9,
      name:'Platano'
    },
    {
      id:52,
      cityId:9,
      name:'Naranja'
    },
    {
      id:52,
      cityId:9,
      name:'Mandarina'
    },
    {
      id:53,
      cityId:9,
      name:'Piña'
    },
    {
      id:54,
      cityId:9,
      name:'Frutilla'
    },
    {
      id:55,
      cityId:10,
      name:'Sabor Frutilla'
    },
    {
      id:56,
      cityId:10,
      name:'Sabor Naranja'
    },
    {
      id:57,
      cityId:11,
      name:'Sabor Menta'
    },
    {
      id:58,
      cityId:11,
      name:'Chocolate'
    },
    {
      id:59,
      cityId:11,
      name:'Leche'
    },

    {
      id:60,
      cityId:11,
      name:'Queso'
    },
    {
      id:61,
      cityId:12,
      name:'Crema'
    },
    {
      id:62,
      cityId:12,
      name:'Chocolate'
    },
    {
      id:63,
      cityId:12,
      name:'Frutilla'
    },
    {
      id:64,
      cityId:12,
      name:'Durazno'
    },
    {
      id:65,
      cityId:12,
      name:'Helado'
    },
    {
      id:66,
      cityId:13,
      name:'Chocolate'
    },
    {
      id:67,
      cityId:13,
      name:'Frambuesa'
    },
    {
      id:68,
      cityId:13,
      name:'Zarzamora'
    },
    {
      id:69,
      cityId:13,
      name:'Cereza'
    },
    {
      id:70,
      cityId:13,
      name:'Platano'
    },
    {
      id:71,
      cityId:14,
      name:'Pollo'
    },
    {
      id:72 ,
      cityId: 14,
      name:'Papa Cocida '
    },
    {
      id:73 ,
      cityId:14 ,
      name:'Tunta '
    },
    {
      id:74 ,
      cityId:14 ,
      name:'Tomate'
    },
    {
      id:75 ,
      cityId:14 ,
      name:'Tomate '
    },
    {
      id:76 ,
      cityId:14 ,
      name:'Cebolla '
    },
    {
      id:77 ,
      cityId:14 ,
      name:'Arroz '
    },
    {
      id:78 ,
      cityId:15 ,
      name:'Carne de Res '
    },
    {
      id:79 ,
      cityId:15 ,
      name:'Papas Fritas'
    },
    {
      id:80 ,
      cityId:15 ,
      name:'HuevoCocido '
    },
    {
      id:81 ,
      cityId:15 ,
      name:'Tomate '
    },
    {
      id:82 ,
      cityId:15 ,
      name:'Cebolla '
    },
    {
      id:83 ,
      cityId:15 ,
      name:'Morrón '
    },
    {
      id:84 ,
      cityId:15 ,
      name:'Salchicha '
    },
    {
      id:85 ,
      cityId:16 ,
      name:'Chuleta de Res '
    },
    {
      id:86 ,
      cityId:16 ,
      name:'Arroz '
    },
    {
      id:87 ,
      cityId:16 ,
      name:'Papa cocida '
    },
    {
      id:88 ,
      cityId:16 ,
      name:'Ensalada '
    },
    {
      id:89 ,
      cityId:17 ,
      name:'Carne de Res '
    },
    {
      id:90 ,
      cityId:17 ,
      name:'Tomate '
    },
    {
      id:91 ,
      cityId:17 ,
      name:'Cebolla '
    },
    {
      id:92 ,
      cityId:17 ,
      name:'Queso '
    },
    {
      id:93 ,
      cityId:18 ,
      name:'Carne de Res '
    },
    {
      id:94 ,
      cityId:18 ,
      name:'Tallarin '
    },
    {
      id:95 ,
      cityId:18 ,
      name:'Queso '
    },
    {
      id:96 ,
      cityId:18 ,
      name:'Papa en Rodajas'
    },
  ]

   plato = {
     ingrediente1:'',
     ingrediente2:'',
     ingrediente3:''
   }
   listaMosrtrar= [
     
   ]
  getCountries(): CountryI[]{
    return this.countries;
    this.listaMosrtrar.push()
    console.log(this.countries);
    
  }

  getCities():CityI[]{
    return this.cities;
  }

  getTipe3I():Tipe3I[]{
    return this.tipes3;
  }

}
