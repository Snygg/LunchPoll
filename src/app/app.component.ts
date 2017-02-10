import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bag of dicks!';
  insttxt = 'Vote for any number of places you want to go. Veto options if you would refuse to go there';
  nominations = [];
  constructor (
    )
	{
		this.nominations = JSON.parse(localStorage.getItem('nominations'));
	}
  sub = "";
  public newNomination(name : string) : iNomination {
	return {name : name, approves : 0, vetoes : 0};
  } 
  public nominateClick() : void {
	let nomination = this.newNomination(this.sub);
	this.nominations.push(nomination);
	this.saveNominations();
  }
  public approveClick(nomination : iNomination) : void {
	nomination.approves++;
	this.saveNominations();
  }
  public vetoClick(nomination : iNomination) : void {
	nomination.vetoes++;
	this.saveNominations();
  }
  
  private saveNominations(){
	localStorage.setItem('nominations', JSON.stringify(this.nominations));
  }
}

interface iNomination{
  name : string, approves : number, vetoes : number
}
