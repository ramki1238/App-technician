import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
const  httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};
const ApiUrl="http://ijsrie.com/phpapi/api";
@Injectable({
  providedIn: 'root'
})

export class ItemProvidersService {

  states=[]
 

  constructor(private http:HttpClient,
    private loadingController:LoadingController) { }

  getStatesData(): Observable<any> {
    const dataUrl = ApiUrl+'/stateitems.php';
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  getDistrictData(): Observable<any> {
    const dataUrl = ApiUrl+'/distitems.php';
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  getCityData(): Observable<any> {
    const dataUrl = ApiUrl+'/mandalitems.php';
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  saveItemsData(ItmData): Observable<any> {
    var jsontypeData = JSON.stringify(ItmData);
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
    const dataUrl = ApiUrl+'/createitems.php';
    return this.http.post(dataUrl,jsontypeData,httpOptions);
  }
  getMainItemsStatus(usertype,dateoftravel): Observable<any> {
    let remUrl="?type="+usertype+"&&role=active&&dateoftravel="+dateoftravel;
    const dataUrl = ApiUrl+'/mainitems.php'+remUrl;
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  getUsersList(usertype,dateoftravel): Observable<UserDatabase> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
     let remUrl="?type="+usertype+"&&role=active&&dateoftravel="+dateoftravel;
    const dataUrl = ApiUrl+'/getusers.php'+remUrl;
    return this.http.get<UserDatabase>(dataUrl,{responseType: 'json'} );
  }
  getSelectedList(typeofuser,userid): Observable<UserDatabase> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
     let remUrl="?usertype="+typeofuser+"&&role=active&&senderid="+userid;
    const dataUrl = ApiUrl+'/vlrlist.php'+remUrl;
    console.log(dataUrl);
    return this.http.get<UserDatabase>(dataUrl,httpOptions);
  }
  saveSelectedItems(SelectedData): Observable<any> {
    var jsontypeData = JSON.stringify(SelectedData);
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
    const dataUrl = ApiUrl+'/selectst.php';
    return this.http.post(dataUrl,jsontypeData,httpOptions);
  }
  deleteSelectedItem(itemid): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
    const dataUrl = ApiUrl+'/updateitems.php?id='+itemid;
    console.log(dataUrl);
    return this.http.get(dataUrl,httpOptions);
  }
  saveItemRating(ItemData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
    //http://ijsrie.com/phpapi/api/review.php?itemid=2&rating=4&&reviewdesc=not
     let remUrl="?itemid="+ItemData.itemid+"&&rating="+ItemData.rating+"&&reviewdesc="+ItemData.reviewdesc;
    const dataUrl = ApiUrl+'/review.php'+remUrl;
    console.log(dataUrl);
    return this.http.get(dataUrl,httpOptions);
  }
}
