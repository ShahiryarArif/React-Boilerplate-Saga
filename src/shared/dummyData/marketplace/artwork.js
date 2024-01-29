// let artworkFilters = {
//     responseData: {
//         filters: [
//                     {
//                         id: 1,
//                         category_id: 8, 
//                         category_name: 'curation', 
//                         name: 'Terra Art Gallery', 
//                         code: null, 
//                         description: null, 
//                         parent_id: 1, 
//                         filter: 'filter_8'
//                     },
//                     {
//                         id: 2,
//                         category_id: 8, 
//                         category_name: 'curation', 
//                         name: 'Independent Artist', 
//                         code: null, 
//                         description: null, 
//                         parent_id: 1, 
//                         filter: 'filter_8'
//                     },
//                     {
//                         id: 3,
//                         category_id: 9, 
//                         category_name: 'artist', 
//                         name: 'Maryam Younus', 
//                         code: null, 
//                         description: null, 
//                         parent_id: 1, 
//                         filter: 'filter_9'
//                     },
//                     {
//                         id: 4,
//                         category_id: 9, 
//                         category_name: 'artist', 
//                         name: 'Mikki D', 
//                         code: null, 
//                         description: null, 
//                         parent_id: 1, 
//                         filter: 'filter_9'
//                     }
                                
//             ]
//     },
//     responseCode: 200
// }


const artworkFilters = {
  "responseData": {
    filters: [
      {
        "id": 115,
        "category_id": 9,
        "category_name": "Artist",
        "name": "Mark McKenna",
        "parent_id": 2,
        "filter": "filter_9"
      },
      {
        "id": 116,
        "category_id": 8,
        "category_name": "Curation",
        "name": "Independent Artist",
        "parent_id": 115,
        "filter": "filter_8"
      },
      {
        "id": 117,
        "category_id": 15,
        "category_name": "Collection",
        "name": "McKenna Collection",
        "parent_id": 115,
        "filter": "filter_12"
      }
    ]
  },
  "responseCode": 200
}

const artworkData = {
        "responseData": [
          {
            "asset": {
              "itemID": 2,
              "code": "FIFI",
              "name": "Fifi",
              "thumbnail_url": "https://terra-virtua-lts-assets.s3.ap-south-1.amazonaws.com/items/item_Fifi1570534350162.png",
              "IPLogo": null,
              "generation": "gen1",
              "totalSKUCount": 1,
              "brand": {
                "name": "Lost in Space",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/LostInSpace_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Uncommon",
                "logo": null
              },
              "blockchain": {
                "name": "Bitcoin",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 382,
                  "serialNumber": "sn01",
                  "salePrice": "511",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 20,
              "code": "avtr_afb_c_b",
              "name": "Joel Blitz7",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_c_b.png",
              "IPLogo": null,
              "generation": "gen2",
              "totalSKUCount": null,
              "brand": {
                "name": "Lost in Space",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/LostInSpace_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Special",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 574,
                  "serialNumber": "nr-67",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 1,
              "code": "TERRABORG",
              "name": "Terraborg",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/items/item_Terraborg1572613440262.png",
              "IPLogo": null,
              "generation": "gen1",
              "totalSKUCount": 50,
              "brand": {
                "name": "vFlect",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/vFlect_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Common",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 332,
                  "serialNumber": "13",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 19,
              "code": "avtr_afb_c_g",
              "name": "Joel Blitz6",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_c_g.png",
              "IPLogo": null,
              "generation": "gen2",
              "totalSKUCount": null,
              "brand": {
                "name": "vFlect",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/vFlect_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Rare",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 566,
                  "serialNumber": "gxr-76",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 18,
              "code": "avtr_afb_c_r",
              "name": "Joel Blitz5",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_c_r.png",
              "IPLogo": null,
              "generation": "gen2",
              "totalSKUCount": null,
              "brand": {
                "name": "Pacific Rim Uprising",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/PacificRimUprising_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Uncommon",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 549,
                  "serialNumber": "ath60",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 17,
              "code": "avtr_afb_b_p",
              "name": "Jim Blitz4",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_b_p.png",
              "IPLogo": null,
              "generation": "gen2",
              "totalSKUCount": null,
              "brand": {
                "name": "Top Gun",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/TopGun_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Common",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 539,
                  "serialNumber": "gxr-70",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 16,
              "code": "avtr_afb_b_w",
              "name": "Jim Blitz3",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_b_w.png",
              "IPLogo": null,
              "generation": "gen1",
              "totalSKUCount": null,
              "brand": {
                "name": "Sunset Boulevard",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/SunsetBoulevard_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Platinum",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 529,
                  "serialNumber": "nr-55",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 15,
              "code": "avtr_afb_b_b",
              "name": "Jim Blitz2",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_b_b.png",
              "IPLogo": null,
              "generation": "gen1",
              "totalSKUCount": null,
              "brand": {
                "name": "The Godfather",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/TheGodfather_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Golden",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 519,
                  "serialNumber": "nr-45",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          },
          {
            "asset": {
              "itemID": 14,
              "code": "avtr_afb_b_g",
              "name": "Jim Blitz1",
              "thumbnail_url": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/terravirtua/models/images/small/avtr_afb_b_g.png",
              "IPLogo": null,
              "generation": "nan",
              "totalSKUCount": null,
              "brand": {
                "name": "Lost in Space",
                "logo": "https://tvassets.s3.eu-west-2.amazonaws.com/brand_logos/SVGs+Dark/LostInSpace_Dark.svg",
                "category": "Brands"
              },
              "rarity": {
                "name": "Mythical",
                "logo": null
              },
              "blockchain": {
                "name": "Etherium",
                "logo": "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/brands/polygon_dark.svg"
              },
              "itemType": "https://tvassets.s3.eu-west-2.amazonaws.com/brands/two-da-dark.svg",
              "itemSkus": [
                {
                  "itemSKUID": 509,
                  "serialNumber": "ath41",
                  "salePrice": "550",
                  "itemState": "onSale"
                }
              ]
            }
          }
        ],
        "responseCode": 200
}



export { artworkFilters, artworkData } 