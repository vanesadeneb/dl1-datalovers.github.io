// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  return data.filter(condition);
  
};

export const sortData = (data, sortOrder) => {
  if(sortOrder === "a_z"){
    return data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }else{
    return data.reverse();
  }
};

