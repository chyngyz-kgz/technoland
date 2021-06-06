import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_NEWS_API, GET_NEWS_DETAILS_API } from '../helpers/constants';

export const newsContext = React.createContext();

const INIT_STATE = {
    news: null,
    newsDetails: null,
    totalPages: 1,
    favourites: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                totalPages: action.payload.totalPages,
                news: action.payload
            }
        case "GET_NEWS_DETAILS":
            return {
                ...state,
                newsDetails: action.payload
            }
        case "GET_FAVOURITES":
            return {
                ...state,
                favourites: action.payload
            }
        default:
            return state
    }
}

const NewsContextProvider = ({ children }) => {

    async function getNews() {
        const { data } = await axios.get(`${GET_NEWS_API}${window.location.search}`);
        console.log(data);
        dispatch({
            type: "GET_NEWS",
            payload: data
        });
    }

    async function getNewsDetails(id) {
        const { data } = await axios.get(`${GET_NEWS_DETAILS_API}?id=${id}`);
        console.log(data);
        dispatch({
            type: "GET_NEWS_DETAILS",
            payload: data.news[0]
        });
    }

    function addToFavourites(newFavouriteNews) {
        let favourites = JSON.parse(localStorage.getItem('favouriteNews'));

        if (!favourites) {
            favourites = []
        }

        let filteredFavourites = favourites.filter(elem => elem.news_id === newFavouriteNews.news_id);
        if (filteredFavourites.length > 0) {
            favourites = favourites.filter(elem => elem.news_id !== newFavouriteNews.news_id)
        } else {
            favourites.push(newFavouriteNews);
        }

        console.log(favourites);
        localStorage.setItem('favouriteNews', JSON.stringify(favourites));
        getNews();
    }

    function checkNewsInFavourites(id) {
        let favourites = JSON.parse(localStorage.getItem('favouriteNews'));
        if (!favourites) {
            favourites = []
        };

        let newFavourites = favourites.filter(elem => elem.news_id === id);

        return newFavourites.length > 0 ? true : false
    }

    function getFavourites() {
        let favourites = JSON.parse(localStorage.getItem('favouriteNews'));
        if (!favourites) {
            favourites = []
        }
        dispatch({
            type: "GET_FAVOURITES",
            payload: favourites
        });
    };

    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    return (
        <newsContext.Provider value={{
            news: state.news,
            newsDetails: state.newsDetails,
            totalPages: state.totalPages,
            favourites: state.favourites,
            getNews,
            getNewsDetails,
            addToFavourites,
            checkNewsInFavourites,
            getFavourites
        }}>
            {children}
        </newsContext.Provider>
    )
}

export default NewsContextProvider;