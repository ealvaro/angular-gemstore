(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
this.products = gems;
});

app.controller("PanelController", function(){
  this.tab = 1;
  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});

var gems = [{
  name: 'Dodecahedron',
  price: 2.95,
  description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
  canPurchase: true,
  soldOut: false,
  images: [{
    full: 'dodecahedron-01-full.gif',
    thumb: 'dodecahedron-01-thumb.gif'
    },
    {
    full: "dodecahedron-02-full.gif",
    thumb: 'dodecahedron-02-thumb.gif'
    }],
  reviews: [{
    stars: 5,
    body: "I love this product!",
    author: "joe@thomas.com"
    },
    {
    stars: 1,
    body: "This product is too expensive!",
    author: "tim@hater.com"
    },
    {
    stars: 3,
    body: "I think this gem was just OK, could honestly use more shine, IMO.",
    author: "JimDean@sausage.com"
    },
    {
    stars: 4,
    body: "Any gem with 12 faces is for me!",
    author: "gemsRock@alyssaNicoll.com"
    }]
  },
  {
  name: "Pentagonal Gem",
  price: 5.95,
  description: "Origin of the Pentagonal gem is unknown, hence its low value. It has a very high shine and 12 sides, however.",
  canPurchase: true,
  soldOut: false,
  images: [{
    full: 'pentagonal-01-full.gif',
    thumb: 'pentagonal-01-thumb.gif'
    },
    {
    full: "pentagonal-02-full.gif",
    thumb: 'pentagonal-02-thumb.gif'
    }],
  reviews: [{
    stars: 4,
    body: "I like this product, however it could be better.",
    author: "joe@thomas.com"
    },
    {
    stars: 3,
    body: "This product is actually not that bad.",
    author: "tim@hater.com"
    }]

  },
  {
  name: "Azurite Gem",
  price: 577.95,
  description: "Origin of this precious stone is South Africa and has a very high value. It has a very high shine and 8 sides.",
  canPurchase: true,
  soldOut: false,
  images: [{
    full: 'azurite-01-full.gif',
    thumb: 'azurite-01-thumb.gif'
    },
    {
    full: "azurite-02-full.gif",
    thumb: 'azurite-02-thumb.gif'
    }],
  reviews: [{
    stars: 2,
    body: "I kinda like this product!",
    author: "joe@thomas.com"
    },
    {
    stars: 1,
    body: "This product sucks",
    author: "tim@hater.com"
    }]

  }];

})();
