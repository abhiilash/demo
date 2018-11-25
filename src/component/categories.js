import React, { Component } from 'react';
import './css/App.css';
const categories =[
  {title: 'Concerts', image: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg'},
  {title: 'Cricket', image: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg'},
  {title: 'Theatre & Arts', image: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg'},
  {title: 'Amusement Parks', image: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg'},
  {title: 'Sports', image: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg'},
  {title: 'Restaurants', image: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg'}
]
class Categories extends Component {
  renderCategories = () => (
    categories.map(function(data, key){
      return(
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>{data.title}</h3>
            </div>
            <img src={data.image} alt="" className="img-full-width" />
          </a>
        </div>
      )
    })
  ) 
  render() {
    return (
      <section className="home-cat-sec text-center">
        <div className="container">
          <h2 className="site-title">Browse by top categories</h2>
          <div className="row">
            {this.renderCategories()}
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
