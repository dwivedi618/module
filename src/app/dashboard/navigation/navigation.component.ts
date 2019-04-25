import { Component, OnInit ,EventEmitter , Output , Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isOpen = true;

  @Output() sidenavToggle = new EventEmitter<void>();
  

  

  constructor() { }

  ngOnInit() {
  }
  onToggleSidenav(){
    this.isOpen = !(this.isOpen);
    this.sidenavToggle.emit();
    
    
    


  }

}
