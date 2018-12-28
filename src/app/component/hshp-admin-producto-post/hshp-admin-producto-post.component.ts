import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hshp-admin-producto-post',
  templateUrl: './hshp-admin-producto-post.component.html',
  styleUrls: ['./hshp-admin-producto-post.component.styl']
})
export class HshpAdminProductoPostComponent implements OnInit {

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
