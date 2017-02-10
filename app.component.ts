import { Component } from '@angular/core';
import { PollService, iNomination } from './poll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bag of dicks!';
  insttxt = 'Vote for any number of places you want to go. Veto options if you would refuse to go there';
  nominations = [];
  constructor ( private pollService : PollService )
	{
		this.nominations = this.pollService.getNominations();
	}
  sub = "";

  public nominateClick() : void {
	this.nominations = this.pollService.nominate(this.sub);
  }
  public approveClick(nomination : iNomination) : void {
	this.nominations = this.pollService.approve(nomination);
  }
  public vetoClick(nomination : iNomination) : void {
	this.nominations = this.pollService.veto(nomination);
  }
  
  
}


