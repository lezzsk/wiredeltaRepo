function actualTime(){

    //running the function every 0.5 sec to get live timer
    setTimeout("actualTime()", 500);

    //date
    var date = new Date();

    var day = date.getDay();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayNum = date.getDate();


    var month = date.getMonth();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var year = date.getFullYear();

    //time
    var hour = date.getHours();
    var hourFormat = "";
    if (hour > 12 ) {
        hour -= 12;
        hourFormat = "PM";
    }else{
        hourFormat = "AM";
    }
    var minute = date.getMinutes();

    //methods for elements access
    document.getElementById("date").innerHTML = dayNum+dateFormat(dayNum)+" "+months[month]+" "+year;
    document.getElementById("time").innerHTML = hour+":"+minute+hourFormat;
    document.getElementById("today").innerHTML = days[day];
}

// this function adds correct format to the day displayed as a number
function dateFormat(dayNum){
    if (dayNum > 3 ){
        return "th";
    }
    if (dayNum == 1 ){
        return "st";
    }
    if (dayNum == 2 ){
        return "nd";
    }
    if (dayNum == 3 ){
        return "rd";
    }
}

//change page title on click
function titleChange() {
    document.getElementById("title").innerHTML = document.getElementById("inputTitle").value;
}
//change background color
function lightGrey() {
    var element = document.body;
    element.classList.remove("darkGrey");
    element.classList.remove("black");
    element.classList.add("lightGrey");

}
function darkGrey() {
    var element = document.body;
    element.classList.remove("lightGrey");
    element.classList.remove("black");
    element.classList.add("darkGrey");

}
function black() {
    var element = document.body;
    element.classList.remove("lightGrey");
    element.classList.remove("darkGrey");
    element.classList.add("black");

}
//animation class
function animation() {
    var element2 = document.getElementById('leftDivBottom');
    element2.classList.add("animationLeft");
    var element3 = document.getElementById('rightDivBottom');
    element3.classList.add("animationRight");

}
//load json
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var tasks = myArr.tasks;

        var dailyTasks = "";
        var tomorrowsTasks = "";
        var i;

        var date = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        for(i = 0; i < tasks.length; i++) {
            //if statement for showing only todays tasks
            if(days[date.getDay()] == tasks[i].day){
                dailyTasks+= '<tr>' + '<td class="tdTime">'+ tasks[i].time + '</td>' + '<td>'+ tasks[i].description + '</td>' + '</tr>';
            }
            if(days[date.getDay()+1] == tasks[i].day){
                tomorrowsTasks+= '<tr>' + '<td class="tdTime">'+ tasks[i].time + '</td>' + '<td>'+ tasks[i].description + '</td>' + '</tr>';
            }
        }
       const table = '<tr>'+ '<th>' + 'Time' + '</th>' + '<th>' + 'Description' + '</th>' + '</tr>';
        document.getElementById("tasks").innerHTML = table + dailyTasks;
        document.getElementById("tomorrowsTasks").innerHTML = table + tomorrowsTasks;
    }
};
xmlhttp.open("GET", "js/tasks.json" , true);
xmlhttp.send();

//weather
