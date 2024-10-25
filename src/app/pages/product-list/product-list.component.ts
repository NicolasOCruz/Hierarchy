import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  selectedProduct!: Product | null;

  router = inject(Router)

  ngOnInit(): void {
    this.products.push(<Product>{
      name: "Crédito",
      files: [
        {
          name: "RG"
        }
      ]
    })

    this.products.push(<Product>{
      name: "Cartão",
      levels: [
        {
          name: "Fatura",
          files: [
            {
              name: "Fatura PDF"
            }
          ]
        },
        {
          name: "Parcelamento",
          files: [
            {
              name: "Contrato de Parcelas PDF"
            }
          ]
        }
      ]
    })

    this.products.push(<Product>{
      name: "Consórcio",
      levels: [
         {
          name: "Consórcio Renovado",
          sublevels: [
             {
              name: "Consórcio Agência",
              sublevels: [
                 {
                  name: "Agência Local",
                  files: [
                    {
                      name: "Local PDF"
                    }
                  ]
                },
                 {
                  name: "Agência Remota",
                  files: [
                    {
                      name: "Remota PDF"
                    }
                  ]
                }
              ]
            },
             {
              name: "Consórcio Digital",
              files: [
                {
                  name: "Digital PDF"
                }
              ]
            },
          ]
        },
        {
          name: "Consórcio Novo",
          files: [
            {
              name: "Contrato de Parcelas PDF"
            }
          ]
        }
      ]
    })
  }

  openProduct(product: Product) : void {
    this.selectedProduct = product;
  }

  goBack() : void {
    this.selectedProduct = null;
  }
}
