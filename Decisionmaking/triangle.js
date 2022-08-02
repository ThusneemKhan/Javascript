// Check whether the triangle is Acute or Obtuse
const Triangle_Check = (A,B,C) => {
 
    let res;   
     if (A<90 && B<90 && C<90){
       res = "acute";
     }
      else {
        res = "obtuse";
      }
      return res;
  };
  
  