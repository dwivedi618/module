import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { UploadComponent } from 'src/app/upload/upload.component';



@Component({
  selector: 'app-slidenav-list',
  templateUrl: './slidenav-list.component.html',
  styleUrls: ['./slidenav-list.component.css']
})
export class SlidenavListComponent implements OnInit {

  constructor(private _bottomSheet : MatBottomSheet ) { }
  openBottomSheet(): void {
    this._bottomSheet.open(UploadComponent);
  }
  
  


  ngOnInit() {
  }
  


}
