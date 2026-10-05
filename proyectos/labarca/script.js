const categories=[
{id:"entradas",name:"Entradas y ceviches",text:"Entradas frescas y ceviches de la casa.",items:[{n:"Papa a la huancaína",p:12,d:"Papa prensada en crema de ají andino, con huevo y aceituna."},{n:"Leche de tigre",p:20,d:"Esencia de pescado con camote y tortitas de choclo."},{n:"Tiradito en crema de ají",p:25,d:"Láminas de pescado marinadas en leche de tigre sobre crema de ají."},{n:"Ceviche de pescado",p:25,d:"Pescado fresco en leche de tigre, con torta de choclo, cancha, choclo y camote."},{n:"Ceviche mixto",p:30,d:"Pescado y mariscos del día en leche de tigre, con torta de choclo, cancha, choclo y camote."},{n:"Ceviche de la casa",p:30,d:"Pescado y mariscos con crema de ajíes peruanos, crocante de camarones, torta de choclo, cancha, choclo y camote."},{n:"Ceviche 2 tiempos",p:35,d:"Pescado y mariscos con crema de rocoto, pulpo a la parrilla, torta de choclo, cancha, choclo y camote."}]},
{id:"fondos",name:"Fondos y fettuccinis",text:"Platos fuertes, tacu tacus y pastas.",items:[{n:"Lomo saltado",p:30,d:"Lomo fino flambeado con verduras al wok, salsa de miglace, papas andinas y arroz."},{n:"Saltado tres sabores",p:33,d:"Lomo fino, pollo, camarones y verduras flameadas con salsa de miglace, papas andinas y arroz."},{n:"Chicharrón de pollo",p:25,d:"Pollo crocante marinado en salsa de mostaza, con papas fritas y arroz."},{n:"Chicharrón de pescado",p:25,d:"Pescado crocante marinado en salsa de mostaza, con yucas y sarza criolla."},{n:"Arroz con mariscos",p:30,d:"Mariscos frescos flameados con vino blanco, arroz y salsa de camarones."},{n:"Pollo a la plancha",p:25,d:"Corte de pollo sazonado con finas hierbas, papas fritas y arroz."},{n:"Pescado a lo macho",p:35,d:"Pescado sazonado con finas hierbas, salsa de mariscos con toque picante y arroz."},{n:"Lomo en salsa de champiñón",p:33,d:"Lomo fino con salsa de champiñón y puré de papa andina."},{n:"Tacu tacu con lomo saltado",p:33,d:"Tacu tacu crocante con lomo fino flameado."},{n:"Tacu tacu con pescado a lo macho",p:36,d:"Tacu tacu con pescado, pollo o lomo fino bañado en salsa de mariscos con toque picante."},{n:"Fettuccini saltado tres sabores",p:30,d:"Lomo fino, pollo, camarones, verduras y pasta flameados con vino tinto en wok."},{n:"Fettuccini a la parisienne",p:28,d:"Pollo y champignon con salsa blanca, pasta y queso parmesano."}]},
{id:"sopas",name:"Sopas",text:"Sopas marinas y criollas.",items:[{n:"Parihuela de mariscos",p:35,d:"Pesca fresca y mariscos flameados en chicha de jora, salsa de camarón y arroz."},{n:"Sudado de pescado",p:30,d:"Pesca fresca y verduras flameadas con chicha de jora, fondo de pescado y arroz."}]},
{id:"guarniciones",name:"Guarniciones",text:"Acompañamientos.",items:[{n:"Arroz blanco",p:5,d:"Porción de arroz blanco."},{n:"Papas andinas",p:5,d:"Porción de papas andinas."},{n:"Ensalada",p:4,d:"Guarnición fresca."}]},
{id:"mocktails",name:"Mocktails",text:"Bebidas sin alcohol.",items:[{n:"Jarra de limonada",p:10,d:"Copa de limonada a S/ 5."},{n:"Jarra de maracuyá",p:10,d:"Copa de maracuyá a S/ 5."},{n:"Jarra de aguaymanto con mandarina",p:18,d:"Copa de aguaymanto con piña a S/ 9."},{n:"Jarra de piña con aguaymanto",p:18,d:"Copa de piña con aguaymanto a S/ 9."},{n:"Jarra de chicha morada",p:15,d:"Copa de chicha morada a S/ 7."}]},
{id:"cocktails",name:"Cocktails",text:"Clásicos de bar.",items:[{n:"Piña colada",p:20,d:"Piña Golden, ron cubano y mix de crema de coco."},{n:"Chilcano",p:17,d:"Disponible en maracuyá y clásico."},{n:"Pisco sour",p:18,d:"Disponible en maracuyá y clásico."},{n:"Cuba libre",p:17,d:"Cítricos, ron cubano y Coca-Cola."},{n:"Vodka sunrise",p:18,d:"Granadina, jugo de naranja y vodka."}]},
{id:"bebidas",name:"Bebidas",text:"Bebidas y cervezas.",items:[{n:"Agua",p:3,d:"Agua."},{n:"Gaseosa 1/2",p:4,d:"Gaseosa personal."},{n:"Gordita",p:6,d:"Gaseosa gordita."},{n:"Gaseosa 1 litro",p:10,d:"Gaseosa familiar."},{n:"Cuzqueña",p:11,d:"Cerveza Cuzqueña."},{n:"Pilsen",p:10,d:"Cerveza Pilsen."}]},
{id:"parrillas",name:"Parrillas",text:"Carbón, cortes y sabor intenso.",items:[{n:"Pulpo a la parrilla con verduras al carbón",p:33,d:"Pulpo marinado en salsa parrillera, con verduras a la parrilla y papas andinas."},{n:"Anticuchos tres sabores",p:30,d:"Lomo fino, pollo y pescado con papas andinas, choclito flambeado y salsa huancaína."},{n:"Lomo fino a la parrilla",p:38,d:"Corte de lomo fino con papas andinas y ensalada."},{n:"Pollo grillado",p:25,d:"Pollo sazonado con finas hierbas, papas andinas y ensalada."},{n:"Chuleta de cerdo al grill",p:28,d:"Chuleta de cerdo sazonada con finas hierbas, papas andinas y ensalada."},{n:"Bife ancho",p:33,d:"Bife ancho sazonado con finas hierbas, papas andinas y ensalada."},{n:"Bife angosto",p:33,d:"Bife angosto sazonado con finas hierbas, papas andinas y ensalada."},{n:"Parrilla duo",p:50,d:"Chuleta de cerdo, pollo al grill y chorizo parrillero con papas andinas, choclito y ensalada."},{n:"Parrilla para tres",p:79,d:"Lomo fino, pollo al grill, chuleta a la parrilla y chorizo con papas, verduras al carbón y ensalada."},{n:"Parrilla familiar",p:120,d:"Lomo fino, bife angosto, pollo, chuleta de cerdo, pulpo y chorizo con guarniciones familiares."}]},
{id:"duos",name:"Dúos y tríos",text:"Combinaciones para compartir.",items:[{n:"Arroz con mariscos y ceviche",p:35,d:"Combinación marina de arroz con mariscos y ceviche."},{n:"Chicharrón de pescado y ceviche mixto",p:35,d:"Pescado crocante acompañado de ceviche mixto."},{n:"Carretillero",p:20,d:"Combinación carretillera de la casa."},{n:"Arroz con marisco, ceviche y chicharrón de pescado",p:50,d:"Trío marino contundente."},{n:"Arroz con marisco, leche de tigre y chicharrón",p:43,d:"Trío con leche de tigre y chicharrón."},{n:"Carretillero trío",p:25,d:"Trío carretillero de la casa."}]}
];
const grid=document.getElementById("menu-grid");
const tabs=document.getElementById("menu-tabs");
const summary=document.getElementById("menu-summary");
const search=document.getElementById("menu-search");
let activeCategory=categories[0].id;
const clean=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const money=v=>`S/ ${String(v).replace(".",",")}`;
const icons={
entradas:`<svg viewBox="0 0 64 64"><path d="M6 32c15-16 36-16 52 0-16 16-37 16-52 0Z"/><path d="M44 22v20"/><circle cx="20" cy="32" r="2"/></svg>`,
fondos:`<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="11"/><path d="M8 8v48M56 8v48"/></svg>`,
sopas:`<svg viewBox="0 0 64 64"><path d="M12 32h40v7a15 15 0 0 1-15 15H27a15 15 0 0 1-15-15v-7Z"/><path d="M20 18c-4 5 4 7 0 12M32 18c-4 5 4 7 0 12M44 18c-4 5 4 7 0 12"/><path d="M15 56h34"/></svg>`,
guarniciones:`<svg viewBox="0 0 64 64"><path d="M14 33h36l-4 20H18l-4-20Z"/><path d="M20 31c4-8 20-10 25 0"/><path d="M25 22h14"/></svg>`,
mocktails:`<svg viewBox="0 0 64 64"><path d="M18 12h28l-6 36H24L18 12Z"/><path d="M21 24h22M42 12l8-7"/><path d="M28 48v8h8v-8"/></svg>`,
cocktails:`<svg viewBox="0 0 64 64"><path d="M16 8h32L34 35v17h10v4H20v-4h10V35L16 8Z"/><path d="M20 18h24"/></svg>`,
bebidas:`<svg viewBox="0 0 64 64"><path d="M20 10h24v44H20V10Z"/><path d="M24 18h16M24 46h16"/></svg>`,
parrillas:`<svg viewBox="0 0 64 64"><path d="M32 58c12-5 19-13 18-25-1-10-8-18-17-27 1 11-5 15-11 22-7 8-7 22 10 30Z"/><path d="M31 55c7-4 10-9 9-16-1-5-4-9-8-13 0 7-8 10-8 19 0 4 2 8 7 10Z"/></svg>`,
duos:`<svg viewBox="0 0 64 64"><path d="M20 12h18l-4 25a11 11 0 0 1-10 9 11 11 0 0 1-10-9l-4-25h10Z"/><path d="M44 18h10l-3 20a9 9 0 0 1-8 8 9 9 0 0 1-8-8"/><path d="M24 46v10M18 56h12M44 46v10M38 56h12"/></svg>`
};
function iconSvg(id){return icons[id]||icons.fondos}
function renderTabs(){tabs.innerHTML=categories.map(cat=>`<button class="menu-tab ${cat.id===activeCategory?"active":""}" data-tab="${cat.id}"><span class="tab-icon">${iconSvg(cat.id)}</span><span>${cat.name}</span><small>${cat.items.length}</small></button>`).join("")}
function render(){const q=clean(search.value.trim());renderTabs();if(q){const results=[];categories.forEach(cat=>cat.items.forEach(item=>{if(clean(`${item.n} ${item.d} ${cat.name}`).includes(q))results.push({...item,cat:cat.name,catId:cat.id})}));summary.innerHTML=`<span>Resultados</span><h3>${results.length}</h3><p>Platos encontrados.</p>`;grid.className="menu-grid search-mode";grid.innerHTML=results.length?results.map(item=>dishCard(item,{id:item.catId,name:item.cat})).join(""):`<div class="empty-state">No se encontró ese plato. Prueba con otra palabra.</div>`;return}const cat=categories.find(item=>item.id===activeCategory)||categories[0];summary.innerHTML=`<span>Selección</span><h3>${cat.name}</h3><p>${cat.text}</p><div class="summary-mark"><span class="tab-icon">${iconSvg(cat.id)}</span><strong>${cat.items.length}</strong><small>opciones</small></div>`;grid.className="menu-grid";grid.innerHTML=cat.items.map(item=>dishCard(item,cat)).join("")}
function dishCard(item,cat){return `<button class="dish-card" data-dish="${item.n}" data-cat="${cat.id}"><span class="dish-top"><span><small>${cat.name}</small><h4>${item.n}</h4><p>${item.d}</p></span><strong>${money(item.p)}</strong></span></button>`}
function openDish(name,id){const cat=categories.find(item=>item.id===id);const dish=cat.items.find(item=>item.n===name);document.getElementById("dish-tag").textContent=cat.name;document.getElementById("dish-name").textContent=dish.n;document.getElementById("dish-desc").textContent=dish.d;document.getElementById("dish-price").textContent=money(dish.p);document.getElementById("dish-extra").innerHTML="";openModal("dish-modal")}
function showPage(id){document.querySelectorAll(".page").forEach(page=>page.classList.toggle("active",page.id===`page-${id}`));document.querySelectorAll("[data-page]").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===id));if(window.innerWidth<820)window.scrollTo({top:0,behavior:"smooth"});document.body.classList.remove("nav-open")}
function openModal(id){const modal=document.getElementById(id);modal.classList.add("show");modal.setAttribute("aria-hidden","false")}
function closeModal(id){const modal=document.getElementById(id);modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
tabs.addEventListener("click",event=>{const tab=event.target.closest("[data-tab]");if(!tab)return;activeCategory=tab.dataset.tab;search.value="";render()});
grid.addEventListener("click",event=>{const card=event.target.closest(".dish-card");if(card)openDish(card.dataset.dish,card.dataset.cat)});
search.addEventListener("input",render);
document.querySelectorAll("[data-page]").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));
document.querySelector(".mobile-menu").addEventListener("click",()=>document.body.classList.toggle("nav-open"));
document.querySelectorAll("[data-dish-close]").forEach(button=>button.addEventListener("click",()=>closeModal("dish-modal")));
document.querySelectorAll(".modal").forEach(modal=>modal.addEventListener("click",event=>{if(event.target===modal)closeModal(modal.id)}));
function openHashPage(){
const page=location.hash.replace("#","");
if(page){
showPage(page);
}
}

render();
openHashPage();
window.addEventListener("hashchange",openHashPage);

function openMobileMenuOnHome(){
const isMobile=window.innerWidth<=820;
const hasHash=location.hash.length>0;

if(isMobile&&!hasHash){
document.body.classList.add("nav-open");
}
}

openMobileMenuOnHome();
