import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface ProductoElement {
  nombre: string;
  precio: number;
}

const ELEMENT_DATA: ProductoElement[] = [
  {nombre: "Bombom Helado", precio: 100},
  {nombre: "Palito Bombom", precio: 120}
];

@Component({
  selector: 'app-hshp-products-order',
  templateUrl: './hshp-products-order.component.html',
  styleUrls: ['./hshp-products-order.component.styl']
})
export class HshpProductsOrderComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'cantidad', 'descuento', 'precio'];
  dataSource = new MatTableDataSource<ProductoElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}
