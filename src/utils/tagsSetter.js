export const bidPriceSetter=(data,ob)=>{
    if(data[ob.id].asset.itemSkus[0].itemState === "onSale"){
      return `From USD $${data[ob.id].asset.itemSkus[0].salePrice}`
    }
    else{
      if(data[ob.id].asset.itemSkus[0].itemState === "purchased"){
        return "Send Offer"
      }
      else return "Place a Bid"
    }
}
export const esetValueSetter=(esetHash,esetObj)=>{
    if(esetHash[esetObj.id].asset.itemSkus[0].itemState === "onSale"){
      if(esetHash[esetObj.id].asset.generation === "nan") return "" 
      else{
        return esetHash[esetObj.id].asset.generation.charAt(0).toUpperCase() +esetHash[esetObj.id].asset.generation.slice(1)
      }
    }
    else return ""
}
export const statusSetter=(statusHash,statusObj)=>{
    if( statusHash[statusObj.id].asset.itemSkus[0].itemState === "onSale"){
      return `Available for Sale`  
    }
    else{
        if(statusHash[statusObj.id].asset.itemSkus[0].itemState === "onAuction"){
            return `#${statusHash[statusObj.id].asset.itemSkus[0].serialNumber} of ${statusHash[statusObj.id].asset.totalSKUCount}`
        }
        else{
            return `Owned by ${statusHash[statusObj.id].asset.totalSKUCount} collectors`
        }
    }
}
export const linkCreator=(hit)=>{
  if(hit?.type?.includes("asset")){
    return "skus/asset"
  }
  else if(hit?.type?.includes("pack")){
    return "skus/pack"
  }
  else{
    return "collection"
  }
}