import { ApiEndPoint } from 'src/app/domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from './../shared/http/rest-client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getWeather(lat: any, lon: any): Observable<any> {
    let params = { lat: lat, lon: lon };
    return null;//this.get(ApiEndPoint.WEATHER.READ, params);
  }

}
