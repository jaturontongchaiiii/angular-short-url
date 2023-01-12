import { Component } from '@angular/core';
import { ShortProvider } from '../providers/Short';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'short-url v2';

  array:any = [];
  body:any = {
    url: '',
  }

  constructor(private shortProvider: ShortProvider) {
    this.Get_urls();
  }

  Create_short_url() {
    console.log(this.body);
    this.shortProvider.Create_short_url(this.body).then((res:any) => {
      console.log(res);
      if (res.status) {
        this.Get_urls();
        alert(res.message);
      } else {
        alert(res.message);
      }
    })
  }

  Get_urls() {
    this.shortProvider.Get_urls({}).then((res:any) => {
      console.log(res);
      if (res.status) {
        this.array = res.array_short_url;
      } else {
        alert(res.message);
      }
    })
  }
}
