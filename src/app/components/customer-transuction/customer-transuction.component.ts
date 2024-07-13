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


}



