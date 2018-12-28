import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hshp-admin-producto-put',
  templateUrl: './hshp-admin-producto-put.component.html',
  styleUrls: ['./hshp-admin-producto-put.component.styl']
})
export class HshpAdminProductoPutComponent implements OnInit {

  productoForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
