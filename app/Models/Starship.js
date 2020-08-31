export default class Starship {
  constructor({ name, model, crew, hyperdrive_rating, starship_class }) {
    this.name = name
    this.model = model
    this.crew = crew
    this.drive = hyperdrive_rating
    this.class = starship_class
  }
  driveColor(){
    if (this.drive <= 1){
      return "drive-a"
    }
    if (this.drive <= 2 ){
      return "drive-b"
    }
    if (this.drive <= 3){
      return "drive-c"
    }
    if (this.drive <= 4){
      return "drive-d"
    }
    if (this.drive <= 5)
      {return "drive-e"}
    if (this.drive > 5)
      {return "drive-f"}
    else {return ""}
  }
  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value ${this.driveColor()} mt-1">
          ${this.name} - ${this.class}
          ${this.drive} 
      </div>
    </div>
    `
  }
}