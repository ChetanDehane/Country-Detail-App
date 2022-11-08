import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  public countries:Country[] = [] as Country[];
  public errorMessage:string | undefined = undefined;
  
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data)=>{
      this.countries = data;
    },(error)=>{
      this.errorMessage = error;
    });
  }

}
