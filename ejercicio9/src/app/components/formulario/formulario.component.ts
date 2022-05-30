import { Component, OnInit } from '@angular/core';
import { CountryI, CityI, Tipe3I } from 'src/app/models/models.interface';
import { DataService } from 'src/app/servies/data.service';  


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers:[DataService]
})
export class FormularioComponent implements OnInit {

  public selectedCountry: CountryI={id: 0 , name:''}
  // public selectedsitios: CityI={id: 0 , name:''}
  public countries!: CountryI[];
  public cities!: CityI[];
  public tipes3!:Tipe3I[];

  constructor( private dataSvc: DataService) { }

  ngOnInit(): void {
    this.countries = this.dataSvc.getCountries();
  }

  onSelect(id:any):void{
    this.cities = this.dataSvc.getCities().filter(item => item.countryId == id)        
  }

  nivel3(id:any):void{
    this.tipes3 = this.dataSvc.getTipe3I().filter(item => item.cityId == id)        
  }

}
 