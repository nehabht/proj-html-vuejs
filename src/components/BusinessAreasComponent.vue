<template>
    <div class="b_areas">
        <div class="container ">
            <div class="titles">
                <p>OUR BUSINESS AREAS</p>
                <h2>Excellence in <span>Services</span></h2>
                <div class="subtitle d-flex align-items-center ">
                    <span class="w-100"> We are leader in providing consultancy services with a set of cutting-edge technologies and a team of 
                    experienced and renowed professionals. <br> These are some options that you can hire.
                    </span>
                    <div class="btn ">SEE ALL</div>

                </div>

            </div>

        </div>
        <div class="services container pb-4">
            <div class="row justify-content-between">
                <div class="col-4 ">
                    <div class="icons d-flex justify-content-between ">
                        <font-awesome-icon icon="fa-solid fa-network-wired" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div>
                        <h5 class="fs-4 fw-bold ps-1">Audit &amp; Assurance </h5>
                        <p class="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div class="col-4 ">
                    <div class="icons d-flex justify-content-between ">
                        <font-awesome-icon icon="fa-solid fa-briefcase" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div>
                        <h5 class="fs-4 fw-bold">Finacial Advisory </h5>
                        <p class="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="icons d-flex justify-content-between ">
                        <font-awesome-icon icon="fa-solid fa-chart-simple" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div>
                        <h5 class="fs-4 fw-bold ">Analytics and M&amp;A </h5>
                        <p class="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="icons d-flex justify-content-between ">
                        <font-awesome-icon icon="fa-solid fa-plane-departure" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div>
                        <h5 class="fs-4 fw-bold ">Middle Marketing </h5>
                        <p class="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="icons d-flex justify-content-between ">
                        <font-awesome-icon icon="fa-solid fa-earth-europe" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div>
                        <h5 class="fs-4 fw-bold ">Legal Consulting</h5>
                        <p class="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="icons d-flex justify-content-between ">
                        <font-awesome-icon icon="fa-solid fa-scroll" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div>
                        <h5 class="fs-4 fw-bold ">Regulatory Risk </h5>
                        <p class="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.b_areas{


    background-color: #EEF4ED;

    
}

.titles{
    p{
        color:#058283;
        font-size: 12px;
        font-weight: 600;
        padding-top: 50px;
        padding-bottom: 30px
    }
}

h2{
    font-size: 50px;
    font-weight: bold;

    span{
        color:#058283;
        background-color: #CCE3DE;
        border-radius: 5px; 
        padding: 10px 16px;
    
    }
}


.btn{
    width: 100px;
    height: 35px;
    background-color: #058283;
    color: whitesmoke;

    &:hover{
        color:white

    }

    
}

.subtitle{


    span{
        font-size: 14px;
        color: #757677;
        padding:40px 0px
        
        
    }
}

.col-4{
    background-color: white;
    width: 30%;
    border-radius: 10px;
    padding: 40px;
    margin-bottom: 50px
}


.icons{

    padding-top: 10px;
    padding-bottom: 30px;
    .fa-plane-departure, .fa-network-wired, 
    .fa-briefcase, .fa-chart-simple, .fa-earth-europe, .fa-scroll{
        height: 50px;
        color: #058283;
        font-weight: 100;
    }


    .fa-arrow-right{
        height: 30px;
        color: #93C9C9;
        padding: 8px;

        &:hover{
            color:#058283;
            background-color: #93C9C9;
            border-radius: 50%;
            padding: 8px;
            cursor: pointer;
        }
    }
}

</style>