export class Cell {
   constructor(
      private coords: {
         x: number;
         y: number;
      }
   ) {
      this.coords = coords;
   }
}

export class Iceberg {
   constructor(private dimentions: number) {
      this.dimentions = dimentions;
   }
}
