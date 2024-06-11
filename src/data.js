export const API_KEY  = 'AIzaSyD_kqDGRXnYiZSc9fengwm6NELRdzKy62w';

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