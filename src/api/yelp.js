import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Am1Xg85PTefWVEO_G2DjdMYjH4yWIdxAg7jdKiIEeE3llGNcd43-iyZm5UdfAPyAoh3MgKYCglOkw2-khpkqH2Hc5UGs2xte1ybaCSg0Mv3ggc-FTlqAyUnOb-s4YnYx'
    }
});
