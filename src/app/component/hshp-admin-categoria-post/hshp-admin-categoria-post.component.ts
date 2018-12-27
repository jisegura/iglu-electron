import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hshp-admin-categoria-post',
  templateUrl: './hshp-admin-categoria-post.component.html',
  styleUrls: ['./hshp-admin-categoria-post.component.styl']
})
export class HshpAdminCategoriaPostComponent implements OnInit {

  categoriaForm = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
