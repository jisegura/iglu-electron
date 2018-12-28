import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hshp-admin-producto-delete',
  templateUrl: './hshp-admin-producto-delete.component.html',
  styleUrls: ['./hshp-admin-producto-delete.component.styl']
})
export class HshpAdminProductoDeleteComponent implements OnInit {

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
