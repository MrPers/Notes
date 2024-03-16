import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

  slides = [
    {image: 'https://via.placeholder.com/600.png/09f/fff'},
    {image: 'https://via.placeholder.com/600.png/09f/ggg'},
    {image: 'https://via.placeholder.com/600.png'},
    {image: 'https://via.placeholder.com/600.png/FF0000/FFFFFF'},
    {image: 'https://via.placeholder.com/600.png/09f/ggg'},
    {image: 'https://via.placeholder.com/600.png'},
    {image: 'https://via.placeholder.com/600.png/09f/fff'},
    {image: 'https://via.placeholder.com/600.png/FF0000/0000'},
    {image: 'https://via.placeholder.com/600.png'},
 ];

}
