import decode from 'jwt-decode';

export default class API {
    constructor(){
        this.baseUrl = "http://localhost:8800";
    }
    
    getWeatherFavoriteCities = () => {
        return this.fetch('/home', {
            method : 'GET'
        }).then(res => {
            return Promise.resolve(res);
        });
    }

    getWeatherWeekCity = (id) => {
        return this.fetch('/detail/'+id, {
            method : 'GET'
        }).then(res => {
            return Promise.resolve(res);
        });
    }
    getCities = (codeCountry)=> {
        return this.fetch('/cities/'+codeCountry, {
            method : 'GET'
        }).then(res => {
            return Promise.resolve(res);
        });
    }
    getCountries = ()=> {
        return this.fetch('/countries', {
            method : 'GET'
        }).then(res => {
            return Promise.resolve(res);
        });
    }
    addCity(id){
        return this.fetch('/cities/add', {
            method : 'POST',
            body: JSON.stringify({
                id
            })
        }).then(res => {
            return Promise.resolve(res);
        });
    }
    deleteCity(id){
        return this.fetch('/cities/delete/'+id, {
            method : 'GET'
        }).then(res => {
            return Promise.resolve(res);
        });
    }
    login = (email, password) => {
        
        // Get a token from api server using the fetch api
        return this.fetch(`/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => {
            
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
        })
    }


    loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // Getting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    }

    setToken = (idToken) => {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getConfirm = () => {
        // Using jwt-decode npm package to decode the token
        let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    }

    fetch = (url, options) => {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(this.baseUrl + url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus = (response) => {
        console.log(response)
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}