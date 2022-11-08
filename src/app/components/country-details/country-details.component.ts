import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/Country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  public countryFlag:string|null = '';
  public country:Country = {} as Country;
  public errorMessage:string|undefined = undefined;
  

  constructor(private activatedRoute:ActivatedRoute,
              private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.countryFlag = param.get('flag');
    });

    this.countryService.getAllCountries().subscribe((data)=>{
      let country:Country[] = data;
      let selectedCountry = country.find(country => country.flag === this.countryFlag)
      if(selectedCountry){
        this.country = selectedCountry;
      }
    });
  }

  public isNotEmpty(){
    return Object.keys(this.country).length > 0;
  }

}
