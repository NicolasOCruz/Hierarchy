import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Router } from '@angular/router';
import { LevelListComponent } from "../level-list/level-list.component";
import { Level } from '../../shared/models/level.model';
import { FileComponent } from '../file/file.component';
import { SanitizeRouteService } from '../../shared/services/sanitize-route.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [LevelListComponent, FileComponent, AsyncPipe, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  selectedProduct!: Product | null;

  products: Product[] = [];

  router = inject(Router);

  navigationService = inject(NavigationService);

  isProductListVisible = this.navigationService.isProductListVisible$;


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
          name: "Consignado",
          levels: [
            {
              name: "Contratação Crédito Consignado",
              levels: [
                {
                  name: "Contrato Crédito Consignado",
                  levels: [
                    {
                      name: "Termo",
                      files: [
                        {
                          name: "Contrato PDF"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
        },
        {
          name: "Fatura",
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
          levels: [
             {
              name: "Consórcio Agência",
              levels: [
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
    const sanitizedLevel = SanitizeRouteService.sanitize(product.name);
    console.log(sanitizedLevel)
    this.navigationService.setProduct(product);
  }

  hasFiles(level: Level) : boolean {
    return level?.files ? level.files.length > 0 : false;
  }
}
