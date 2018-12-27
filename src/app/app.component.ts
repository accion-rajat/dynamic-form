import { Component } from '@angular/core';
import {NewForm} from './new-form';
import {UrlItem} from './url-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

urlItems = [];
model = new NewForm('', '', '' , this.urlItems);
submitted = false;
methodType = ['POST', 'GET',
'PUT', 'DELETE'];
addItem() {
  const item = new UrlItem('', this.methodType[0], '');
  this.model.urlItems.push(item);
}
onSubmit() { this.submitted = true; }

}
