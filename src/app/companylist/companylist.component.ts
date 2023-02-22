import { Component } from '@angular/core';
@Component({
  selector: 'app-company',
  templateUrl: './companylist.component.html',
})
export class CompanyListComponent {
  companies = [
    { CompanyID: 101, Name: 'Incedo', URL: 'https://www.incedoinc.com' },
    { CompanyID: 101, Name: 'Microsof', URL: 'https://www.microsoft.com' },
    { CompanyID: 101, Name: 'IBM', URL: 'https://www.ibm.com' },
    { CompanyID: 101, Name: 'HCL', URL: 'https://www.hcl.com' },
  ];
}
