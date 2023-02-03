
var repSets = [12,6,6,1,3,"failure"]

const form = document.querySelector("form");

function makeUL(array) {
// Create the list element:
var list = document.createElement('ul');

for(var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(Math.round(array[i])+"x"+repSets[i]));

    // Add it to the list:
    list.appendChild(item);
}

// Finally, return the constructed list:
return list;
}

function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.getElementById('visual').appendChild(img);
   }



function calcMax(form){
    var max = document.getElementById("1rm").value;
    var bw = document.getElementById("bw").value;

    

    var options = [
        set0 = [45,max*.60,max*.75,max,max*.85,135],
        
    ];

    console.log(options[0]);

//display lift
if(document.getElementById('bench').checked == true) {   
        console.log("bench");
        displayImage("lifticons/bench-press.png",200,200);
} else if(document.getElementById('squat').checked == true) {   
      console.log("squat");
      displayImage("lifticons/squats.png",200,200);
}
 else{
      displayImage("lifticons/deadlift.png",200,200);
}

    //makes list
    document.getElementById('routine').appendChild(makeUL(options[0]));

    
}