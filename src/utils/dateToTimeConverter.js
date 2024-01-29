const minutesZeroCon = (hours, minutes, seconds) => {
    if(seconds===0){
        return `${hours}h`
    }
    else return `${hours}h ${seconds}s`
}

const dayZeroCon = (hours, minutes, seconds) => {
    if(hours===0){
        if(minutes===0){
            if(seconds===0){
                return `${seconds}s`
            }
            else return `${seconds}s`
        }
        else if(seconds===0){
            return `${minutes}m`
        }
        else return `${minutes}m ${seconds}s`
    }
    else if(minutes===0){
        return minutesZeroCon()
    }
    else{
        if(seconds===0){
            return `${hours}h ${minutes}m`
        }
        else return `${hours}h ${minutes}m ${seconds}s`  
    }
}

const hoursZeroCon = (minutes, seconds, days) => {
    if(minutes===0){
        if(seconds===0){
            return `${days}d`
        }
        else return`${days}d ${seconds}s`
    }
    else{
        if(seconds===0){
            return `${days}d ${minutes}m`
        }
        else return`${days}d ${minutes}m ${seconds}s`
    }
}

export const dateToTimeConverter=(date)=>{
    const offerDate=new Date(date).getTime()
    const now=new Date().getTime()
    const distance=now-offerDate
    const days=(Math.floor((distance/(1000*60*60*24))))
    const hours=(Math.floor((distance%(1000*60*60*24)/(1000*60*60))))
    const minutes=(Math.floor((distance%(1000*60*60))/(1000*60)))
    const seconds=(Math.floor((distance%(1000*60))/1000))


    if(days===0 && hours===0 && minutes===0 && seconds===0){
        return `${seconds}s`
    }
    if(days===0) {
        return dayZeroCon(hours, minutes, seconds)
    }
    else if(hours===0){
        return hoursZeroCon(minutes, seconds, days)
    }
    else if(minutes===0){
        if(seconds===0){
            return `${days}d ${hours}h`
        }
        else return`${days}d ${hours}h ${seconds}s`
    }
    else if(seconds===0){
        return`${days}d ${hours}h ${minutes}m`
    }
    else{
        return`${days}d ${hours}h ${minutes}m ${seconds}s`
    }
}