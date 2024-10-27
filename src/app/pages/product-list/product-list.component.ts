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
      name: "INSS",
      files: [
        {
          name: "RG"
        }
      ]
    })

    this.products.push(<Product>{
      name: "Crédito",
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
          name: "Imobiliário",
          levels: [
             {
              name: "Consórcio Agência",
              levels: [
                 {
                  name: "Agência Física",
                  files: [
                    {
                      name: "Consórcio Físico PDF"
                    }
                  ]
                },
                 {
                  name: "Agência Digital",
                  files: [
                    {
                      name: "Consórcio Digital PDF"
                    }
                  ]
                }
              ]
            },
             {
              name: "Consórcio Parceiro",
              files: [
                {
                  name: "Digital PDF"
                }
              ]
            },
          ]
        },
        {
          name: "Veículo",
          files: [
            {
              name: "Contrato de Parcelas PDF"
            }
          ]
        }
      ]
    })
    this.navigationService.addPath(SanitizeRouteService.sanitize(this.router.url));
  }

  openProduct(product: Product) : void {
    this.selectedProduct = product;
    this.navigationService.addPath(SanitizeRouteService.sanitize(product.name));
    this.navigationService.setProduct(product);
  }

  hasFiles(level: Level) : boolean {
    return level?.files ? level.files.length > 0 : false;
  }
}
