import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { CategoriaDataService } from '@app/service/data/categoria-data.service';
import { Categoria } from '@app/model/categoria.model';


@Component({
  selector: 'app-hshp-admin-categoria-post',
  templateUrl: './hshp-admin-categoria-post.component.html',
  styleUrls: ['./hshp-admin-categoria-post.component.styl']
})
export class HshpAdminCategoriaPostComponent implements OnInit {

  categoriaForm = this.fb.group({
    nombre: ['', Validators.required]
  });
  showSpinner: boolean = false;

  constructor(
    private categoriaDataService: CategoriaDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    this.showSpinner = true;
    console.log("S: " +this.showSpinner);

    const newCategoria: Categoria = {
      Nombre: formData.value.nombre
    } as Categoria;

    this.categoriaDataService.create(newCategoria).subscribe(next => {

    }, error => {
      this.showSpinner = false;
    }, () => {
      formDirective.resetForm();
      this.categoriaForm.reset();
      this.showSpinner = false;
    })
  }

}
