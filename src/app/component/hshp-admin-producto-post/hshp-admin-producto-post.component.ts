import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CropperComponent, ImageCropperResult } from 'angular-cropperjs';
import { CurrencyNumberMaskPipe } from '@app/pipe/currency-number-mask.pipe.ts';

@Component({
  selector: 'app-hshp-admin-producto-post',
  templateUrl: './hshp-admin-producto-post.component.html',
  styleUrls: ['./hshp-admin-producto-post.component.styl']
})
export class HshpAdminProductoPostComponent implements OnInit {

  productoForm: FormGroup;
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  config = {
    "viewMode": 1,
    "dragMode": "move",
    "aspectRatio": 1,
    "autoCropArea": 1,
    "movable": false,
    "rotatable": false,
    "scalable": false,
    "zoomable": false
  };
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bartholdi_Fountain_in_Washington%2C_D.C._2012.JPG/800px-Bartholdi_Fountain_in_Washington%2C_D.C._2012.JPG";

  resultImage: any;
  resultResult: any;

  constructor(
    private fb: FormBuilder,
    private currencyNumberMask: CurrencyNumberMaskPipe,
    private sanitizer: DomSanitizer
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

  resultImageFun(event: ImageCropperResult) {
    let urlCreator = window.URL;
    this.resultResult = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

  checkstatus(event: any) {
    console.log(event.blob);
    if (event.blob === undefined) {
      return;
    }
    // this.resultResult = event.blob;
    let urlCreator = window.URL;
    this.resultResult = this.sanitizer.bypassSecurityTrustUrl(
        urlCreator.createObjectURL(new Blob(event.blob)));
  }

}
