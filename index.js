'use strict';

document.querySelector('#update').addEventListener('click',(event)=>{

    // input
    const taskText = document.querySelector('#task-text');

    if( taskText.value.length == 0){
        alert("please enter task description")
        return;
    }

    // add taks item
    document.querySelector('#tasklist').innerHTML += `
        <div class="task">
            <span class="taskname">
                <label>Task：</label>
                <label>${taskText.value}</label>
            </span>
            <button class="delete">
                X
            </button>
        </div>
    `;    

    const current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){

        current_tasks[i].onclick = function(){
            // this.parentNode.remove();
        }
        
        current_tasks[i].addEventListener('click',(event)=>{
            event.target.parentNode.remove();
            //console.log(event.target.parentNode);
        });

    }

});
