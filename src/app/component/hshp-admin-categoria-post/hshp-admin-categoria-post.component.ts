import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaDataService } from '@app/service/data/categoria-data.service';
import { Categoria } from '@app/model/categoria.model';


@Component({
  selector: 'app-hshp-admin-categoria-post',
  templateUrl: './hshp-admin-categoria-post.component.html',
  styleUrls: ['./hshp-admin-categoria-post.component.styl']
})
export class HshpAdminCategoriaPostComponent implements OnInit {

  categoriaForm: FormGroup;
  submitted: boolean;

  constructor(
    private categoriaDataService: CategoriaDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.categoriaForm = this.fb.group({
      nombre: [null, Validators.required]
    });

    this.submitted = false;
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    if (!this.submitted) {
      this.submitted = true;

      const categoria: Categoria = {
        Nombre: formData.value.nombre
      } as Categoria;

      this.categoriaDataService.create(categoria).subscribe(next => {

      }, error => {
        this.submitted = false;
      }, () => {
        formDirective.resetForm();
        this.categoriaForm.reset();
        this.submitted = false;
      })
    }
  }

}
