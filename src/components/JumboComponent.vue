<template>
    <div class="container-fluid jumbo d-flex flex-column justify-content-center align-items-center text-center ">
        <h1>Ready <span>Team</span></h1>

        <p>
            No matter what your company needs, we will be <br>
            ready to assist you in the best possible way.
        </p>

        <div>
            <div class="btn btn1 me-2">GET IN TOUCH</div>
            <div class="btn btn2 ms-2">READ MORE</div>
        </div>


    </div>
</template>


<style lang="scss" scoped>

.jumbo{
    height: 700px;
    background-image: url(@/assets/img/bg-parallax.png);
    background-repeat: no-repeat;
    background-position: center;
    
    p{
        color: #828282;
    }
    
}

h1{
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;

    span{
        color: #1c918e; 
        background-color: #D5E7E8;
        border-radius: 5px; 
        padding: 10px 16px;
    }
}

.btn1{
    color: rgb(241, 241, 241);
    background-color: #1c918e;

    &:hover{
        color:white;
    

    }
}

.btn2{
    color:#1c918e;
    font-weight: 100;

    &:hover{
        font-weight: 400;
        color:#1c918e
    }

}


</style>