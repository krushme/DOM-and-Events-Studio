// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    // document.getElementById('takeoff').addEventListener('click', function(){
    //     let response = window.confirm("Confirm that the shuttle is ready for takeoff!")
    //     if (response) {
    //         document.getElementByID('flightStatus').innerText = "Shuttle in flight.";
    //         document.getElementByID('shuttleBackground').setAttribute('style', 'background-color: blue');
    //         document.getElementByID('spaceShuttle').innerText = '10000';
    //     }
    // })
    
    takeoff.addEventListener('click', event => {
        confirm("Confirm that the shuttle is ready for takeoff.");
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.setAttribute('style', 'background-color: blue');
        spaceShuttleHeight.innerText = '10000';
     })

     landing.addEventListener('click', event => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.setAttribute('style', 'background-color: green');
        spaceShuttleHeight.innerText = '0';
     })

     missionAbort.addEventListener('click', event => {
        let response = confirm("Confirm that you want to abort the mission.");
        if(response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.setAttribute('style', 'background-color: green');
            spaceShuttleHeight.innerText = '0';
        }
     })

    });


{/* <button id = "takeoff">Take off</button>
            <button id = "landing">Land</button>
            <button id = "missionAbort">Abort Mission</button> */}