export class Town {
  public entityType: number;
  public ID: number;
  public name: string;
  public countyID: number;
  public countyName: string;

  constructor(entityType: number, ID: number, name: string, countyID: number, countyName: string) {
    this.entityType = entityType;
    this.ID = ID;
    this.name = name;
    this.countyID = countyID;
    this.countyName = countyName;
  }
}