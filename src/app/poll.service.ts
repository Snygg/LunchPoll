import { Injectable } from '@angular/core';

@Injectable()
export class PollService {

  constructor() { }
  public nominate(name : string) : iNomination[] {
	console.log(name);
	let nomination = this.newNomination(name);
	let noms = this.getNominations();
	
	if (noms.filter((current : iNomination) =>{return name === current.name}).length === 0 ){ 
	  noms.push(nomination);
	  this.saveNominations(noms);
	} else {
	  console.log('duplicate: give user feedback in next version');
	}
	return noms;
  }
  public newNomination(name : string) : iNomination {
	return {name : name, approves : 0, vetoes : 0};
  } 
  private saveNominations(nominations: iNomination[] ){
	localStorage.setItem('nominations', JSON.stringify(nominations));
  }
  public getNominations () : iNomination[] {
	return JSON.parse(localStorage.getItem('nominations')) || [] ;
  }
  public approve (nom : iNomination) : iNomination[]{
	let noms = this.getNominations();
	noms.filter((current : iNomination) =>{return nom.name === current.name})[0].approves++;
	this.saveNominations(noms);
	return noms;
  }
  public veto (nom : iNomination) : iNomination[] {
	let noms = this.getNominations();
	noms.filter((current : iNomination) =>{return nom.name === current.name})[0].vetoes++;
	this.saveNominations(noms);
	return noms;
  }
  public clearOptions () {
  
  }
}
export interface iNomination{
  name : string, approves : number, vetoes : number
}
