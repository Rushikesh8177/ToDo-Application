import React from 'react'

const ToDoForm = () => {

    function handleSubmit(event){
        event.preventDefault();
       
        payload ={name : name ; description : description}
    }

  return (
    <div>
      <h1 classNameName='text-center text-success'>To Do application </h1>
<form onSubmit={handleSubmit}>
      <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Task Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Description</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
</div> 
</form>     
    </div>
  )
}

export default ToDoForm
