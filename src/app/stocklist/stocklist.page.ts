import { Component, OnInit } from '@angular/core';
interface stock {
  id: Number;
  name: string;
  mfd: string;
  price: string;
}

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.page.html',
  styleUrls: ['./stocklist.page.scss'],
})
export class StocklistPage implements OnInit {

  stocks: stock[] | any;
  detail:any = {};

  constructor() { }


  removeData(row: any) {
    let value = this.stocks.findIndex((column:any) => row.id == column.id);
    this.stocks.splice(value, 1)
    //  this.myarray = this.myarray.filter(column => row.id !== column.id);
  }

  editData(row: any) {
    this.detail = this.stocks.filter((m:any) => row.id == m.id)[0];
  }

  saveOrEditData() {
    if (this.detail.id > 0) {
      this.stocks;
      this.detail = {};
      alert('Updated Successfully');
    }
    else if(this.detail.name.length >= 3 && this.detail.price.length >= 1 || this.detail.mfd.length >=3) {
      this.detail.id = this.stocks.length + 1;
      this.stocks.push(this.detail);
      this.detail = {};
      alert('Saved Successfully');
    }
  }
  cancel() {
    this.detail = {};
  }
  ngOnInit() {
    fetch('./assets/stock.json').then(stockData =>stockData.json()).then(json =>
    this.stocks = json );
  }

}
