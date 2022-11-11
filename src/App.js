import React, {useState, createContext} from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishList';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';
import MainMenu from './sections/MainMenu';
import Breadcrumb from './sections/Breadcrumb';
import ContactForm from './sections/ContactForm';
import {ProductContext} from './contexts/contexts';
import ProductTiles from './sections/ProductTiles';




function App () {

   

    const [products, setProducts] = useState ([
        { id: 1, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/12839384/pexels-photo-12839384.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 2, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/8609569/pexels-photo-8609569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 3, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/12879040/pexels-photo-12879040.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 4, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/6962095/pexels-photo-6962095.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }
      ])
      const [topProducts, setTopProducts] = useState ([
        { id: 1, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/12839384/pexels-photo-12839384.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 2, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/8609569/pexels-photo-8609569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 3, name: "Modern Black Blouse" , category: "Fashion", price: "$35.00", raiting: 5, img: "https://images.pexels.com/photos/12879040/pexels-photo-12879040.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        
      ])

    return (
      <BrowserRouter>
        <ProductContext.Provider value={products}>
            <Routes>
                < Route path="/" element={<HomeView />} />
                < Route path="/categories" element={<CategoriesView />} />
                < Route path="/products" element={<ProductsView />} />
                < Route path="/products/:name" element={<ProductDetailsView />} />
                < Route path="/contacts" element={<ContactsView/>} />
                < Route path="/search" element={<SearchView/>} />
                < Route path="/compare" element={<CompareView/>} />
                < Route path="/wishlist" element={<WishListView/>} />
                < Route path="/shoppingcart" element={<ShoppingCartView/>} />

                < Route path="*" element={<NotFoundView />} />
            </Routes>
           </ProductContext.Provider>
    </BrowserRouter>
    );
}

export default App;