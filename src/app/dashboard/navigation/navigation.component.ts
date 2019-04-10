import { Component, OnInit ,EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit() {
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();

  }

}
