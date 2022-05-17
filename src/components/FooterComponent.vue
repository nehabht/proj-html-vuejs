<template>
  <footer>
    <div class="footer_top d-flex align-items-center">
      <div class="container scrollmenu">
        <div class="row">
          <div class="col-3 left_col">
                <div class="logo">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div>
                    A Functional HTML Template <br>
                    for Corporate &amp; Business.
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-phone" />
                    <span>+1 (305) 1234-5678</span>
                </div>
                <div>
                    <span class="">
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        hello@example.com
                    </span>
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    Main Avenue,987
                </div>

                <span class="btn">
                    GET IN TOUCH

                </span>



                
          </div>
          <div class="col ">
            <div class="row justify-content-between">
              <FooterItems
                :menuTitle="title"
                :menuLinks="links"
                v-for="({ title, links }, index) in footerMenu"
                :key="index"
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom container d-flex align-items-center justify-content-between">
        <div>
            <span>
                Enjoy the low price. We are tracking any intention of piracy.
            </span>
        </div>
        <div>
            <span>
                &copy; 2020 NEXTGEN is Proudly Powered by <span class="codings">Codings.</span>
            </span>

        </div>

    </div>
  </footer>
</template>

<script>
import FooterItems from "@/components/FooteItems.vue";
export default {
  components: {
    FooterItems,
  },
  data() {
    return {
      footerMenu: [
        {
          title: "About",
          links: [
            {
              href: "#",
              text: "The Company",
            },
            {
              href: "#",
              text: "Institutional",
            },
            {
              href: "#",
              text: "Social & Events",
            },
            {
              href: "#",
              text: "Innovation",
            },
            {
              href: "#",
              text: "Environment",
            },
            {
              href: "#",
              text: "Tecnology",
            },
          ],
        },
        {
          title: "Services",
          links: [
            {
              href: "#",
              text: "Audit & Assurance",
            },
            {
              href: "#",
              text: "Financial Advisor",
            },
            {
              href: "#",
              text: "Analytics M&A",
            },
            {
              href: "#",
              text: "Middle Marketing",
            },
            {
              href: "#",
              text: "Legal Consulting",
            },
            {
              href: "#",
              text: "Regulatory Risk",
            }
          ],
        },
        {
          title: "Support",
          links: [
            {
              href: "#",
              text: "Responsibility",
            },
            {
              href: "#",
              text: "Terms of Use",
            },
            {
              href: "#",
              text: "About Cookies",
            },
            {
              href: "#",
              text: "Privacy Policy",
            },
            {
              href: "#",
              text: "Accessibility",
            },{
              href: "#",
              text: "Information",
            },
          ]
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.footer_top{
    background-color: #111117;
    height: 600px;
    //overflow-x: auto;
    overflow: auto;
    white-space: nowrap;

}


.logo{
    img{
        height: 45px;
    }
}

.col-3.left_col{
    
    margin: 20px 0px;
    padding: 30px 25px;
    border-radius: 5px;
}

.left_col{
    color: #bcbebc;
    width: 300px;


    div{
        padding: 10px 0px;
        margin-left: 0px
    }

}

.row{
    flex-wrap: nowrap;
    column-gap: 20px;
    overflow-x: auto;
    width: 100%;
}



footer{
    background-color: rgb(12, 11, 11);
    color: #bcbebc;  

}

.footer_bottom{
    height: 60px;
    font-size: 15px;
}

.codings{
    color: #1c918e
}

.btn{
    color: #dedede;
    background-color: transparent;
    margin-top: 16px;

    &:hover{
        color:white
    }
}




</style>