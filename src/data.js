export const API_KEY  = '1111111111111111111';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000) + "M";
    }
    else if(value>=100000)
    {
            return Math.floor(value/1000) + "K";
    }
    else {
        return value;
    }
}
