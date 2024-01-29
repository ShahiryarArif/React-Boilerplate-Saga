export const footerContentSetter=(collection)=>{
    if(collection?.status==="startCollection"){
      return "Start this collection"
    }
    else if(collection?.status==="inProgress" || collection?.status==="Expired"){
      if(collection?.userCollectionCount <=collection?.totalCollectionCount){
        return " Items Collected"
      }
      return ""
    }
    else if(collection?.status==="Completed"){
      return "Click to redeem reward"
    }
    else if(collection?.status==="Redeemed"){
      let date=new Date(collection?.completionDateTime).getDate()
      let month=new Date(collection?.completionDateTime).getMonth()+1
      let year=new Date(collection?.completionDateTime).getFullYear()
      return `Completed at ${date}/${month}/${year}`
    }
    else{
      return ""
    }
}
export const strongContentSetter=(collection)=>{
    if(collection?.status==="inProgress" ||collection?.status==="Expired"){
      if(collection?.userCollectionCount <= collection.totalCollectionCount){
        return `${collection?.userCollectionCount}/${collection?.totalCollectionCount}`
      }
      else{
        return ""
      }
    }
    else return ""

  }