

import Penny from "../../../assets/images/penny.svg"
export const profileData = {
  responseData: {
    walletAmount: "USD $1.2K",
    user: {
      userID: 2,
      image: "https://www.gravatar.com/avatar/HASH",
      name: "Henry Octane",
    },
    receivedAuctions: [
      {
        auctionID: 2,
        buyNowPrice: "2000",
        reservePrice: "123",
        startPrice: "12",
        createdBy: {},
        expiry: "2021-10-28T07:00:00.000Z",
        totalBids: 3,
        item: {
          itemID: 6,
          code: "ALNCW",
          name: "Meteor X",
          slug: "meteor-x",
          description:
            "With advanced intellect, Meteor X is able to understand basic emotions, but does not understand reason and perspective. His mind isn’t complex enough to emotionally reach others.",
          image:
            "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/images/large/avtr_aln_c_w.png",
          totalSKUCount: 5,
          itemSkus: [
            {
              itemSKUID: 2,
              skuNumber: "02",
              salePrice: "199",
              price: "199",
              serialNumber: "600100",
            },
          ],
        },
        bids: [
          {
            bidID: 8,
            amount: "500",
            bidDateTime: "2021-10-22T07:38:12.000Z",
            bidder: {
              userID: 9,
            },
          },
          {
            bidID: 7,
            amount: "450",
            bidDateTime: "2021-10-22T07:35:23.000Z",
            bidder: {
              userID: 4,
            },
          },
          {
            bidID: 9,
            amount: "200",
            bidDateTime: "2021-10-22T09:50:50.000Z",
            bidder: {
              userID: 3,
            },
          },
        ],
      },
      {
        auctionID: 1,
        buyNowPrice: "1000",
        reservePrice: "12",
        startPrice: "123",
        expiry: "2021-10-28T06:00:00.000Z",
        createdBy: {},
        totalBids: 0, //item is missing
        item: {
          itemID: 6,
          code: "ALNCW",
          name: "Meteor X",
          slug: "meteor-x",
          description:
            "With advanced intellect, Meteor X is able to understand basic emotions, but does not understand reason and perspective. His mind isn’t complex enough to emotionally reach others.",
          image:
            "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/images/large/avtr_aln_c_w.png",
          totalSKUCount: 4,
          itemSkus: [
            {
              itemSKUID: 2,
              skuNumber: "01",
              salePrice: "199",
              price: "199",
              serialNumber: "600100",
            },
          ],
        },
        bids: [

        ],
      },
    ],
    sentAuctions: [
      {
        auctionID: 1,
        buyNowPrice: "1000",
        reservePrice: "12",
        startPrice: "123",
        expiry:"2021-10-26T05:00:00.000Z",
        createdBy: {},
        totalBids: 1, //item is missing
        item: {
            itemID: 6,
            code: "ALNCW",
            name: "Meteor X",
            slug: "meteor-x",
            description:
              "With advanced intellect, Meteor X is able to understand basic emotions, but does not understand reason and perspective. His mind isn’t complex enough to emotionally reach others.",
            image:
              "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/images/large/avtr_aln_c_w.png",
            totalSKUCount: 4,
            itemSkus: [
              {
                itemSKUID: 2,
                skuNumber: "01",
                salePrice: "199",
                price: "199",
                serialNumber: "600100",
              },
            ],
          },
        bids: [
          {
            bidID: 1,
            amount: "123",
            bidDateTime: "2021-10-21T13:23:43.000Z",
            bidder: {
              userID: 2,
            },
          },
        ],
      },
    ],
    itemOfferReceived: [
      {
        offers: [
          {
            offerID: 1,
            itemOwnedBy: {
              userID: 1,
            },
            item: {},
            amount: "1000",
            offerDateTime: "2021-10-20T00:00:00.000Z",
            offeredBy: {
              userID: 2,
            },
          },
          {
            offerID: 1,
            itemOwnedBy: {
              userID: 1,
            },
            item: {},
            amount: "1000",
            offerDateTime: "2021-10-20T00:00:00.000Z",
            offeredBy: {
              userID: 2,
            },
          },
          {
            offerID: 1,
            itemOwnedBy: {
              userID: 1,
            },
            item: {},
            amount: "1000",
            offerDateTime: "2021-10-20T00:00:00.000Z",
            offeredBy: {
              userID: 2,
            },
          },
          {
            offerID: 1,
            itemOwnedBy: {
              userID: 1,
            },
            item: {},
            amount: "1000",
            offerDateTime: "2021-10-20T00:00:00.000Z",
            offeredBy: {
              userID: 2,
            },
          },
        ],
        item: {
          itemID: 6,
          code: "ALNCW",
          name: "Meteor X",
          slug: "meteor-x",
          description:
            "With advanced intellect, Meteor X is able to understand basic emotions, but does not understand reason and perspective. His mind isn’t complex enough to emotionally reach others.",
          image:
            "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/images/large/avtr_aln_c_w.png",
          totalSKUCount: 4,
          itemSkus: [
            {
              itemSKUID: 2,
              skuNumber: "01",
              salePrice: "199",
              price: "199",
              serialNumber: "600100",
            },
          ],
        },
      },
      {
        offers: [
          {
            offerID: 2,
            itemOwnedBy: {
              userID: 2,
            },
            item: {},
            amount: "2000",
            offerDateTime: "2021-10-20T00:00:00.000Z",
            offeredBy: {
              userID: 3,
            },
          },
          {
            offerID: 2,
            itemOwnedBy: {
              userID: 2,
            },
            item: {},
            amount: "1000",
            offerDateTime: "2021-10-23T00:00:00.000Z",
            offeredBy: {
              userID: 3,
            },
          },
        ],
        item: {
          itemID: 7,
          code: "ALNCW",
          name: "Meteor Y",
          slug: "meteor-y",
          description:
            "With advanced intellect, Meteor X is able to understand basic emotions, but does not understand reason and perspective. His mind isn’t complex enough to emotionally reach others.",
          image:
            "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/images/large/avtr_aln_c_w.png",
          totalSKUCount: 4,
          itemSkus: [
            {
              itemSKUID: 3,
              skuNumber: "01",
              salePrice: "1000",
              price: "800",
              serialNumber: "600100",
            },
          ],
        },
      },
    ],
    itemOfferSent: [
      {
        offers: [
          {
            offerID: 6,
            itemOwnedBy: {
              userID: 13,
            },
            item: {},
            amount: "299",
            offerDateTime: "2021-10-24T00:00:00.000Z",
            offeredBy: {
              userID: 1,
            },
          }
        ],
        item: {
          itemID: 6,
          code: "ALNCW",
          name: "Meteor X",
          slug: "meteor-x",
          description:
            "With advanced intellect, Meteor X is able to understand basic emotions, but does not understand reason and perspective. His mind isn’t complex enough to emotionally reach others.",
          image:
            "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/images/large/avtr_aln_c_w.png",
          totalSKUCount: 4,
          itemSkus: [
            {
              itemSKUID: 4,
              skuNumber: "02",
              salePrice: "199",
              price: "199",
              serialNumber: "600101",
            },
          ],
        },
      },
    ],
    collectionInProgress:[
        {
            id:1,
            code:"",
            collectionGroup:"",
            name:"Lost In Space",
            slug:"lost-in-space",
            image:Godzilla,
            thumnailImage:Godzilla,
            description:"",
            expiry:"2021-11-28T07:00:00.000Z",
            toBeRewardedUserCount:1,
            rewardedUserCount:1,
            brand:"",
            status:"progress",
            totalItems: 6,
            IP:"Legendary",
            IPLogo:"", //Logo of Collection
            items:[
              {
                itemID:1,
                name:"Gipsy Avenger",
                image:Penny,
                skuNumber:"05",
                serialNumber:"07",
                brand:"",
                totalSKUCount:50,
                itemType:"2D",
                rarity:"Legendary",
                ownedBy:{
                  userID:1,
                }
              },
               {
                itemID:1,
                name:"Gipsy Avenger",
                image:Penny,
                skuNumber:"05",
                serialNumber:"07",
                brand:"",
                totalSKUCount:50,
                itemType:"2D",
                rarity:"Legendary",
                ownedBy:{
                  userID:1,
                }
              },
              {
                itemID:1,
                name:"Gipsy Avenger",
                image:Penny,
                skuNumber:"05",
                serialNumber:"07",
                brand:"",
                totalSKUCount:50,
                itemType:"2D",
                rarity:"Legendary",
                ownedBy:{
                  userID:1,
                }
              },
              {
                itemID:1,
                name:"Gipsy Avenger",
                image:Penny,
                skuNumber:"05",
                serialNumber:"07",
                brand:"",
                totalSKUCount:50,
                itemType:"2D",
                rarity:"Legendary",
                ownedBy:{
                  userID:1,
                }
              },
              {
                itemID:2,
                name:"Gipsy Avenger",
                image:Penny,
                skuNumber:"05",
                serialNumber:"07",
                brand:"",
                totalSKUCount:50,
                itemType:"2D",
                rarity:"Legendary",
                ownedBy:{
                  userID:1,
                }
              },
              {
                itemID:3,
                name:"Gipsy Avenger",
                image:Penny,
                skuNumber:"05",
                serialNumber:"07",
                brand:"",
                totalSKUCount:50,
                itemType:"2D",
                rarity:"Legendary",
                ownedBy:{
                  userID:1,
                }
              }
            ],
            rewardItems:[]
        },
        {
          id:2,
          code:"",
          collectionGroup:"",
          name:"Lost In Space",
          slug:"lost-in-space",
          image:"",
          thumnailImage:Godzilla,
          description:"",
          expiry:"2021-11-28T07:00:00.000Z",
          toBeRewardedUserCount:1,
          rewardedUserCount:1,
          brand:"",
          status:"progress",
          totalItems: 6,
          IP:"Legendary",
          items:[
            {
              itemID:1,
              name:"Gipsy Avenger",
              image:Penny,
              skuNumber:"05",
              serialNumber:"07",
              brand:"",
              totalSKUCount:50,
              itemType:"2D",
              rarity:"Legendary",
              ownedBy:{
                userID:1,
              }
            },
            {
              itemID:2,
              name:"Gipsy Avenger",
              image:Penny,
              skuNumber:"05",
              serialNumber:"07",
              brand:"",
              totalSKUCount:50,
              itemType:"2D",
              rarity:"Legendary",
              ownedBy:{
                userID:2,
              }
            },
            {
              itemID:3,
              name:"Gipsy Avenger",
              image:Penny,
              skuNumber:"05",
              serialNumber:"07",
              brand:"",
              totalSKUCount:50,
              itemType:"2D",
              rarity:"Legendary",
              ownedBy:{
                userID:1,
              }
            }
          ],
          rewardItems:[]
      },
      {
        id:3,
        code:"",
        collectionGroup:"",
        name:"Lost In Space",
        slug:"lost-in-space",
        image:"",
        thumnailImage:Godzilla,
        description:"",
        expiry:"2021-11-28T07:00:00.000Z",
        toBeRewardedUserCount:1,
        rewardedUserCount:1,
        brand:"",
        status:"progress",
        totalItems: 6,
        IP:"Legendary",
        items:[
          {
            itemID:1,
            name:"Gipsy Avenger",
            image:"abc",
            skuNumber:"05",
            serialNumber:"07",
            brand:"",
            totalSKUCount:50,
            itemType:"2D",
            rarity:"Legendary",
            ownedBy:{
              userID:2,
            }
          }
        ],
        rewardItems:[]
    }
    ]
  },
  responseCode: 200,
};
