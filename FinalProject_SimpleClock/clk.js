function dsplyTime() {
// The new keyword sets the properties to zero I think
// and date() is a constructor that has a built in representation of time in miliseconds
    const date = new Date();

// Return hours returns hours 0 to 23
    let h = date.getHours(); 

// Basically same as hours just for minutes but 0 to 59
    let m = date.getMinutes(); 

// Basically same as minutes just for seconds also 0 to 59
    let s = date.getSeconds(); 

// This is the variable for anti meridiem which will tell you well you know
// Early or late yawns 
    let meridiem = "AM";
    
// This if statement sets the hour to 12 as soon as it hits zero
// there is no zero with hours on a clock
    if(h == 0){
        h = 12;
    }
    
// This if statement says if h is greater than 12 subtract 12 from h
// resulting in the hours for the afternoon to be displayed and
// changin the value of meridiem to display PM.
    if(h > 12){
        h = h - 12;
        meridiem = "PM";
    }
    
// I am still wrapping my head around the different ways to write this part
// So I had to look it up but I gave it a few tries first and was getting 
// some good results but they would never work together as a whole.
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

// These interact with the dom to change and reflect the new time visually
    document.getElementById("ClkDsply").innerText = time = h + ":" + m + ":" + s + " " + meridiem;
    document.getElementById("ClkDsply").textContent = time = h + ":" + m + ":" + s + " " + meridiem;

// setTimeout pauses the execution of the display for 1 second
// so every second your seeing a static image of a clock with a new time 
// Technically an illusion so tehnically magic
    setTimeout(dsplyTime, 1000);
    
}
// calls the function itself
dsplyTime();