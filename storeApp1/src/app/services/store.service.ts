import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { LocalService } from './storage/local.service'
@Injectable()
export class StoreService {  
  private companyObs = new Subject();
  companyObs$ = this.companyObs.asObservable();  
private movieObs = new Subject();
private behavObs = new BehaviorSubject<Array<string>>([]);
behavObs$ = this.behavObs.asObservable();
movieObs$ = this.movieObs.asObservable();

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig,
    private localSer: LocalService
  ) {
  
  console.log(this.movieObs)

  }
  
  selectMultiCheck(moviesIds: string[]){

   // this.checkMovies = this.checkMovies.filter( movie => movie.checked)
    this.behavObs.next(moviesIds);
  }
 
   getStoreData(): Observable<any>{
        return this.http.get(this.config.apiEndPoint+"/location", {withCredentials: true});          
  }

  updateStoreRecord(obj: any){
    return this.http.put(this.config.apiEndPoint+"/location/"+obj._id, {withCredentials: true});  
  }
  
}
