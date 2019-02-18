import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyNumberMaskPipe } from '@app/pipe/currency-number-mask.pipe.ts';

@Component({
  selector: 'app-hshp-admin-producto-post',
  templateUrl: './hshp-admin-producto-post.component.html',
  styleUrls: ['./hshp-admin-producto-post.component.styl']
})
export class HshpAdminProductoPostComponent implements OnInit {

  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private currencyNumberMask: CurrencyNumberMaskPipe
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required]
    });

    this.productoForm.valueChanges.subscribe(value => {
      if (typeof value.precio === 'string') {
        const value_mask = this.currencyNumberMask.transform(value.precio);
        if (value.precio !== value_mask) {
          this.productoForm.patchValue({precio: value_mask});
        }
      }
    });
  }

  ngOnInit() {
  }

}
