<script>
	<body>

var classes;
		function highlighter() {
			var classNames = document.getElementById("classes").value ;
			switch(classNames){
			case 'Math' :
				classes = 'mat' ;
				break;
				
			case 'Science' :
			    classes = 'sci' ;
		        break;
				
			case 'English' :
				classes = 'eng' ;
				break;
				
			case 'French' :
				classes = 'fr' ;
				break;
				
			case 'Computer Programming' :
				classes = 'prog' ;
				break;
				
			case 'History' :
				classes = 'his' ;
				break;
				
			case 'Religion' :
				classes = 'rel' ;
				break;
				
			case 'Architecture' :
				classes = 'arch' ;
				break;
				
			case 'Level Assembly' :
				classes = 'LA' ;
				break;
				
			case 'Homeroom' :
				classes = 'hr' ;
				break;
				
			case 'Physical Education' :
				classes = 'PE' ;
				break;
				
			default:
				console.log("cannot be found");
			}
			var saveVariables = document.getElementsByClassName(classes);
			for (d=0 ; i<saveVariables.length ; d++) {
				saveVariables[d].style.backgroundColor = "orange" ;
			}
		}
	</body>
</script>
