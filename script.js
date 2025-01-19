function getFormvalue() {
    //Write your code here
	 let fname = document.querySelector('input[name="fname"]').value; 
  let lname = document.querySelector('input[name="lname"]').value; 

	let message = `${fname} ${lname}`;
		alert(message);
}
