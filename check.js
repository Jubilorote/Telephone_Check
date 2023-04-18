function telephoneCheck(str) {
  if(str[0]==='1'&& str.replace(/\D/g, '').length === 11){
    if(str[2] ==='('&& str[6]===')'){
      return true;
    }
    if(str[5]==='-'&& str[9]==='-'){
      return true;
    }
    if(str[1]==='('&&str[5]===')'){
      return true;
    }
    if(str[1]==' '&&str[5]===' '&&str[9]==' '){
      return true;
    }else{return false}
  }
  if(str.replace(/\D/g, '').length === 10){
    if(str[0] ==='('&& str[4]===')'&& str.length=== 13){
      return true;
    }
    if(str[3]==='-'&& str[7]==='-'){
      return true;
    }
    if(str[0]==' '&&str[4]===' '&&str[8]==' '){
      return true;
    }
    if(str.length === 10){
      return true;
    }else{return false;}
  }else {return false;}
}

telephoneCheck("555-555-5555");
