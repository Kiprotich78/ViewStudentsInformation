setRequests();
function setRequests() {
  getClasses();
  disableInpsect();
}

let studentId = 0;
function getClasses() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./php/getClasses.php", true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      toggleStudentClass[0].innerHTML = this.responseText;
    }
  };
  xhr.send();
}

function getStudents(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/getStudents.php", true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      toggleStudentClass[1].innerHTML = this.responseText;
      toggleStudentClass[1].childNodes.forEach((element) => {
        element.addEventListener("click", () => {
          studentId = element.getAttribute("data-stud-id");
          getStudentsData(studentId);
          toggleCategory[1].value = element.textContent;
        });
      });
    }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`data=${data}`);
}

function getStudentsData(studentId) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/getStudentsData.php", true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        tableData.innerHTML = this.responseText;
    }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`id=${studentId}`);
}

function disableInpsect() {
  function disableRightClick() {
    if (event.button == 2) {
      alert("You are not allowed to right click on this page");
    }
  }
  document.onmousedown = disableRightClick
   document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
     }
     if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
      return false;
       }

  }
}