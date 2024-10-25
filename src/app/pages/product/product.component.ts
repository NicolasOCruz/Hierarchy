import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Router } from '@angular/router';
import { Level } from '../../shared/models/level.model';
import { HierarchyComponent } from "../hierarchy/hierarchy.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HierarchyComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  selectedProduct!: Product;

  router = inject(Router)

  ngOnInit(): void {
    this.products.push(<Product>{
      name: "Crédito",
      files: [
        <File>{
          name: "RG"
        }
      ]
    })

    this.products.push(<Product>{
      name: "Cartão",
      levels: [
        <Level>{
          name: "Fatura",
          files: [
            <File>{
              name: "Fatura PDF"
            }
          ]
        },
        <Level>{
          name: "Parcelamento",
          files: [
            <File>{
              name: "Contrato de Parcelas PDF"
            }
          ]
        }
      ]
    })

    this.products.push(<Product>{
      name: "Consórcio",
      files: [
        <File>{
          name: "RG"
        }
      ]
    })
  }

  openProduct(product: Product) {
    this.selectedProduct = product;
  }
}
