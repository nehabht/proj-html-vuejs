<template>
  <footer>
    <div class="footer_top d-flex align-items-center">
      <div class="container">
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



                
          </div>
          <div class="col">
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

}


.logo{
    img{
        height: 45px;
    }
}

.col-3{
    
    margin: 20px 30px;
    padding: 30px 25px;
    border-radius: 5px;
}

.left_col{
    color: #bcbebc;
    width: 280px;

    div{
        padding: 10px 0px;
    }

}




</style>