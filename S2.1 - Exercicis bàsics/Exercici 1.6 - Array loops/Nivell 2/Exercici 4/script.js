const object = {
    nom: "Ona",
    edat: 25,
    ciutat: "Barcelona"
};

for(let clau in object){
    console.log(clau + ": " + object[clau]);
}