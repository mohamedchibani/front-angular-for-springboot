// list-address.component.ts
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.getAllAdresses();
  }

  getAllAdresses() {
    this.addressService.getAll().subscribe((res: any/* Address[] */) => {
      this.addresses = res
    });
  }

}
