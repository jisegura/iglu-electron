import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hshp-admin-categoria-delete',
  templateUrl: './hshp-admin-categoria-delete.component.html',
  styleUrls: ['./hshp-admin-categoria-delete.component.styl']
})
export class HshpAdminCategoriaDeleteComponent implements OnInit {

  categoriaForm = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
