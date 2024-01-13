import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryCurrencyService {

  constructor() { }

  fetchCurrency(countryCode: any) {
    return fetch('https://api.example.com/currencies') // Replace with the actual API endpoint
      .then(response => response.json())
      .then(data => {
        const currency = data[countryCode];
        if (currency) {
          return currency;
        } else {
          throw new Error('Currency not found');
        }
      });
  }
}
