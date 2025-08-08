

export function CombineDateTime(dateStr,timeStr){

    var dateP=dateStr.split('-');
    var year=parseInt(dateP[0]);
    var month =parseInt(dateP[1]);
    var day=parseInt(dateP[2]);
    

    var timeP=timeStr.split(':');
    var hours=parseInt(timeP[0]);
    var minutes=parseInt(timeP[1]);
    
    var dateObejct= new Date(year,month-1,day,hours,minutes);

    return dateObejct.toISOString();

}

