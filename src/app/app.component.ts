
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  constructor(private timerService: TimerService) {}



export class AppComponent {

  public productForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    id: new FormControl(nanoid()),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    categories: new FormControl([]),
  });

  public onClickGenerateButton(): void {
    this.productForm.get('id').setValue(nanoid());
  }

  public onSubmit(): void {
    if (this.productForm.invalid) {
      // console.log(this.productForm.errors)
      alert('Ошибка при заполнении формы');
      return
    }

    console.log(this.productForm.value);

  }

}

