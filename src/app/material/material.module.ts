import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
const MaterialComponents = [
  MatButtonModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatListModule,MatIconModule,MatTableModule,MatCarouselModule,MatPaginatorModule,MatDatepickerModule,MatCardModule,MatSortModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
