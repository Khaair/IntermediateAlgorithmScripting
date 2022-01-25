function myReplace(str, before, after) {
    //Find the position of the letter whose case we need to check and now check if the letter at that position is equal to uppercase
    if (str.charAt(str.indexOf(before))===str.charAt(str.indexOf(before)).toUpperCase())
    //if yes make the first letter of the replacement word alo uppercase and join with the rest of the word
    {
    return str.replace(before, after.charAt(0).toUpperCase()+ after.substr(1).toLowerCase())
    }
    //if no make the first letter of the replacement word lowercase and join with rest of the word
    else{
    return str.replace(before, after.charAt(0).toLowerCase()+ after.substr(1).toLowerCase())
    }
    };
    
    console.log(myReplace("His name is Tom", "Tom", "john"))