import { Component, ViewEncapsulation } from '@angular/core';
import {NewForm} from './new-form';
import {UrlItem} from './url-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

urlItems = [];
public tagItem  = [];

model = new NewForm('', '', '' , this.tagItem, this.urlItems);
submitted = false;
methodType = ['POST', 'GET',
'PUT', 'DELETE'];
addItem() {
  const item = new UrlItem('', this.methodType[0], '', this.tagItem);
  this.model.urlItems.push(item);
}
onSubmit() { this.submitted = true; }

}
