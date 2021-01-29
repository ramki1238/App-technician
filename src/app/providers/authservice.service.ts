import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonUiControlService } from './common-ui-control.service';
import *  as AppConfig from '../../app/serviceCall';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  apiUrls:any
  constructor(private commonUictrl: CommonUiControlService,
    public http: HttpClient) { 
      this.apiUrls=AppConfig.apiUrls;
    }

   /**
* @returns sending post request to send sms
*/
sendSms(smsObj): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post(this.apiUrls.api, smsObj, httpOptions)
}

/**
*  @returns sending post request to check mobile number exist or not
*/
checkNumber(numberObj): Observable<any> {
 
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
    })
  };
  let controllMethod=this.apiUrls.api+"/login.php?mobile="+numberObj.phoneno;
  return this.http.get(controllMethod, httpOptions)
}
RegistrationUser(reqObj): Observable<any> {
 
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    })
  };
  let controllMethod=this.apiUrls.api+"/create.php";
  return this.http.post(controllMethod, reqObj, httpOptions)
}




}
