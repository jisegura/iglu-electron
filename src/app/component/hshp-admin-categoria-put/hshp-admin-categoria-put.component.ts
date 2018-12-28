import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hshp-admin-categoria-put',
  templateUrl: './hshp-admin-categoria-put.component.html',
  styleUrls: ['./hshp-admin-categoria-put.component.styl']
})
export class HshpAdminCategoriaPutComponent implements OnInit {

  categoriaForm = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
