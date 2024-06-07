import { Component, OnInit } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular"; // Angular Data Grid Component
import { ColDef } from "ag-grid-community"; // Column Definition Type Interface
import { RequestsService } from "../../requests.service";

@Component({
  selector: "app-grid-test",
  templateUrl: "./grid-test.component.html",
  styleUrl: "./grid-test.component.scss",
})
export class GridTestComponent implements OnInit {
  constructor(private httpService: RequestsService) {}

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  gridData: { rowData: any[]; colDef: ColDef[] } = {
    rowData: [],
    colDef: [],
  };

  ngOnInit(): void {
    this.httpService.getData().subscribe((res) => {
      this.gridData.rowData = res;
      this.gridData.colDef = Object.keys(res[0]).map((item) => {
        return item == "alpha_two_code"
          ? {
              field: item,
              cellRenderer: (params) => {
                let hyperlink = params?.data?.web_pages[0];
                return `<a href="${hyperlink}" target="_blank">${params?.data?.alpha_two_code}</a>`;
              },
            }
          : { field: item };
      });
      

      console.log(res[0]);
      console.log(this.gridData);
    });
  }
}
