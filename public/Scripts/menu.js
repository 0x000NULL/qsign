window.onload = function() {
	var x = document.getElementById("menu");
	var createform = document.createElement('form');
	x.appendChild(createform);
	
	var bCreate = document.createElement('a');
	bCreate.innerHTML = "Create";
	createform.appendChild(bCreate);
	bCreate.addEventListener("click", bCreate);
	
	bCreate.onclick = function() {
		var nameLabel = document.createElement('label'); // Adds variables for necessary creation parameters.
		nameLabel.innerHTML = "Your Name:";
		
		var nameInput = document.createElement('input');
		nameInput.setAttribute("type", "text");
		nameInput.setAttribute("name", "nameInput");
		nameInput.setAttribute("id", "nameInput");
		
		var gradeLabel = document.createElement('label');
		gradeLabel.innerHTML = "Your Grade:";
		
		var gradeInput = document.createElement('input');
		gradeInput.setAttribute("type", "text");
		gradeInput.setAttribute("name", "gradeInput");
		gradeInput.setAttribute("id", "gradeInput");
		
		var back = document.createElement('button');
		back.innerHTML = "Back";
		
		back.onclick = function() {
			createform.remove();
			redo();
		}
		
		var cSubmit = document.createElement('button');
		cSubmit.innerHTML = "Submit";
		
		cSubmit.onclick = function(callback) {
			var nameData = document.getElementById("nameInput");
			var gradeData = document.getElementById("gradeInput");
			callback(nameData);
			callback(gradeData);
			generate();
		}
		
		createform.replaceChild(nameLabel, bCreate); // Removes all previous form choices.
		createform.replaceChild(nameInput, orTxt);
		createform.replaceChild(gradeLabel, bSign);
		createform.appendChild(gradeInput);
		createform.appendChild(back);
		createform.appendChild(cSubmit);
	}

	var orTxt = document.createElement('p');
	orTxt.innerHTML = "- or -";
	createform.appendChild(orTxt);

	var bSign = document.createElement('a');
	bSign.innerHTML = "Sign";
	createform.appendChild(bSign);
	bSign.addEventListener("click", bSign);
	
	bSign.onclick = function() {
		var signLabel = document.createElement('label'); // Adds variables for necessary creation parameters.
		signLabel.innerHTML = "Sign Code:";
		
		var signCode = document.createElement('input');
		signCode.setAttribute("type", "text");
		signCode.setAttribute("name", "signCode");
		signCode.setAttribute("id", "signCode");
		
		var back = document.createElement('button');
		back.innerHTML = "Back";
		
		back.onclick = function() {
			createform.remove();
			redo();
		}
		
		var sSubmit = document.createElement('button');
		sSubmit.innerHTML = "Submit";
		
		sSubmit.onclick = function() {
			var signCode = document.getElementById("signCode");
			return signCode;
		}
		
		createform.replaceChild(signLabel, bCreate); // Removes all previous form choices.
		createform.replaceChild(signCode, orTxt);
		createform.replaceChild(back, bSign);
		createform.appendChild(sSubmit);
	}
}

function redo() {
	var x = document.getElementById("menu");
	var createform = document.createElement('form');
	x.appendChild(createform);
	
	var bCreate = document.createElement('a');
	bCreate.innerHTML = "Create";
	createform.appendChild(bCreate);
	bCreate.addEventListener("click", bCreate);
	
	bCreate.onclick = function() {
		var nameLabel = document.createElement('label'); // Adds variables for necessary creation parameters.
		nameLabel.innerHTML = "Your Name:";
		
		var nameInput = document.createElement('input');
		nameInput.setAttribute("type", "text");
		nameInput.setAttribute("name", "nameInput");
		nameInput.setAttribute("id", "nameInput");
		
		var gradeLabel = document.createElement('label');
		gradeLabel.innerHTML = "Your Grade:";
		
		var gradeInput = document.createElement('input');
		gradeInput.setAttribute("type", "text");
		gradeInput.setAttribute("name", "gradeInput");
		gradeInput.setAttribute("id", "gradeInput");
		
		var back = document.createElement('button');
		back.innerHTML = "Back";
		
		back.onclick = function() {
			createform.remove();
			redo();
		}
		
		var cSubmit = document.createElement('button');
		cSubmit.innerHTML = "Submit";
		
		cSubmit.onclick = function() {
			var nameData = document.getElementById("nameInput");
			var gradeData = document.getElementById("gradeInput");
			console.log(nameData + " " + gradeData);
		}
		
		createform.replaceChild(nameLabel, bCreate); // Removes all previous form choices.
		createform.replaceChild(nameInput, orTxt);
		createform.replaceChild(gradeLabel, bSign);
		createform.appendChild(gradeInput);
		createform.appendChild(back);
		createform.appendChild(cSubmit);
	}

	var orTxt = document.createElement('p');
	orTxt.innerHTML = "- or -";
	createform.appendChild(orTxt);

	var bSign = document.createElement('a');
	bSign.innerHTML = "Sign";
	createform.appendChild(bSign);
	bSign.addEventListener("click", bSign);
	
	bSign.onclick = function() {
		var signLabel = document.createElement('label'); // Adds variables for necessary creation parameters.
		signLabel.innerHTML = "Sign Code:";
		
		var signCode = document.createElement('input');
		signCode.setAttribute("type", "text");
		signCode.setAttribute("name", "signCode");
		signCode.setAttribute("id", "signCode");
		
		var back = document.createElement('button');
		back.innerHTML = "Back";
		
		back.onclick = function() {
			createform.remove();
			redo();
		}
		
		var sSubmit = document.createElement('button');
		sSubmit.innerHTML = "Submit";
		
		sSubmit.onclick = function() {
			var signCode = document.getElementById("signCode");
			return signCode;
		}
		
		createform.replaceChild(signLabel, bCreate); // Removes all previous form choices.
		createform.replaceChild(signCode, orTxt);
		createform.replaceChild(back, bSign);
		createform.appendChild(sSubmit);
	}
}

function generate() {
	var name = nameData;
	var grade = gradeData;
	var randomNumber = Math.floor(Math.random() * (0 - 9 + 1)) + 0;
	if(!fs.exists(randomNumber)){
		fs.mkdir(randomNumber);
		try {
			await fs.copy('../Images/img', 'randomNumber');
			console.log('success!');
		} 	
		catch (err) {
			console.error(err);
		}
		return res.redirect
		
		var stream - fs.createWriteStream('my.js');
		stream.once('open', (name, grade) => {
			stream.write('var ybName = name;');
			stream.write('var ybGrade = grade;');
			stream.end();
		}
	}	
}
