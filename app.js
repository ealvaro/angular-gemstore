(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
this.products = gems;
});

var gems = [{
  name: 'Dodecahedron',
  price: 2.95,
  description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
  canPurchase: false,
  soldOut: false,
  images: [{
    full: 'dodecahedron-01-full.gif',
    thumb: 'dodecahedron-01-thumb.gif'
    },
    {
    full: "dodecahedron-02-full.gif",
    thumb: 'dodecahedron-02-thumb.gif'
    }]
  },
  {
  name: "Pentagonal Gem",
  price: 5.95,
  description: "Origin of the Pentagonal gem is unknown, hence its low value. It has a very high shine and 12 sides, however.",
  canPurchase: false,
  soldOut: false,
  images: [{
    full: 'pentagonal-01-full.gif',
    thumb: 'pentagonal-01-thumb.gif'
    },
    {
    full: "pentagonal-02-full.gif",
    thumb: 'pentagonal-02-thumb.gif'
    }]
  },
  {
  name: "Azurite Gem",
  price: 577.95,
  description: "Origin of this precious stone is South Africa and has a very high value. It has a very high shine and 8 sides.",
  canPurchase: false,
  soldOut: false,
  images: [{
    full: 'azurite-01-full.gif',
    thumb: 'azurite-01-thumb.gif'
    },
    {
    full: "azurite-02-full.gif",
    thumb: 'azurite-02-thumb.gif'
    }]
  }];

})();
