import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent implements OnInit{
  @ViewChild('Window')window: ElementRef | undefined;
  open:boolean = false;
  constructor(){}
  ngOnInit(): void {

  }
 openCloseWindow(){
  this.open = !this.open;
  if(this.window){
    this.window.nativeElement.src = this.open?'../../../assets/images/windowOpen.svg':'../../../assets/images/window.svg'
  }
 }
}
