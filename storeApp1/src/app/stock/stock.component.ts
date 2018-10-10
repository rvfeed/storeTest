import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, Subscription } from 'rxjs';
type StoreData = {
  _id: string;
  SKU: number;
  NAME: string;
  LOCATION: string;
  DEPARTMENT:  string;
  CATEGORY: string;
  SUBCATEGORY: string;
}
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  settings = {
    columns: {
      SKU: {
        title: 'SKU'
      },
      NAME: {
        title: 'NAME'
      },
      LOCATION: {
        title: 'LOCATION'
      },
      DEPARTMENT:{
        title: 'DEPARTMENT'
      },
      CATEGORY: {
        title: 'CATEGORY'
      },
      SUBCATEGORY:{
        title: 'SUBCATEGORY'
      }
    },
    mode:'external',
        
    actions: {
        delete:false,
        add:false,
        edit:true,
        update: true
    }
    
  };
  data = [];
  source: LocalDataSource;
  updateSource: Subscription;
  constructor(private storeSer: StoreService) {

   }

  ngOnInit() {
    this.storeSer.getStoreData().subscribe( (data: {result: StoreData[]}) =>{
      this.data = data.result;
      this.source = new LocalDataSource(this.data)
    })
  
  }
  getDiffObject(a: StoreData, b: StoreData){
    if(typeof a != 'object' || typeof b != 'object'){
      // TODO: implement exceptions
     return false;
    }

    let temp = {};
    for(let key in a){
      if(a[key] != b[key]){
        temp[key] = b[key];
      }
    }
    return temp;
  }
  edit(e){
    console.log("gg", this.data[e.index]);
    e.isInEditing = true;
    if(this.updateSource){
      this.updateSource.unsubscribe();
    }
     this.updateSource = this.source
                                  .onUpdated()                                  
                                  .subscribe( (updatedData: StoreData) => {
                                        this.getDiffObject(this.data[e.index], updatedData)
                                  });
  }

  ngOnDestroy(){
    this.updateSource.unsubscribe();
  }

}
