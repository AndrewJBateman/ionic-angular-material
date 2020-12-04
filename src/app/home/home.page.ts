import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
	ionite: string;

	displayedColumns: string[] = ["first_name", "last_name", "twitter"];

	dataSource = new MatTableDataSource<any>([
		{
			first_name: "Max",
			last_name: "Lynch",
			twitter: "maxlynch",
		},
		{
			first_name: "Matt",
			last_name: "Netkow",
			twitter: "dotNetkow",
		},
		{
			first_name: "Ben",
			last_name: "Sperry",
			twitter: "benjsperry",
		},
	]);

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	userForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.userForm = this.fb.group({
			name: ["", Validators.required],
			address: ["", Validators.required],
		});
	}
}
