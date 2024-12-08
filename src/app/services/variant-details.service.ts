import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const VARIANT_URL =  `${environment.tenMsBaseUrl}/variants'`

@Injectable({
  providedIn: 'root'
})
export class VariantDetailsService {

  constructor(private http: HttpClient) { }

  getVariantDetails () {
    this.http.get(VARIANT_URL);
  }
}
