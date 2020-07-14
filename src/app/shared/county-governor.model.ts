export class CountyGovernor {
  public entityType: number;
  public ID: number;
  public name: string;
  public address: string;
  public zipCode: number;
  public phone: string;
  public fax: string;
  public email: string;
  public web: string;
  public governor: string;
  public viceGovernor: string;
  public viceGovernor2: string;
  public viceNationalMinority: string;
  public representativeBodyPresident: string;

  constructor(entityType: number, ID: number, name: string, address: string, zipCode: number, phone: string, fax: string,
    email: string, web: string, governor: string, viceGovernor: string, viceGovernor2: string, viceNationalMinority: string,
    representativeBodyPresident: string) {
      this.entityType = entityType;
      this.ID = ID;
      this.name = name;
      this.address = address ;
      this.zipCode = zipCode;
      this.phone = phone ;
      this.fax = fax;
      this.email = email;
      this.web = web;
      this.governor = governor;
      this.viceGovernor = viceGovernor;
      this.viceGovernor2 = viceGovernor2;
      this.viceNationalMinority = viceNationalMinority;
      this.representativeBodyPresident = representativeBodyPresident;
     }
}