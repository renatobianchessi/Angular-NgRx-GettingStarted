import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductService } from "../product.service";
import * as ProductActons from './product.actions';

@Injectable()
export class ProductEffects {
    constructor(private actions$:Actions,
        private productService: ProductService){}
    
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActons.loadProducts),
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => ProductActons.LoadProductsSuccess({products}))
            )),
            catchError(error => of(ProductActons.loadProdcutsFailure({error})))
        )
    })
}