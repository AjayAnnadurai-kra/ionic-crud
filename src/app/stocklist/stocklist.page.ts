import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { StocksService } from './stocks.service';
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

  stocks:  any;
  detail:any = {};
  isModalOpen:boolean = false;

  constructor(public stockService:StocksService) {
    this.getStocks();
  }

  getStocks(){
       this.stockService.getStockPrice().subscribe(
            resp => this.stocks = resp
       )
  }

  add(){
    this.isModalOpen = true;
  }

  close(){
    this.isModalOpen = false;
  }

  removeData(row: any) {
    this.stockService.deleteEntity(row.id).subscribe(
       (resp: any) => {this.detail = resp;this.getStocks();}
    )
  }

  editData(row: any) {
    this.isModalOpen = true;
    this.detail = this.stocks.filter((m:any) => row.id == m.id)[0];
  }

  saveOrEditData() {
    this.stockService.saveEntity(this.detail).subscribe(
      resp => {this.stocks = resp; this.getStocks();}
    )
    this.isModalOpen = false;
  }
  cancel() {
    this.detail = {};
    this.isModalOpen = false;
  }
  ngOnInit() {
  }

}
