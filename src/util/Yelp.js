const apiKey = 'xnfMEDV7Ho0dqk9APaFE8Y1Yvk-5wmyl5NeWs0zghXEO_yHkEhm2mbdHaiK2xHn-TML7MjZlc-WewfMtO0SFG6Kfjs-MTLIDeW63dpRjpyJEel7P720-51XD3tY9XHYx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
        return response.json();
      }).then(jsonResponse => {
          if (jsonResponse.businesses) {
            console.log(jsonResponse.businesses);
            return jsonResponse.businesses.map(business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
                url: business.url
              }
            })
          }
        })
  }
}

export default Yelp;
