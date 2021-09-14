
function render(data){
				const html = '<div class="coment"><div class="imgbx"><img src="img/coment.jpg" alt=""></div><div class="isi"><h2 class="nama">'+data.nama+'</h2><h3 class="date">'+data.tanggal+'</h3><div class="pesan"><span class="isipesan">'+data.pesan+'</span></div></div></div>';
				

				$('#container').append(html)
}

$(document).ready(function() {
				
				
				var coment =[];
				
				if (!localStorage.comentData) {
								localStorage.comentData =[]; 
				} else {
								coment = JSON.parse(localStorage.comentData);
				}
				
				for(let i=0;i<coment.length;i++){
								render(coment[i]);
				}
				
				$('#hapus').click(function(){
								localStorage.clear();
								location.reload();
				})
				/*  */


var d = new Date(); 	 	 
var time = new Date().getTime();


var date = d.getDate(); 	 	 
var month = d.getMonth(); 	 
var montharr =["Januari","Febuari","Maret","April","Mei","Juni","Juli","Augustus","September","Oktober","November","Desember"]; 	 
month=montharr[month]; 	 	 

var year = d.getFullYear(); 	 	 
var day = d.getDay(); 	 
var dayarr =["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]; 	 
day=dayarr[day]; 	

var hour =d.getHours(); 
var hourarr = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
hour=hourarr[hour];

var min = d.getMinutes(); 	 
var minarr = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"];
min=minarr[min]

var now = day+","+" "+date+" "+month+" "+year+" "+hour+":"+min+" WIB"

				
				/*  */
				$('#kirim').click(function(){
							 
							 var namei = $('#namai').val()
							 var pesani = $('#pesani').val()
							 var conta = $('#container')
							 
							 
								var addObj = {
												"nama": namei,
												"tanggal": now,
												"pesan": pesani,
												"time" : time,
								};
							
							function scrollBottom(){
							 				conta.scrollTop(conta[0].scrollHeight);
								}
								
								if (namei != "" && pesani != "") {
								coment.push(addObj);
								localStorage.comentData = JSON.stringify(coment);
								render(addObj);
								$('#namai').val('');
								$('#pesani').val('');
								scrollBottom();
								}else {
												allrt();
								}
				})

})


function allrt() {
				Swal.fire({ 
				icon: 'error', 
				title: 'Terjadi Kesalahan!!', 
				text: 'Form Boleh Kosong...',
				})
};
