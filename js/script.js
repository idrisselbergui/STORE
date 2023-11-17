 let items_holder=document.getElementById("items");
 let table_header=' <caption>Orders in progress</caption><tr><td>Order</td><td>Qte</td><td>Prix</td> <td>Total</td> </tr>' ;
 let total_prix=document.getElementById("total_prix");
let total=0;
 let items=[
   {
      nom:"tea",
      image:"images/tea.jpg",
      prix:"10"
   },
   {
      nom:"black_cafe",
      image:"images/cafe.jpg",
      prix:"10"
      
   },
   {
      nom:"Pizza",
      image:"images/pizza.jpg",
      prix:"30"
   },
   {
      nom:"cafe",
      image:"images/cafe2.jpg",
      prix:"10"
   },
   {
      nom:"taggine",
      image:"images/taggin2.jpg",
      prix:"50"
   },
   {
      nom:"G_taggine",
      image:"images/taggine.jpg",
      prix:"80"
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

   var itm;
   items.forEach((item)=>{
      if( item.nom===identifient.id){
         itm=item;
      }
      
   })
  

   const new_item_to_add = [itm.nom,1,itm.prix,itm.prix];
   if(orders.length==0){
      orders.push(new_item_to_add);
      total+=new_item_to_add[3]/1 ;
   }
   else{
      let etat=false;
      orders.forEach((x)=>{
         
         if(x[0]===new_item_to_add[0]){
            x[1]=Number(x[1])+1;
            x[3]=x[1]*x[2]
            
            total+=x[3]/1 ;
            etat=true;
         }
         
      })
      if(!etat){ 
         orders.push(new_item_to_add);
         total+=new_item_to_add[3]/1;
      }
      
        
      
      
      }
      total_prix.innerHTML=total;
      console.log(total)
      let my_table=document.getElementById("my_table")
      let table_data=document.getElementsByClassName("table_child")
      my_table.innerHTML=table_header;
      orders.forEach((el)=>{

      let new_row=document.createElement("tr")
      new_row.setAttribute("class","table_child")
      new_row.setAttribute("id",el[0]+"row")
      el.forEach((info)=>{
         let td=document.createElement("td")
         td.textContent=info;
         new_row.appendChild(td);
      })
      my_table.appendChild(new_row)

   })
   
   
   
   
} 