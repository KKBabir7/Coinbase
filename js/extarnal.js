/////////////........scroll js
		   
						$(window).scroll(function(){
					$('nav').toggleClass('scrolled', $(this).scrollTop() >20);
				});
/////////////........all manu active js		
			
				var header = document.getElementById("btn");
				var btns = header.getElementsByClassName("btn");
				for (var i = 0; i < btns.length; i++) {
				  btns[i].addEventListener("click", function() {
				  var current = document.getElementsByClassName("active");
				  current[0].className = current[0].className.replace(" active", "");
				  this.className += " active";
				  });
				}
			
/////////////........mobile menu slide js
		    
				function menu(){
				var side=document.getElementById("nav-section-m");
				var sideee=document.getElementById("bg");
				   side.style.left="0px";
				   side.style.background="rgba(255,255,255,1)";
				   sideee.style.left="0px";
				   sideee.style.background="rgba(0,0,0,0.4)";
				   
				}
				function remove(){
					 document.getElementById("nav-section-m").style.left="-300px";
					 var sidi=document.getElementById("bg");
				   
				   sidi.style.left="-1200px";
				}
				
		 

/////////////........currancy convator js
			
		   
			    var gbp, usd;
				function init()
				{
					gbp = document.getElementById("GBP");
					btc = document.getElementById("BTC");
				   
				}

				function gbpfunc()
				{
					btc.value = parseFloat(gbp.value) * 0.0001192088;
					
				}



				function btcfunc()
				{
					gbp.value = parseFloat(btc.value) * 2.03032;
				   
				}

				init();
		   
/////////////........popup or modal
			
				function send(){
				var modal = document.getElementById("myModal");
				var span = document.getElementsByClassName("close")[0];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
	
		   