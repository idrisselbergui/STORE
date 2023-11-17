 let items_holder=document.getElementById("items");
 let items=[
   {
      nom:"tea",
      image:"images/cafe.jpg",
      prix:"10"
   },
   {
      nom:"black_cafe",
      image:"images/cafe.jpg",
      prix:"10"
      
   },
   {
      nom:"Piza",
      image:"images/cafe.jpg",
      prix:"30"
   },
   {
      nom:"cafe",
      image:"images/cafe.jpg",
      prix:"10"
   },
   {
      nom:"Tajine",
      image:"images/cafe.jpg",
      prix:"50"
   },
   {
      nom:"Tajine2",
      image:"images/cafe.jpg",
      prix:"50"
   }
    
 ]

 var orders=[

 ]
 load_image();
 function load_image(){
   items.forEach((item)=>{
      let image=document.createElement("img");
      image.setAttribute("width","140px");
      image.setAttribute("height","120px");
      image.setAttribute("src",item.image);
      let info_holder=document.createElement("div");
      info_holder.setAttribute("onclick",`place_order(${item.nom})`)
      info_holder.setAttribute("id",item.nom)
      let item_name=document.createElement("h3");
      item_name.textContent=item.nom+"  "+item.prix+" dh";
      info_holder.classList="infoholder";
      info_holder.appendChild(image);
      info_holder.appendChild(item_name);
      items_holder.appendChild(info_holder);
      items_holder.appendChild(info_holder);
   })
    

 }
   function place_order(identifient){

      console.log(identifient);
      var itm;
      items.forEach((item)=>{
         if( item.nom===identifient.id){
            itm=item;
         }
         
      })
      console.log(itm)
      
      const new_item_to_add = [itm];
      let my_table=document.getElementById("my_table")
      orders.forEach((element)=>{
         let new_order=document.createElement("tr")
         element.forEach((info)=>{
            let td=document.createElement("td")
            td.textContent=info;
            console.log(info)
            new_order.appendChild(tr);
         })
         my_table.appendChild(new_order)

      })
      
      
      
   
} 