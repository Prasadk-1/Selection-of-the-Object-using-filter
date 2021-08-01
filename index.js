const students = [
    {name: "Adhi", gender:"male"},
    {name: "Ahmed", gender:"male"},
    {name:"Rutika Kadam", gender:"female"},
    {name:"Priyadarshani", gender:"female"}
    ];
    
    let femaleName = [];
    let nameInitialA =[];
    
    let Females = students.filter(function(gen){
        if (gen.gender==="female"){
            femaleName.push(gen.name);
        }
    });
   
    let nameStartsWithA = students.filter(function(initial){
      if(initial.name.charAt(0)==="A"){
          nameInitialA.push(initial.name);
      }
    });
   
    let noOfMales =students.filter(function(gen){
      return gen.gender==="male";
    });

  
     console.log(femaleName);
     console.log(nameInitialA);
     console.log(noOfMales.length);
