import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  categories = [];
  images = [];
  imagesToShow = [];

  constructor() {
  }

  ngOnInit(): void {
    this.categories = [
      {
        id: 1,
        name: 'Inside',
        active: false
      },
      {
        id: 2,
        name: 'Outdoor',
        active: false
      }
    ];
    this.images = [
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        title: 'A wonderful tree',
        categoryId: 2
      },
      {
        url: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        title: 'A man here some text also here for test',
        categoryId: 1
      },
      {
        url: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
        title: 'Bird for this image',
        categoryId: 2
      },
      {
        url: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        title: 'Sunset time',
        categoryId: 1
      },
      {
        url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80',
        title: 'A book is very nice',
        categoryId: 2
      },
      {
        url: 'https://cdn.eso.org/images/thumb300y/eso1907a.jpg',
        title: 'Something unknown',
        categoryId: 1
      },
      {
        url: 'https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg',
        title: 'Horse here test long test long test long test long test',
        categoryId: 2
      },
      {
        url: 'https://images.medicinenet.com/images/slideshow/sciatica-s1-illustration-of-sciatica.jpg',
        title: 'Human body maybe',
        categoryId: 1
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU',
        title: 'Plane for this picture',
        categoryId: 1
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ne4fxlOxhGDTycjkVZd_4KxtraQ0WP4DoQ&usqp=CAU',
        title: 'Photo on mobile',
        categoryId: 2
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_rm821dNJ-BCEzqhFtnacCgA4SazP5Jmxw&usqp=CAU',
        title: 'Another random photo',
        categoryId: 1
      },
      {
        url: 'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png',
        title: 'Google images',
        categoryId: 2
      },
      {
        url: 'https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'The last from this array',
        categoryId: 2
      }
    ];
    this.imagesToShow = this.images;
  }

  activateCategory(id): void {
    const clicked = this.categories.find(item => item.id === id);
    if (clicked.active) {
      this.categories.forEach(item => item.active = false);
      this.imagesToShow = this.images;
      return;
    }
    this.categories.forEach(item => item.active = item.id === id);
    this.imagesToShow = this.images.filter(item => item.categoryId === id);
  }
}
