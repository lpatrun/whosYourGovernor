export class County {
  public entityType: number;
  public ID: number;
  public name: string;
  
  constructor(entityType: number, ID: number, name: string) {
   this.entityType = entityType;
   this.ID = ID;
   this.name = name;
  }
}