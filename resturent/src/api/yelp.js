import axios from 'axios'

// using axios to fetch the data from api
export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer pxm33PbWFQfa9v9J_90SinnlhI4bDmSJFfvivkwUKVmQ_M7oEWRYPl7jyr63uejIOdwjEzqLCnev4eGIjeLHrFlq9YWrAcqjZrrqbeJQk7R9te03S-zy3DOo8yuQY3Yx'
    }
});