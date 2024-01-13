import { Component, OnInit } from '@angular/core';
import {CountryCurrencyService} from "../../services/country-currency/country-currency.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  menuIsClicked = false;
  selectedPaymentMethod = true;
  currencyInput: any;

  constructor(private countryCurrencyService: CountryCurrencyService) {
    const countrySelect: any = document.getElementById('countrySelect');
    const currencyInput: any = document.getElementById('currencyInput');

    // countrySelect.addEventListener('change', function() {
    //   const selectedCountry = countrySelect.value;
    // //
    //   if (selectedCountry) {
    //     countryCurrencyService.fetchCurrency(selectedCountry)
    //       .then(currency => {
    //         currencyInput.value = currency;
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   } else {
    //     currencyInput.value = '';
    //   }
    // });
  }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.menuIsClicked = !this.menuIsClicked;
  }

  selectPaymentMethod(event: any) {
    const selectedValue = event.target.value;

    if (selectedValue === '1') {
      this.selectedPaymentMethod = true;
    } else if (selectedValue === '2') {
      this.selectedPaymentMethod = false
    } else {
    }
  }

  selectCountryAndCurrency(event: any) {
    const selectedCountry = event.target.value;
    if (selectedCountry) {
      this.countryCurrencyService.fetchCurrency(selectedCountry)
        .then(currency => {
          this.currencyInput.value = currency;
          console.log(currency)
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      this.currencyInput.value = '';
    }  }
}
