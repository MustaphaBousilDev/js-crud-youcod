
//----------------------------------------------------------
let data=[]
let title,type,preority,date_created,description,statuss;
let myTodo=document.querySelector('.my-table-todo');
let myNow=document.querySelector('.my-table-now');
let myDone=document.querySelector('.my-table-done');
let featured=document.getElementById('Featured')
let bug=document.getElementById('Bug')
let arr_prority=Array.from(document.querySelector('.preority'))
let arr_status=Array.from(document.querySelector('.status'))
    
    //Event Submit
    document.querySelector('.submit').addEventListener('click',(e)=>{
        e.preventDefault()
        /*console.log(title)console.log(type)console.log(date_created)console.log(description)*/
        Create();
        Read();
        document.getElementById('form-add').reset()
    })

    function Create(){
        title=document.getElementById('title').value 
        if(featured.checked){type=featured.id }
        if(bug.checked){type=bug.id}
        date_created=document.getElementById('date').value 
        description=document.getElementById('description').value 
        arr_prority.forEach((item)=>{
            if(item.selected){
                preority=item.value 
                //console.log(preority)
            }
        })
        arr_status.forEach((item)=>{
            if(item.selected){
                statuss=item.value
                //console.log(statuss)
            }
        })
            data.push({
                title:title,
                type:type,
                priority:preority,
                statuss:statuss,
                date_created:date_created,
                description:description
            })
        console.log(data)
        }
    function Read(){
        myTodo.innerHTML=''
        myNow.innerHTML=''
        myDone.innerHTML=''
        //data=localStorage.getItem('data')
        //console.log(data)
            for(let i=0;i<data.length;i++){
                if(data[i].statuss==="todo"){
                    myTodo.innerHTML+=`
                    <button 
                    onClick="update(${i})"
                   
                    data-bs-toggle="modal" 
					data-bs-target="#modal-task-edit" 
					data-bs-whatever="@mdo"   
                    class="task border-0 bg-white text-start d-flex border-bottom w-100 p-10px">
					<div class="col-1">
						<i style="font-size: 20px;" class="bi bi-question-circle text-success"></i>
					</div>
					<div class="col-11" >
						<h6 " class="card-title mt-1">${data[i].title}</h6>
						<div class="" >
							<div  style="font-size:10px;" class="text-gray">#${i+1} created in ${data[i].date_created}</div>
							<div  "
                                style="font-size: 11px;" 
                                class="text-dark" 
                                title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly."
                            >
                                ${data[i].description}
                            </div>
						</div>
						<div class="">
							<span style="font-size: 8px;" class="btn-xs btn-primary py-1 px-2 rounded">${data[i].type}</span>
                            <span style="font-size: 8px;" class="btn-xs btn-primary py-1 px-2 rounded">${data[i].priority}</span>
						</div>
					</div>
				    </button>
                    
                    `
                }
                else if(data[i].statuss==="now"){
                    myNow.innerHTML+=`
                    <button
                    onClick="update(${i})"
                    data-bs-toggle="modal" 
					data-bs-target="#modal-task-edit" 
					data-bs-whatever="@mdo"    
                    class="task border-0 bg-white text-start d-flex border-bottom w-100 p-10px">
                        <div class="col-1">
                            <i style="font-size: 20px;" class="bi bi-question-circle text-success"></i>
                        </div>
                        <div class="col-11">
                            <h6 class="card-title mt-1">${data[i].title}</h6>
                            <div class="">
                                <div style="font-size:10px;" class="text-gray">#${i+1} created in ${data[i].date_created}</div>
                                <div 
                                    style="font-size: 11px;" 
                                    class="text-dark" 
                                    title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly."
                                >
                                    ${data[i].description}
                                </div>
                            </div>
                            <div class="">
                                <span style="font-size: 8px;" class="btn-xs btn-primary py-1 px-2 rounded">${data[i].type}</span>
                                <span style="font-size: 8px;" class="btn-xs btn-primary py-1 px-2 rounded">${data[i].priority}</span>
                            </div>
                        </div>
                    </button>
                    `
                    
                }else{
                    myDone.innerHTML+=`
                    <button 
                    onClick="update(${i})"
                    data-bs-toggle="modal" 
					data-bs-target="#modal-task-edit" 
					data-bs-whatever="@mdo"
                    class="task border-0 bg-white text-start d-flex border-bottom w-100 p-10px">
                        <div class="col-1">
                            <i style="font-size: 20px;" class="bi bi-question-circle text-success"></i>
                        </div>
                        <div class="col-11">
                            <h6 class="card-title mt-1">${data[i].title}</h6>
                            <div class="">
                                <div style="font-size:10px;" class="text-gray">#${i+1} created in ${data[i].date_created}</div>
                                <div 
                                    style="font-size: 11px;" 
                                    class="text-dark" 
                                    title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly."
                                >
                                    ${data[i].description}
                                </div>
                            </div>
                            <div class="">
                                <span style="font-size: 8px;" class="btn-xs btn-primary py-1 px-2 rounded">${data[i].type}</span>
                                <span style="font-size: 8px;" class="btn-xs btn-primary py-1 px-2 rounded">${data[i].priority}</span>
                            </div>
                        </div>
                    </button>
                    `
                }
            }
        }
    Read()
    function update(h){
        let n=parseInt(h)
        console.log(n)
        document.getElementById('modal-task-edit').innerHTML=`
        <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">

                        <h5 class="modal-title" id="exampleModalLabel">Edit Task Number }</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form onload="Read()" id="form-edit">
                          <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Edit Title:</label>
                            <input value="${isNaN(n) ? '' : data[n].title}"  type="text" id="title-edit" class="form-control">
                          </div>
                          <div class="mb-3 d-flex flex-column">
                            <label for="recipient-name" class="col-form-label">Type:</label>
                            <div class="my-1 mx-2">
                                <input ${isNaN(n) ? '' : (data[n].type=='Featured' ? 'checked' : '')}   id="Featured-edit" class="check-input one"  type="radio" name="flexRadioDefault">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Featured
                                </label>
                            </div>
                            <div class="my-1 mx-2">
                                <input ${isNaN(n) ? '' : (data[n].type=='Bug' ? 'checked' : '')}  id="Bug-edit" class="check-input two"   type="radio" name="flexRadioDefault">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Bug 
                                </label>
                            </div>
                          </div>
                          <div class="mb-3">
                            <label for="message-text" class="col-form-label">Preority:</label>
                            <select id="preority-edit" class="form-select preority-edit" aria-label="Default select example">
                                <option value="please">Please Select</option>
                                <option ${isNaN(n) ? '' : (data[n].priority=='one' ? 'selected' : '')} value="one">One</option>
                                <option ${isNaN(n) ? '' : (data[n].priority=='two' ? 'selected' : '')}  value="two">Two</option>
                                <option ${isNaN(n) ? '' : (data[n].priority=='three' ? 'selected' : '')}  value="three">Three</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label for="message-text" class="col-form-label">Status:</label>
                            <select id="status-edit" class="form-select status-edit" aria-label="Default select example">
                                <option  value="lease select sttus">Please Select</option>
                                <option ${isNaN(n) ? '' : (data[n].statuss=='todo' ? 'selected' : '')}  value="todo">Todo</option>
                                <option ${isNaN(n) ? '' : (data[n].statuss=='now' ? 'selected' : '')}  value="now">Now</option>
                                <option ${isNaN(n) ? '' : (data[n].statuss=='done' ? 'selected' : '')}   value="done">Done</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label class="col-form-label" for="date">
                                Date 
                            </label>
                            <input value="${isNaN(n) ? '' : data[n].date_created}" id="date-edit" class="form-control" type="date">
                          </div>
                          <div class="mb-3">
                            <label for="message-text" class="col-form-label">Description</label>
                            <textarea id="description-edit" class="form-control">
                                ${isNaN(n) ? '' : data[n].description}"
                            </textarea>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer d-flex justify-content-between">
                        <div>
                            <button onClick="Delete(${n})" data-bs-dismiss="modal"  type="button" class="submit btn btn-danger">Delete</button>
                        </div>
                        <div>
                            <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick="modifie(${n})" data-bs-dismiss="modal"  type="button" class="submit btn btn-success">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
        `
    }
function modifie(I){
    let title_edit=document.getElementById('title-edit').value;
    let preority_edit,statuss_edit,type_edit;
    let featured_edit=document.getElementById('Featured-edit')
    let bug_edit=document.getElementById('Bug-edit') 
    if(featured_edit.checked){type_edit=featured.id}
    if(bug_edit.checked){type_edit=bug.id}
    let date_created_edit=document.getElementById('date-edit').value 
    let description_edit=document.getElementById('description-edit').value 
    let arr_prority_edit=Array.from(document.querySelector('.preority-edit'))
    let arr_status_edit=Array.from(document.querySelector('.status-edit'))
    arr_prority_edit.forEach((item)=>{if(item.selected){preority_edit=item.value }})
    arr_status_edit.forEach((item)=>{if(item.selected){statuss_edit=item.value}}) 
    data[I].title=title_edit
    data[I].type=type_edit
    data[I].preority=preority_edit
    data[I].statuss=statuss_edit
    data[I].date_created=date_created_edit
    data[I].description=description_edit
    Read()
}

function Delete(i2){
    data.splice(i2,1);
    Read()
}
