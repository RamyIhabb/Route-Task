// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/data.service';

// @Component({
//   selector: 'app-customer-transactions',
//   templateUrl: '././customer-transuction.component.html',
//   styleUrls: ['././customer-transuction.component.scss']
// })
// export class CustomerTransactionsComponent implements OnInit {

//   customers: any;
//   transaction: any;
//   CT: any = {};

//   newCustomers: any;

//   constructor(private _DataService: DataService) { }
//   ngOnInit(): void {
//     this._DataService.getCustomers().subscribe({
//       next: (data) => {
//         console.log(this.customers = data)
//         this.customers = data;


//       }
//     });
//     this._DataService.getTransactions().subscribe({
//       next: (data) => {
//         console.log(this.transaction = data)
//         this.transaction = data;
//       }
//     });



//   }






// }


import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transuction.component.html',
  styleUrls: ['./customer-transuction.component.scss']
})
export class CustomerTransactionsComponent implements OnInit {

  customers: any = [];
  transactions: any = [];
  CT: any = {};
  newCustomers: any = [];





  constructor(private _DataService: DataService) { }

  ngOnInit(): void {
    this._DataService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.newCustomers = [...this.newCustomers, ...this.customers];
      }
    });

    this._DataService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
        // تحديث chartData بعد استرجاع البيانات
        this.updateChartData();
      }
    });
  }

  updateChartData() {
    this.chartData = {
      labels: this.transactions.map((transaction: any) => transaction.date),
      datasets: [
        {
          label: 'Transaction Amount',
          data: this.transactions.map((transaction: any) => transaction.amount),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }
      ]
    };
  }


  getTransactionsByCustomerId(customerId: number) {
    return this.transactions.filter((transaction: any) => transaction.customer_id === customerId);
  }

  testFunction() {
    const customerId = 1; // استخدم هنا الـ id الذي ترغب في البحث عنه
    const relatedTransactions = this.getTransactionsByCustomerId(customerId);
    console.log('Related Transactions for Customer ID', customerId, ':', relatedTransactions);
  }



  public chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        label: 'Transaction Amount',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };
  public chartOptions: ChartOptions = {
    responsive: true,
  };


}

