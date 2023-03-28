<template>

 
    <div class="dashboard">
      <ul class="nav-tabs">
            <li class="nav-item">
              <a class="nav-link" href="#">個人資料</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">選項2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">選項3</a>
            </li>
            
          </ul> 
        <section class="dashboard-in">
          <form class="form">
            <h3>個人資料</h3>
            <div class="form-center">
              <div class="form-row">
                <label for="name" class="form-label">姓名</label>
                <input type="text" class="form-input">
              </div>
              <div class="form-row">
                <label for="birth" class="form-label">生日</label>
                <input type="date" class="form-input-date" value="2000-01-01" >
              </div>
              <div class="form-row">
                <label for="mail" class="form-label">E-mail</label>
                <input type="text" class="form-input">
              </div>
              <div class="form-row">
                <label for="password" class="form-label">密碼</label>
                <input type="text" class="form-input">
              </div>
              <div class="form-row">
                <label for="phone" class="form-label">電話</label>
                <input type="text" class="form-input">
              </div>
              <div class="form-row">
                <label for="height" class="form-label">身高</label>
                <input type="text" class="form-input">
              </div>
              <div class="form-row">
                <label for="gender" class="form-label">性別</label>
                <select class="form-input-gender">
                  <option>男</option>
                  <option>女</option>
                </select>
              </div>
              
              <button class="btn">儲存</button>
            </div>
            
          </form>
        </section>
    </div>


</template>

<script>


export default {
  name: 'MemberPage'
};
</script>



<style>

.dashboard {
  margin: 50px 300px;
  border-radius: 5px;
  background: #ffffffad;
}



.dashboard  .nav-tabs {
    display: inline-block;
    padding: 0;
    margin: 0;
    
}

.dashboard  .nav-tabs .nav-item{
    display: inline;
  
}

.dashboard  .nav-tabs .nav-item .nav-link{
    color: black;
    float: left;
    padding: 10px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid black;
    font-size: 16px;
    background-color: #ffffffad;
    border-radius: 5px;
    font-weight: bold;
    
}

.dashboard  .nav-tabs .nav-item .nav-link:hover{
    
    background-color: rgb(97, 95, 95);
    
}

.dashboard .dashboard-in {
    width: 100%;
    padding: 0px 20px 20px;
    box-sizing: border-box;
   
}

.dashboard .dashboard-in .form h3 {
  font-size: 30px;
}

.dashboard .dashboard-in .form .form-center {
  grid-template-columns: 1fr 1fr ;
    align-items: center;
    column-gap: 1rem;
    display: grid;
    row-gap: 0.5rem;
}

.dashboard .dashboard-in .form .form-center .form-row{
  margin-bottom: 10px;

}

.dashboard .dashboard-in .form .form-center .form-row .form-label{
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 20px;
  
}

.dashboard .dashboard-in .form .form-center .form-row .form-input{
  width: 100%;
    border: 1px solid var(--grey-200);
    font-size: 100%;
    height: 30px;
    border-radius: 5px;
   padding-left: 10px;
}

.dashboard .dashboard-in .form .form-center .form-row .form-input-date{
  width: 100%;
    border: 1px solid var(--grey-200);
    font-size: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
   
}

.dashboard .dashboard-in .form .form-center .form-row .form-input-gender{
  width: 100%;
    border: 1px solid var(--grey-200);
    font-size: 100%;
    height: 35px;
    border-radius: 5px;
   padding-left: 10px;
}

.dashboard .dashboard-in .form .form-center .btn{
    border: none;
    
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: bold;
    height: 35px;

}


.dashboard .dashboard-in .form .form-center .btn:hover {
  background-color: rgb(196, 248, 185);
  transform: scale(1.00);
  transition: 0.2s;
}
</style>