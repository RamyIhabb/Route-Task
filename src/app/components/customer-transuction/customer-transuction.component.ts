import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-customer-transuction',
  templateUrl: './customer-transuction.component.html',
  styleUrls: ['./customer-transuction.component.scss']
})
export class CustomerTransuctionComponent implements OnInit {
  constructor(private _DataService: DataService) { }

  customers: any[] = [];
  transactions: any[] = [];
  filteredTransactions: any[] = [];
  selectedCustomer: any = null;



  // Chart options
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';
  timeline = true;

  chartData: any[] = [];

  ngOnInit(): void {

    this._DataService.getCustomers().subscribe((data: any) => {
      this.customers = data;
    })

    this._DataService.getTransactions().subscribe((data: any) => {
      this.transactions = data;
    })
  };

  // filterTransactions(customerId: number): void {
  //   if (customerId) {
  //     this.filteredTransactions = this.transactions.filter(
  //       (transaction) => transaction.customer_id === customerId
  //     );
  //   } else {
  //     this.filteredTransactions = this.transactions;
  //   }
  // }

  // selectCustomer(customer: any): void {
  //   this.selectedCustomer = customer;
  //   this.filterTransactions(customer.id);
  // }


  filterTransaction(customerId: number): void {
    if (customerId) {
      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.customer_id === customerId
      );
    } else {
      this.filteredTransactions = this.transactions;
    }

  }

  selectCustomer(customer: any): void {
    this.selectedCustomer = customer;
    this.filterTransaction(customer.id);


  }

  updateChartData(): void {
    const dataMap = new Map<string, number>();

    for (const transaction of this.filteredTransactions) {
      const date = transaction.date;
      const amount = transaction.amount;
      if (dataMap.has(date)) {
        dataMap.set(date, dataMap.get(date)! + amount);
      } else {
        dataMap.set(date, amount);
      }
    }

    this.chartData = Array.from(dataMap.entries()).map(([name, value]) => ({ name, value }));
  }



}



