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
  htmlResult: string = "";
  title:string = "";
  imageURL:string = "";
  description:string = "";

  constructor() {
    this.postsList=[
      {id:"A1", title:"Test",imageURL:"http://vizcarra.info/wp-content/uploads/2016/10/chiquito-navidad.jpg", description:"Lorem fistrum mamaar de la pradera apetecan me cago en tus muelas ahorarr te voy a borrar el cerito se calle ustée. Te voy a borrar el cerito por la gloria de mi madre quietooor no te digo trigo por no llamarte Rodrigor ese que llega no puedor no puedor", publishDate: new Date().toString()},
      {id:"A3", title:"Test56",imageURL:"https://s1.eestatic.com/2016/10/07/opinion/columnas/espana-psoe_-partido_socialista_obrero_espanol-caso_gurtel_161247978_18397797_1706x1706.jpg", description:"Lorem fistrum mamaar de la pradera apetecan me cago en tus muelas ahorarr te voy a borrar el cerito se calle ustée. Te voy a borrar el cerito por la gloria de mi madre quietooor no te digo trigo por no llamarte Rodrigor ese que llega no puedor no puedor", publishDate: new Date().toString()}
    ]
   }

  //ngOnInit es un funcion de ciclo de vida que se ejecuta siempre, cuando clases esta disponible, template esta disponible, etiqueta o selector tb esta cargado
  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts(): void {
    this.htmlResult = "";
    this.postsList.forEach(
      (post) =>
      (this.htmlResult += `<div>
      <div>
        <figure>
          <img src=${post.imageURL}>
        </figure>
      </div>
      <div>
        <span>${post.title}</span>
      </div>
      <div>
        <p>${post.description}</p>
      </div>
      <div>
        <p>${post.publishDate}
      </div>
    </div>`)
    );
  }

  storePost() {
    if (this.title !== "" && this.imageURL !== "" && this.description !=="") {
      let newPost: Post = {
        id: '0',
        title: this.title,
        imageURL: this.imageURL,
        description: this.description,
        publishDate: new Date().getDate().toString()
      }
      this.postsList.push(newPost);
      this.loadPosts()
    } else {
      alert('All the input fields are required')
    }
  }
}
