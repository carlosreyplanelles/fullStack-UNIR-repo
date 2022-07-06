import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: Post[] = [];
  newPostTitle:string = "";
  newPostImageURL:string = "";
  newPostDescription:string = "";
  id:number = 5

  constructor() {
    this.postsList=[
      {id:0, title:"Kyojuro Rengoku",imageURL:"./assets/images/rengoku.jpg", description:"Go ahead and live with your head held high. No matter how devastated you may be by your own weakness or uselessness, set your heart ablaze. Grit your teeth and look straight ahead. Even if you stop and crouch down, time won't wait for you or snuggle you and grieve along with you. Don't feel bad that I'm going to die here. As a Hashira, of course I would shield my juniors.", publishDate: new Date().toString()},
      {id:1, title:"Naruto Uzumaki",imageURL:"./assets/images/naruto.jpg", description:"Hard work is worthless for those that don’t believe in themselves.", publishDate: new Date().toString()},
      {id:2, title:"Rocky Balboa",imageURL:"./assets/images/rocky.jpg", description:"Let me tell you something you already know. The world ain’t all sunshine and rainbows. It’s a very mean and nasty place and I don’t care how tough you are it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard ya hit. It’s about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That’s how winning is done!", publishDate: new Date().toString()},
      {id:3, title:"Tyrion Lanister",imageURL:"./assets/images/tyrion.jpg", description:"Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.", publishDate: new Date().toString()},
      {id:4, title:"Yoda",imageURL:"./assets/images/yoda.jpg", description:"Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.", publishDate: new Date().toString()}
    ]
   }

  //ngOnInit es un funcion de ciclo de vida que se ejecuta siempre, cuando clases esta disponible, template esta disponible, etiqueta o selector tb esta cargado
  ngOnInit(): void {
  }

  publishPost() {
    if (this.newPostTitle !== "" && this.newPostImageURL !== "" && this.newPostDescription !=="") {
      let newPost: Post = {
        id: this.id,
        title: this.newPostTitle,
        imageURL: this.newPostImageURL,
        description: this.newPostDescription,
        publishDate: new Date().toString()
      }
      this.id++
      this.postsList.push(newPost);
      this.newPostTitle=""
      this.newPostImageURL=""
      this.newPostDescription=""
    } else {
      alert('All the input fields are required')
    }
  }
}
