import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatOptionModule } from "@angular/material/core";

@NgModule({
	exports: [
		MatTableModule,
		MatStepperModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatOptionModule,
		MatSelectModule,
		MatPaginatorModule,
		MatSortModule,
	],
})
export class MaterialModule {}
