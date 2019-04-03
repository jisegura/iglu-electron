import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaDataService } from '@app/service/data/categoria-data.service';
import { CategoriaMethodsService } from '@app/service/methods/categoria-methods.service';
import { Categoria } from '@app/model/categoria.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hshp-admin-categoria-put',
  templateUrl: './hshp-admin-categoria-put.component.html',
  styleUrls: ['./hshp-admin-categoria-put.component.styl']
})
export class HshpAdminCategoriaPutComponent implements OnInit {

  categoriaForm: FormGroup;
  submitted: boolean;
  categorias: Observable<Categoria[]>;

  constructor(
    private categoriaDataService: CategoriaDataService,
    private categoriaMethodsService: CategoriaMethodsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.categoriaForm = this.fb.group({
      categorias: [null, Validators.required],
      nombre: [null, Validators.required]
    });

    this.categoriaForm.get("nombre").disable();

    this.submitted = false;

    this.categorias = this.categoriaDataService.categorias;

    this.categoriaForm.get("categorias").valueChanges.subscribe(value => {
      if (value !== null) {
        this.categoriaForm.get("nombre").enable();
        this.categoriaForm.get("nombre").setValue("ID: " + value + ", " + this.categoriaMethodsService.getNombreById(value));
      } else {
        this.categoriaForm.get("nombre").disable();
      }
    });
  }

  isDisabled(): boolean{
    return !this.categoriaForm.valid || this.categoriaForm.get("nombre").value == this.categoriaMethodsService.getNombreById(this.categoriaForm.get("categorias").value);
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    if (!this.submitted) {
      this.submitted = true;

      const categoria: Categoria = {
        Id_categoria: +formData.value.categorias,
        Nombre: formData.value.nombre
      } as Categoria;

      this.categoriaDataService.update(categoria).subscribe(next => {

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
