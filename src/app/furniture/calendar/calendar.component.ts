import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  $counter: any
  $sheets:any;
  ngOnInit(): void {
    this.$counter = document.querySelector('.counter'),
    this.$sheets = this.$counter?.querySelectorAll('.sheet');
    this.setMonth();
    this.countStart();
  }

  getDate(): string[] {
    const today: Date = new Date();
    let dd: any = today.getDate();
    
    if (dd < 10) {
      dd = '0' + dd;
    }

    const digits: string[] = dd.toString().split('');
    
    return digits;
  }

    

   
  setMonth(): void {
      const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const d: Date = new Date();
      let monthText = document.querySelector('.month')
      if(monthText){
        monthText.textContent  =  monthNames[d.getMonth()];
      }
  }
    
    

    countInit(): void {
      this.$sheets.forEach((element: any) => {
        element.querySelector('.up').querySelector('span').textContent = '9';
        element.querySelector('.down').querySelector('span').textContent = '9';
      })
    }

    countReset(): void {
      if(this.$sheets[0].children){
        for(let sheet of this.$sheets){
          let kids = sheet.querySelectorAll('.helper');
          kids.forEach((kid: any) =>{
            sheet.removeChild(kid);
          })
        }
      }

      this.countInit();
    }

    countStart(): void {
      this.countReset();
      let index = -1
      this.$sheets.forEach((sheet: any) => {

        index++;
        console.log(index)
        let countFrom: number = 9;
        let countTo: number = Number(this.getDate()[index]);
        let up = sheet.querySelector('.up').querySelector('span');
        let down = sheet.querySelector('.down').querySelector('span');
        if(up && down){
          up.textContent = (countTo.toString());
          down.textContent = (countFrom.toString());
          for (let count: number = countFrom; count >= countTo; count--) {
            let span = document.createElement('span')
            span.textContent = `${count}`
            const $up = document.createElement('div')
            $up.className = 'helper helper-up';
            $up.style.animation = 'upflip 500ms linear ' + ((10 - count) * 100) + 'ms 1 normal forwards'
            $up.style.zIndex = `${count + 1}`;
           
            $up.appendChild(span)
  
            const $down = document.createElement('div');
            $down.className = 'helper helper-down';
            $down.style.animation = 'downflip 500ms linear ' + ((10 - count) * 100 + 500) + 'ms 1 normal forwards';
            $down.style.zIndex = `${11 - count}`;
  
            $down.appendChild(span)
  
            sheet.append($up);
            sheet.append($down);
          }



        }
        

        

      });
    }

    

    

    // $('#start').on('click', function(): void {
    //   countStart();
    // });

  


  }
