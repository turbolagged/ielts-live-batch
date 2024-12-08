import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
const VARIANT_URL =  `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch/variants?lang=bn`

@Injectable({
  providedIn: 'root'
})
export class VariantDetailsService {

  constructor(private http: HttpClient) { }

  getVariantDetails () {
    return this.http.get(VARIANT_URL);
  }
}
