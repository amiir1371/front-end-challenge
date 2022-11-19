import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Upload Image',
      routerLink: 'upload-image'
    },
    {
      label: 'Required Fields',
      routerLink: 'required-fields'
    },
    {
      label: 'Select Person',
      routerLink: 'people'
    },
    {
      label: 'Summary',
      routerLink: 'summary'
    }
    ];
  }
}
