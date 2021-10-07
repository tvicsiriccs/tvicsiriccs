import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import users from '../assets/payouts.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'id',
    'display_name',
    'ad_share_gross',
    'sub_share_gross',
    'bits_share_gross',
    'bits_extension_share_gross',
    'prime_sub_share_gross',
    'bit_share_ad_gross',
    'experimental_rev_gross',
    'sum',
    'avg'
  ];
  dataSource = new MatTableDataSource(users);

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface User {
  id: number;
  display_name: string;
  ad_share_gross: number;
  sub_share_gross: number;
  bits_share_gross: number;
  bits_developer_share_gross: number;
  bits_extension_share_gross: number;
  prime_sub_share_gross: number;
  bit_share_ad_gross: number;
  fuel_rev_gross: number;
  bb_rev_gross: number;
  experimental_rev_gross: number;
  sum: number;
  avg: number;
}
